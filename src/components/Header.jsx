import React from 'react'

const Header = ({text, bgColor, textColor}) => {
  const headerStyles = 
  {
    backgroundColor: bgColor,
    color : textColor
}
  return (
    <div  style={headerStyles}>
      <h2>{text}</h2>
    </div>
  )
}

Header.defaultProps = {
  text : 'My first props',
  bgColor : 'black', 
  textColor:'pink'
}

export default Header