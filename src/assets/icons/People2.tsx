 import type { SVGProps } from "react"
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
      d="M23.5 5.88c3.127 0 5.686 2.646 5.686 5.88s-2.559 5.88-5.686 5.88-5.686-2.646-5.686-5.88 2.559-5.88 5.686-5.88Zm0-5.88c-6.301 0-11.371 5.243-11.371 11.76 0 6.517 5.07 11.76 11.371 11.76s11.371-5.243 11.371-11.76C34.871 5.243 29.801 0 23.5 0Zm0 27.44C11.371 27.44 1.421 36.848 0 49h5.733c1.374-8.869 8.812-15.68 17.767-15.68S39.893 40.131 41.267 49H47c-1.374-12.152-11.371-21.56-23.5-21.56Z"
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
const People2 = memo(SvgComponent)
export default People2
