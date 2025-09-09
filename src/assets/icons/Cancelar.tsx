 import type { SVGProps } from "react"
import { memo } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    {...props}
  >
    <path
      fill="#C6007E"
      fillRule="evenodd"
      d="M22.5 45C34.926 45 45 34.926 45 22.5S34.926 0 22.5 0 0 10.074 0 22.5 10.074 45 22.5 45ZM10.586 11.086a2 2 0 0 0 0 2.828L19.672 23l-9.086 9.086a2 2 0 1 0 2.828 2.828l9.086-9.086 9.086 9.086a2 2 0 1 0 2.828-2.828L25.328 23l9.086-9.086a2 2 0 0 0-2.828-2.828L22.5 20.172l-9.086-9.086a2 2 0 0 0-2.828 0Z"
      clipRule="evenodd"
    />
  </svg>
)
const Cancel = memo(SvgComponent)
export default Cancel
