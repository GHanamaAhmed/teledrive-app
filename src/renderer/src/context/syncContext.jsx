import React, { createContext, useEffect, useState } from 'react'
import { convertToDesiredFormat } from '../utils/convert'
import { Axios } from '../utils/axios'
export const syncContext = createContext(null)
export function SyncContextProvider({ children }) {
  const [files, setFiles] = useState([])
  const [filesChain, setFilesChain] = useState([])
  const [path, setPath] = useState('/')
  const fetchFilesSystem = async () => {
    await Axios.post('/', {
      action: 'read',
      path: path,
      showHiddenItems: false,
      data: []
    })
      .then((res) => {
        console.log(JSON.parse(res.data))
        let resJson = JSON.parse(res.data)
        setFiles(resJson?.files?.map((file) => convertToDesiredFormat(file)))
        if (resJson?.cwd) {
          setFilesChain([{ id: 'gf', name: 'return' }, convertToDesiredFormat(resJson?.cwd)])
        }
      })
      .catch((err) => console.error(err))
  }

  useEffect(() => {
    fetchFilesSystem()
  }, [path])

  return (
    <syncContext.Provider value={{ files, setFiles, filesChain, setFilesChain, path, setPath }}>
      {children}
    </syncContext.Provider>
  )
}
