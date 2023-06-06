import React, { useState, useEffect } from 'react'
import { Article } from './DropDown.style'

function DropDown({ children, visibility, type }) {
  const [visibilityAnimation, setVisibilityAnimation] = useState(false)
  useEffect(() => {
    visibility
      ? setVisibilityAnimation(true)
      : setTimeout(() => {
          setVisibilityAnimation(false)
        }, 400)
  }, [visibility])

  return (
    <Article
      className={
        visibility ? 'slide-fade-in-dropdown' : 'slide-fade-out-dropdown'
      }
      type={type}
    >
      {children}
    </Article>
  )
}

export default DropDown
