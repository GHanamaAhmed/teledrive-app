import * as React from 'react'
import { FileBrowser, FileContextMenu, FileList, FileNavbar, FileToolbar } from 'chonky'
import { Axios } from '../utils/axios'
import { setChonkyDefaults, ChonkyActions } from 'chonky'
import { ChonkyIconFA } from 'chonky-icon-fontawesome'
import { SyncOutlined } from '@ant-design/icons'
import { systemContext } from '../context/systemContext'
import CustomModal from './modal'
import { Button, Modal, Space } from 'antd'
export default function FileSysytem() {
  setChonkyDefaults({ iconComponent: ChonkyIconFA })
  const { files, setFiles, filesChain, path, setPath } = React.useContext(systemContext)
  const [selectedFiles, setSelectedFiles] = React.useState([])
  const [isSync, setIsSync] = React.useState(false)
  const [isRModalOpen, setIsRModalOpen] = React.useState(false)
  const fileActions = React.useMemo(
    () => [
      ChonkyActions.CreateFolder,
      {
        ...ChonkyActions.DeleteFiles,
        effect: (e) => {
          setSelectedFiles(e?.state?.selectedFiles)
          Modal.info({
            title: 'Delete Files',
            content: <p>Are you sure you want to delete the selected files?</p>,
            okCancel: true,
            onOk() {
              removeFiles()
            },
            onCancel() {
              closeRModal()
            }
          })
        }
      },
      {
        id: 'syncTele',
        button: {
          name: isSync ? 'Sync' : 'Async',
          toolbar: true,
          icon: <SyncOutlined width={50} height={50} />
        },
        effect: ({ payload }) => {
          setIsSync((prev) => !prev)
          return true
        }
      }
    ],
    [isSync]
  )
  const fileBrowserRef = React.useRef(null)
  const fileActionHandler = React.useCallback(
    (e) => {
      console.log(e)
      if (e?.id == 'open_files') {
        if (e?.payload?.targetFile?.isDir && e?.payload?.targetFile?.name) {
          setPath((prev) => prev + '/' + e.payload.targetFile?.name)
        }
        if (e?.payload?.targetFile?.name == 'return') {
          console.log('returning')
          console.log(path)
          if (path.split('/').length > 2) {
            setPath((prev) => prev.split('/').slice(0, -1).join('/'))
          }
        }
      }
    },
    [path]
  )
  const removeFiles = React.useCallback(() => {
    if (selectedFiles.length > 0) {
      const request = {
        action: 'delete',
        data: selectedFiles.map((file) => ({
          filterPath: path,
          name: file?.name
        }))
      }
      Axios.post('/', request)
        .then((res) => {
          setSelectedFiles([])

          setFiles((prev) =>
            prev.filter((e) => !JSON.parse(res.data)?.files?.find((el) => el.name == e.name))
          )
        })
        .catch((err) => console.error(err))
    }
    setIsRModalOpen(false)
  }, [selectedFiles])
  const closeRModal = React.useCallback(() => {
    setIsRModalOpen(false)
  }, [isRModalOpen])
  return (
    <>
      {/* <CustomModal isModalOpen={isRModalOpen} onOk={removeFiles} onCancel={closeRModal}>
        
      </CustomModal> */}
      <FileBrowser
        key={3}
        onFileAction={fileActionHandler}
        ref={fileBrowserRef}
        files={files}
        folderChain={filesChain}
        fileActions={fileActions}
        disableDragAndDrop={true}
      >
        <FileNavbar />
        <FileToolbar />
        <FileList />
        <FileContextMenu />
      </FileBrowser>
    </>
  )
}
