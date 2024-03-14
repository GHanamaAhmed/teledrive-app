import React from 'react'
import { Input } from 'antd'
import { useNavigate } from 'react-router-dom/dist'
export default function Signin() {
  const navigate = useNavigate()
  return (
    <div className="w-full h-screen flex font-Poppins">
      <div className="flex-1 h-full flex justify-center items-center relative bg-[#050A24]">
        <Frame />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width="256px"
          height="256px"
          style={{
            shapeRendering: 'geometricPrecision',
            textRendering: 'geometricPrecision',
            imageRendering: 'optimizeQuality',
            fillRule: 'evenodd',
            clipRule: 'evenodd'
          }}
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <g>
            <path
              style={{ opacity: '0.988' }}
              fill="#fefffe"
              d="M 84.5,-0.5 C 89.5,-0.5 94.5,-0.5 99.5,-0.5C 119.64,3.45835 134.14,14.7917 143,33.5C 165.68,26.5142 183.014,33.1809 195,53.5C 196.145,56.4318 196.978,59.4318 197.5,62.5C 227.202,59.5614 246.535,72.2281 255.5,100.5C 255.5,107.167 255.5,113.833 255.5,120.5C 250.234,141.598 236.9,154.431 215.5,159C 155.5,159.667 95.5,159.667 35.5,159C 16.7532,154.418 4.75319,142.918 -0.5,124.5C -0.5,118.167 -0.5,111.833 -0.5,105.5C 5.7173,84.6281 19.7173,72.6281 41.5,69.5C 34.4367,44.1898 41.4367,23.6898 62.5,8C 69.4613,3.85231 76.7946,1.01898 84.5,-0.5 Z"
            />
          </g>
        </svg>
      </div>
      <div className="flex-1 h-full w-full flex justify-center items-center">
        <div className="w-6/12 flex flex-col gap-4 items-center">
          <p className="text-xl font-bold text-high">Login to your account</p>
          <div className="flex flex-col w-full gap-2">
            <p className="font-light text-high">phone numbre</p>
            <Input size="large" className="text-high" placeholder="Phone" />
          </div>
          <div className="flex flex-col w-full gap-2">
            <div className="w-full flex justify-between">
              <p className="font-light text-default">Verification code</p>
              <button className="text-primary">send</button>
            </div>
            <Input size="large" placeholder="Verification Code" />
          </div>
          <button
            onClick={() => {
              navigate('/home')
            }}
            className="w-full py-3 rounded-md bg-primary text-oncolor"
          >
            SingIn
          </button>
        </div>
      </div>
    </div>
  )
}

const Frame = () => (
  <svg className="w-full h-full absolute" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_118_640)">
      <g filter="url(#filter0_f_118_640)">
        <circle cx="189.5" cy="954.5" r="189.5" fill="#2D55FB" />
      </g>
      <g filter="url(#filter1_f_118_640)">
        <circle cx="774.5" cy="53.5" r="189.5" fill="#2D55FB" />
      </g>
    </g>
    <defs>
      <filter
        id="filter0_f_118_640"
        x="-550"
        y="215"
        width="1479"
        height="1479"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur stdDeviation="275" result="effect1_foregroundBlur_118_640" />
      </filter>
      <filter
        id="filter1_f_118_640"
        x="35"
        y="-686"
        width="1479"
        height="1479"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur stdDeviation="275" result="effect1_foregroundBlur_118_640" />
      </filter>
      <clipPath id="clip0_118_640">
        <rect width="720" height="900" fill="white" />
      </clipPath>
    </defs>
  </svg>
)
