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
  id="SvgjsSvg1011"
  width={256}
  height={256}
  xmlns="http://www.w3.org/2000/svg"
  version="1.1"
  xmlnsXlink="http://www.w3.org/1999/xlink"
  xmlns:svgjs="http://svgjs.com/svgjs"
>
  <defs id="SvgjsDefs1012" />
  <g id="SvgjsG1013">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={256}
      height={256}
    >
      <path
        d="M16.114 9.291c.552-.552 1.1-1.84-1.2-.276a395.806 395.806 0 0 1-6.489 4.372 2.7 2.7 0 0 1-2.117.046c-1.38-.414-2.991-.966-2.991-.966s-1.1-.691.783-1.427c0 0 7.961-3.267 10.722-4.418 1.058-.46 4.647-1.932 4.647-1.932s1.657-.645 1.519.92c-.046.644-.414 2.9-.782 5.338-.553 3.451-1.151 7.225-1.151 7.225s-.092 1.058-.874 1.242a3.787 3.787 0 0 1-2.3-.828c-.184-.138-3.451-2.209-4.648-3.221a.872.872 0 0 1 .046-1.473 169.31 169.31 0 0 0 4.835-4.602Z"
        fill="#fefffe"
        className="color000 svgShape"
      />
    </svg>
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
