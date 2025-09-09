 
import type{ SVGProps  } from "react"
import {   memo } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    {...props}
  >
    <path
      fill="url(#a)"
      d="M47 0v15.68h-5.64v-9.8H5.64v9.8H0V0h47ZM2.82 41.16V49h7.52v-7.84H2.82Zm33.84 0V49h7.52v-7.84h-7.52ZM47 19.6v17.64H0V19.6h47Zm-33.84 8.82c0-2.705-2.106-4.9-4.7-4.9-2.594 0-4.7 2.195-4.7 4.9 0 2.705 2.106 4.9 4.7 4.9 2.594 0 4.7-2.195 4.7-4.9Zm30.08 0c0-2.705-2.106-4.9-4.7-4.9-2.594 0-4.7 2.195-4.7 4.9 0 2.705 2.106 4.9 4.7 4.9 2.594 0 4.7-2.195 4.7-4.9Z"
    />
    <defs>
      <linearGradient
        id="a"
        x1={23.5}
        x2={23.5}
        y1={0}
        y2={49}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#C6007E" />
        <stop offset={1} stopColor="#E280BE" />
      </linearGradient>
    </defs>
  </svg>
)
const Car2 = memo(SvgComponent)
export default Car2
