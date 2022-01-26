/* eslint-disable react/prop-types */
import React from "react"

export function Header(props) {
  return(
    <div>
      <header {...props.title} />
    </div>
  )
}
