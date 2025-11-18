import { useEffect } from 'react'

const Cursor = () => {
  useEffect(() => {
    const cursor = document.createElement('div')
    cursor.id = 'custom-cursor'
    cursor.style.position = 'fixed'
    cursor.style.top = '0'
    cursor.style.left = '0'
    cursor.style.width = '16px'
    cursor.style.height = '16px'
    cursor.style.borderRadius = '9999px'
    cursor.style.background = 'radial-gradient(circle at 30% 30%, rgba(17,24,39,0.9), rgba(17,24,39,0.6))'
    cursor.style.boxShadow = '0 8px 24px rgba(0,0,0,0.15)'
    cursor.style.pointerEvents = 'none'
    cursor.style.zIndex = '9999'
    cursor.style.transform = 'translate(-50%, -50%)'
    cursor.style.mixBlendMode = 'multiply'
    document.body.appendChild(cursor)

    const move = (e) => {
      cursor.style.transition = 'transform 120ms ease-out, width 200ms ease, height 200ms ease'
      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
    }

    const grow = () => {
      cursor.style.width = '28px'
      cursor.style.height = '28px'
      cursor.style.background = 'radial-gradient(circle at 30% 30%, rgba(17,24,39,0.9), rgba(17,24,39,0.5))'
    }

    const shrink = () => {
      cursor.style.width = '16px'
      cursor.style.height = '16px'
      cursor.style.background = 'radial-gradient(circle at 30% 30%, rgba(17,24,39,0.9), rgba(17,24,39,0.6))'
    }

    window.addEventListener('mousemove', move)
    window.addEventListener('mousedown', grow)
    window.addEventListener('mouseup', shrink)

    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mousedown', grow)
      window.removeEventListener('mouseup', shrink)
      document.getElementById('custom-cursor')?.remove()
    }
  }, [])

  return null
}

export default Cursor
