import * as React from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import { TeleContextProvider } from './context/teleContext'
import { SystemContextProvider } from './context/systemContext'
import { SyncContextProvider } from './context/syncContext'
function App() {
  return (
    <>
      <TeleContextProvider>
        <SystemContextProvider>
          <SyncContextProvider>
            <RouterProvider router={router} />
          </SyncContextProvider>
        </SystemContextProvider>
      </TeleContextProvider>
    </>
  )
}
export default App
