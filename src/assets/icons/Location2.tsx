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
      d="M24 10.78c1.584 0 2.88 1.323 2.88 2.94s-1.296 2.94-2.88 2.94c-1.584 0-2.88-1.323-2.88-2.94s1.296-2.94 2.88-2.94Zm5.76 22.785v3.92c7.584.637 12.336 2.499 13.968 3.675-2.016 1.47-8.736 3.92-19.728 3.92S6.288 42.63 4.272 41.16c1.632-1.176 6.384-3.038 13.968-3.675v-3.92C7.776 34.398 0 37.485 0 41.16 0 45.472 10.752 49 24 49s24-3.528 24-7.84c0-3.675-7.776-6.762-18.24-7.595Zm-3.84-6.272V41.16h-3.84V27.293c-6.528-.931-11.52-6.664-11.52-13.573C10.56 6.125 16.56 0 24 0c7.44 0 13.44 6.125 13.44 13.72 0 6.909-4.992 12.642-11.52 13.573Zm5.76-13.573c0-4.312-3.456-7.84-7.68-7.84s-7.68 3.528-7.68 7.84c0 4.312 3.456 7.84 7.68 7.84s7.68-3.528 7.68-7.84Z"
    />
    <defs>
      <linearGradient
        id="a"
        x1={24}
        x2={24}
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
const Location2 = memo(SvgComponent)
export default Location2
