import React from 'react'

const Avatar = ({ children, backgroundColor, px, py, color, borderRadius, fontSize, textAlign, cursor, width, height}) => {

  const style = {
    backgroundColor,
    padding: `${py} ${px}`,
    color: color || 'black',
    borderRadius:borderRadius||null,
    textAlign: "center",
    cursor: cursor || null,
    width: width || null,
    height: height || null,
    fontSize:fontSize,
  }
  return (
    <div style={style}>
      {children}
    </div>
  )
};

export default Avatar
