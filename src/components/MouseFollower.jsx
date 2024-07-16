import {useState, useEffect } from 'react'
import { mouseFollowerStyles } from '../consts'

export function MouseFollower() {

    const [enabledEffect, setEnabledEffect] = useState(true)
    const [positionMouse, setPositionMouse] = useState({x: 0, y: 0})
    const [styleMouse, setStyleMouse] = useState("none")

    useEffect(() => {
        document.body.classList.toggle("enabled", enabledEffect)
        return () => {
            document.body.classList.remove("enabled")
        }
    }, [enabledEffect])
  
    useEffect(() => {
      const handleMove = (event) => {
        const { clientX, clientY } = event;
        setPositionMouse({x: clientX, y: clientY})
      }
      if (enabledEffect) {
        window.addEventListener("pointermove", handleMove)
      }
      return () => {
        window.removeEventListener("pointermove", handleMove) 
      }
    }, [enabledEffect])

    return (
        <>
            <div className='cursorFollower' style={mouseFollowerStyles(positionMouse, setStyleMouse)}/>
        </>
    )
}