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
      fill="#40CEE4"
      fillRule="evenodd"
      d="M18.5 2a2 2 0 1 0-4 0v13H2a2 2 0 1 0 0 4h12.5v13a2 2 0 1 0 4 0V19H32a2 2 0 1 0 0-4H18.5V2Z"
      clipRule="evenodd"
    />
  </svg>
)
const Create = memo(SvgComponent)
export default Create
