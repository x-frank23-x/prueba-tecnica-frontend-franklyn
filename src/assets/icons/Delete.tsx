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
      fill="#C5C5C5"
      d="M25.886 15.4v4.2h-16.8v-4.2h16.8ZM17.5 4.2c-7.332 0-13.3 5.968-13.3 13.3 0 7.332 5.968 13.3 13.3 13.3 7.332 0 13.3-5.968 13.3-13.3 0-7.332-5.968-13.3-13.3-13.3Zm0-4.2C27.163 0 35 7.837 35 17.5S27.163 35 17.5 35 0 27.163 0 17.5 7.837 0 17.5 0Z"
    />
  </svg>
)
const Delete = memo(SvgComponent)
export default Delete