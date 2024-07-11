import React, { useEffect } from 'react'
import './index.scss'

const generateRandomCharacter = () => {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*(){}[]<>|/?+=_-~~!#$%^&*()_+-=[]{};:\'",.<>?•⇩⇿—▸☓✂︎♨︎✈︎♗♘☉⚓︎✠✧✦☍⚔︎☸︎⚐⚝🁢▶︎◻︎❖◉◎●◦△✤⭐︎✤✸✺❊✥❀✿❉❄︎❂❁❤︎❥❧❡⛺︎⛳︎♧♤♡♢♚♜♛☀︎☾☁︎☂︎Ωµℬℨ℔℥ℹ︎ℳ℞ℑℌ'

  return characters.charAt(Math.floor(Math.random() * characters.length))
}

const generateRandomColor = () => {
  const letters = '0123456789ABCDEF'
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

const generateRandomPosition = () => {
  const viewportWidth = window.innerWidth
  const positionX = Math.random() * 0.73 * viewportWidth + 0.2 * viewportWidth
  return positionX
}

const createShape = () => {
  const shape = document.createElement('div')
  shape.className = 'shape'
  shape.textContent = generateRandomCharacter()
  shape.style.color = generateRandomColor() 
  shape.style.fontWeight = 'bold'

  shape.style.left = `${generateRandomPosition()}px`

  shape.style.animationDelay = `${Math.random() * 3}s` 
  return shape
}

const Logo = () => {
  useEffect(() => {
    const container = document.querySelector('.container')
    const interval = setInterval(() => {
      const shape = createShape()
      container.appendChild(shape)

      setTimeout(() => {
        container.removeChild(shape)
      }, 4000) 
    }, 100) 

    return () => clearInterval(interval) 
  }, [])

  return <></>
}

export default Logo