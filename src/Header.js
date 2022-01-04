import React from "react"

function Header(props) {
  return(
    <div>
      <header {...props.title} />
    </div>
  )
}

export default Header;
