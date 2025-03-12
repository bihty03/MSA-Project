import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={110}
    height={70}
    fill="none"
    {...props}
  >
    <path
      fill="#393C43"
      d="M40.5 0v107h2V0h-2Z"
      mask="url(#path-1-inside-1_2213_3884)"
    />
  </svg>
)
export default SvgComponent

