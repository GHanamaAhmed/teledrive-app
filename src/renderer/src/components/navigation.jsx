import React, { useState } from 'react'
import { FolderOpenOutlined, CloudSyncOutlined, SendOutlined } from '@ant-design/icons'
import { Menu } from 'antd'
import { useNavigate } from 'react-router-dom/dist'
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type
  }
}

const items = [
  getItem('System Files', 'systemFiles', <FolderOpenOutlined />),
  getItem('Sync Files', 'syncFiles', <CloudSyncOutlined />),
  getItem('Telegram Files', 'telegramFiles', <SendOutlined />)
]

// submenu keys of first level
const rootSubmenuKeys = ['sub1', 'sub2', 'sub4']

const App = () => {
  const [openKeys, setOpenKeys] = useState(['sub1'])
  const navigate = useNavigate()
  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1)
    if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys)
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : [])
    }
  }

  return (
    <div className="flex flex-col items-center">
      <div className="flex gap-2 justify-around w-full py-5">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z"
            fill="#1677FF"
          />
        </svg>
        <p className="text-xl font-semibold">Company</p>
      </div>
      <Menu
        mode="inline"
        openKeys={openKeys}
        onClick={(e) => {
          console.log(e)
          if (e.key == 'systemFiles') {
            navigate('/home')
          }
          if (e.key == 'syncFiles') {
            navigate('/home/syncFiles')
          }
          if (e.key == 'telegramFiles') {
            navigate('/home/telegramFiles')
          }
        }}
        onOpenChange={onOpenChange}
        style={{ width: 256 }}
        items={items}
      />
    </div>
  )
}

export default App
