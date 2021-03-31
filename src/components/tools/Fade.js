import React, { useState, useEffect } from 'react'

const Fade = (props) => {
  const [opacity, setOpacity] = useState(false)

  useEffect(() => {
    setOpacity(true)
  }, [])

  return (
    <div
      className={
        'transition-opacity duration-500 ease-in ' + (opacity ? 'opacity-100' : 'opacity-0')
      }
    >
      {props.children}
    </div>
  )
}

export default Fade
