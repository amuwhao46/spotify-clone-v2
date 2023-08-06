import React, { Children } from 'react'

interface BoxProps {
  children: React.ReactNode;
  className?: string;
}

function Box({children}: BoxProps) {
  return (
    <div>{children}</div>
  )
}

export default Box