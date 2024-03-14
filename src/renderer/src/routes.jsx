import * as React from 'react'
import Navigation from './components/navigation'
import FileSysytem from './components/FileSysytem'
import { createBrowserRouter, createRoutesFromElements, Route, Outlet } from 'react-router-dom'
import SyncFiles from './components/syncFiles'
import TelegramFiles from './components/telegramFiles'
import Signin from './components/signin'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="" element={<Signin />} />,
      <Route
        path="home"
        element={
          <>
            <div className="h-[90vh] flex">
              <div>
                <Navigation />
              </div>
              <div className="h-full flex-1">
                <Outlet />
              </div>
            </div>
          </>
        }
      >
        <Route path="" element={<FileSysytem />} />
        <Route path="syncFiles" element={<SyncFiles />} />
        <Route path="telegramFiles" element={<TelegramFiles />} />
      </Route>
    </Route>
  )
)

export { router }
