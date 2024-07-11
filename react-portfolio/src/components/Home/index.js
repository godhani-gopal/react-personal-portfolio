import React, { useEffect, useState } from 'react'
import './index.scss'
import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-g.png'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'
import Loader from 'react-loaders'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [loading, setLoading] = useState(true)
  
  const nameArray = ['o', 'p', 'a', 'l']
  const jobArray = [
    'S',
    'o',
    'f',
    't',
    'w',
    'a',
    'r',
    'e',
    ' ',
    'E',
    'n',
    'g',
    'i',
    'n',
    'e',
    'e',
    'r',
  ]

  useEffect(() => {
    const loaderTimer = setTimeout(() => {
      setLoading(false)
    }, 1500) // Loader delay set to 2 seconds

    const letterTimer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000) // Animation starts after 2 seconds of content display

    return () => {
      clearTimeout(loaderTimer)
      clearTimeout(letterTimer)
    }
  }, [])

  if (loading) {
    return <Loader className="loader" type="pacman" />
  }

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m</span>
          <img src={LogoTitle} alt="developer" />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={19}
          />
        </h1>
        <h2>Full Stack Developer / Java Developer</h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
      <Logo />
    </div>
  )
}

export default Home
