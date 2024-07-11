import { useEffect, useState } from 'react'
import {
  faJava,
  faPython,
  faGitAlt,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import { faCloud } from '@fortawesome/free-solid-svg-icons'

import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    // Clean up the timer on component unmount or when `useEffect` re-runs
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            Hello, I'm Gopal Godhani, a passionate Software Engineer. My journey
            in software development is driven by a deep curiosity for new
            opportunities and a desire to push the boundaries of what's
            possible. Whether it's optimizing systems for efficiency or
            exploring new ways to enhance user experiences, I'm always eager to
            embrace new challenges and innovations.
          </p>
          <p align="LEFT">
            Beyond coding, I find immense joy in the dynamic nature of the tech
            industry. I'm open to exploring different roles and opportunities
            that allow me to grow both personally and professionally.
            <p>
              Whether it's AI, cloud computing, or emerging technologies, I'm
              excited about the possibilities they bring.
            </p>
          </p>
          <p>
            Outside of work, you'll find me exploring nature through hiking
            trails, staying active with weightlifting and yoga, and engaging
            with the tech community to stay informed and inspired.
          </p>
          <p>
            I thrive on continuous learning and am ready to contribute my skills
            to meaningful projects that make a difference.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faJava} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faCloud} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faPython} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
