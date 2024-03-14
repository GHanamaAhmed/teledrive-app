import * as React from 'react'
import { FileBrowser, FileContextMenu, FileList, FileNavbar, FileToolbar } from 'chonky'
import { Axios } from '../utils/axios'
import { setChonkyDefaults } from 'chonky'
import { ChonkyIconFA } from 'chonky-icon-fontawesome'
import { convertToDesiredFormat } from '../utils/convert'
import { teleContext } from '../context/teleContext'
export default function TelegramFiles() {
  setChonkyDefaults({ iconComponent: ChonkyIconFA })
  const { files, setFiles, filesChain, setFilesChain, path, setPath } =
    React.useContext(teleContext)
  const fileBrowserRef = React.useRef(null)
  const fileActionHandler = React.useCallback(
    (e) => {
      if (e?.id == 'open_files') {
        if (e?.payload?.targetFile?.isDir && e?.payload?.targetFile?.name) {
          setPath((prev) => prev + '/' + e.payload.targetFile?.name)
        }
        if (e?.payload?.targetFile?.name == 'return') {
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
      key={1}
      onFileAction={fileActionHandler}
      ref={fileBrowserRef}
      files={files}
      folderChain={filesChain}
    >
      <FileNavbar />
      <FileToolbar />
      <FileList />
      <FileContextMenu />
    </FileBrowser>
  )
}
