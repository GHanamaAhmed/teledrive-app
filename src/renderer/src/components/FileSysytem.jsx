import * as React from 'react'
import { FileBrowser, FileContextMenu, FileList, FileNavbar, FileToolbar } from 'chonky'
import { Axios } from '../utils/axios'
import { setChonkyDefaults, ChonkyActions } from 'chonky'
import { ChonkyIconFA } from 'chonky-icon-fontawesome'
import { SyncOutlined } from '@ant-design/icons'
import { systemContext } from '../context/systemContext'
export default function FileSysytem() {
  setChonkyDefaults({ iconComponent: ChonkyIconFA })
  const { files, filesChain, path, setPath } = React.useContext(systemContext)
  const [isSync, setIsSync] = React.useState(false)
  const fileActions = React.useMemo(
    () => [
      ChonkyActions.CreateFolder,
      ChonkyActions.DeleteFiles,
      {
        id: 'syncTele',
        button: {
          name: isSync ? 'Sync' : 'Async',
          toolbar: true,
          icon: <SyncOutlined width={50} height={50} />
        },
        effect: ({ payload }) => {
         setIsSync(prev=>!prev)
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
  return (
    <FileBrowser
      key={3}
      onFileAction={fileActionHandler}
      ref={fileBrowserRef}
      files={files}
      folderChain={filesChain}
      fileActions={fileActions}
    >
      <FileNavbar />
      <FileToolbar />
      <FileList />
      <FileContextMenu />
    </FileBrowser>
  )
}
