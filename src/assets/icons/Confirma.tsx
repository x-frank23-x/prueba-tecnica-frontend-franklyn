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
      fill="#01BEDB"
      fillRule="evenodd"
      d="M22.5 45C34.926 45 45 34.926 45 22.5S34.926 0 22.5 0 0 10.074 0 22.5 10.074 45 22.5 45Zm-8.837-11.65-6.917-5.853c-2.305-1.95 1.281-4.985 3.33-3.034 1.281.975 2.035 1.59 2.79 2.206.753.615 1.507 1.23 2.788 2.206.768-.65.906-.794.827-.727 6.149-5.203 12.297-10.405 18.19-15.607 2.305-1.734 5.892 1.084 3.586 3.035l-2.562 2.167L17.25 33.35a2.798 2.798 0 0 1-3.587 0Z"
      clipRule="evenodd"
    />
  </svg>
)
const Confirm = memo(SvgComponent)
export default Confirm
