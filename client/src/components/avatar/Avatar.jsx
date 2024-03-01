import React from 'react'

const Avatar = ({children, backgroundColor, py, px, color, borderRadius, fontsize, textAlign, cursor}) => {

    const style = {
        backgroundColor,
        padding: `${py} ${px}`,
        color: color||'black',
        borderRadius,
        fontsize,
        textAlign: "center",
        cursor:cursor||null,
    }
  return (
    <div style = {style}>
      {children}
    </div>
  )
}

export default Avatar
