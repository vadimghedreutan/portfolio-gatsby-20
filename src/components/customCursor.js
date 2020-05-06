import React, {useState, useEffect} from 'react'

// import {Cursor} from '../styles/globalStyles'

const CustomCursor = () => {
  const [positionMouse, setPositionMouse] = useState({
    x: 400,
    y: 400
  })

  const onMouseMove = (event) => {
    const {pageX: x, pageY: y} = event
    setPositionMouse({ x , y })
  }

  useEffect(() => {
    document.addEventListener('mousemove', onMouseMove)
    return () => {
      document.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  return (
    <>
      <Cursor style={{ left: `${positionMouse.x}px`, top: `${positionMouse.y}px` }} />
    </>
  )
}

export default CustomCursor
