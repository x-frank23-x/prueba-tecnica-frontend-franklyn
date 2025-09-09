import type { SVGProps } from "react"
import { memo } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    // Remove the width and height attributes from the SVG tag itself
    // width="1em"
    // height="1em"
    fill="none"
    // Add a viewBox attribute to define the coordinate system for scaling
    viewBox="0 0 57 55"
    {...props}
  >
    <path
      fill="url(#a)"
      d="M31.858 48.98c-6.89 1.187-14.24-.83-19.56-6.058-5.324-5.229-7.377-12.447-6.169-19.21 3.26 4.398 7.289 9.027 11.913 13.568 4.62 4.542 9.337 8.498 13.816 11.7ZM49.44 33.208c2.006-7.293.095-15.409-5.733-21.133-5.829-5.724-14.092-7.605-21.518-5.63a22.24 22.24 0 0 0-5.378 2.21c.616 2.275 2.542 5.545 5.412 9.22 4.361-2.534 10.075-1.956 13.828 1.726a11.032 11.032 0 0 1 1.758 13.58c3.742 2.82 7.071 4.711 9.387 5.316a21.859 21.859 0 0 0 2.244-5.29Z"
    />
    <path
      fill="url(#b)"
      d="M54.813 53.834c-4.44 4.361-20.05-3.889-34.856-18.434C5.15 20.855-3.253 5.529 1.187 1.167c2.63-2.582 9.165-.747 17.13 4.197-2.106-.781-3.688-.845-4.49-.057-2.538 2.493 3.634 12.597 13.79 22.57 10.154 9.974 20.443 16.036 22.98 13.544.803-.789.734-2.343-.057-4.41 5.034 7.818 6.899 14.24 4.273 16.823Z"
    />
    <defs>
      <linearGradient
        id="a"
        x1={71.539}
        x2={71.539}
        y1={55.014}
        y2={-13.402}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#0047BB" />
        <stop offset={0.8} stopColor="#01BEDB" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={106.276}
        x2={26.069}
        y1={58.396}
        y2={-23.273}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.3} stopColor="#CC007E" />
        <stop offset={1} stopColor="#D9409E" />
      </linearGradient>
    </defs>
  </svg>
)

const Imagologo = memo(SvgComponent)
export default Imagologo