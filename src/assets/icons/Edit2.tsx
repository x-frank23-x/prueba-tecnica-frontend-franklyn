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
    <g clipPath="url(#a)">
      <path
        fill="#01BEDB"
        d="M30.4 22.8c0 8.394-6.806 15.2-15.2 15.2C6.806 38 0 31.194 0 22.8 0 14.406 6.806 7.6 15.2 7.6c1.049 0 2.075.106 3.067.308l-2.736 2.736c-.11-.004-.22-.004-.331-.004-6.703 0-12.16 5.457-12.16 12.16S8.497 34.96 15.2 34.96s12.16-5.457 12.16-12.16c0-.11 0-.22-.004-.33l2.736-2.733c.202.988.308 2.014.308 3.063ZM30.476 0 12.882 17.594l7.524 7.524L38 7.524 30.476 0ZM10.731 19.745 9.12 28.88l9.135-1.611-7.524-7.524Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h38v38H0z" />
      </clipPath>
    </defs>
  </svg>
)
const Edit2 = memo(SvgComponent)
export default Edit2
