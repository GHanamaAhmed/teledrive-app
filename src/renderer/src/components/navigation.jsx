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
      <div className="flex gap-2 justify-around items-center w-full py-5">
        <svg
          id="SvgjsSvg1011"
          width={50}
          height={50}
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          xmlns:svgjs="http://svgjs.com/svgjs"
        >
          <defs id="SvgjsDefs1012" />
          <g id="SvgjsG1013">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={50} height={50}>
              <path
                d="M16.114 9.291c.552-.552 1.1-1.84-1.2-.276a395.806 395.806 0 0 1-6.489 4.372 2.7 2.7 0 0 1-2.117.046c-1.38-.414-2.991-.966-2.991-.966s-1.1-.691.783-1.427c0 0 7.961-3.267 10.722-4.418 1.058-.46 4.647-1.932 4.647-1.932s1.657-.645 1.519.92c-.046.644-.414 2.9-.782 5.338-.553 3.451-1.151 7.225-1.151 7.225s-.092 1.058-.874 1.242a3.787 3.787 0 0 1-2.3-.828c-.184-.138-3.451-2.209-4.648-3.221a.872.872 0 0 1 .046-1.473 169.31 169.31 0 0 0 4.835-4.602Z"
                fill="#156fef"
                className="color000 svgShape"
              />
            </svg>
          </g>
        </svg>

        <p className="text-xl font-Poppins text-high">teledrive</p>
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
