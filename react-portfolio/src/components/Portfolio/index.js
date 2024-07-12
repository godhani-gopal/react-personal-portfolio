import React, { useEffect, useState } from 'react'
import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import portfolioData from '../../data/portfolio.json'

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [isLoading, setIsLoading] = useState(true)
  const [animateImages, setAnimateImages] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    // Simulate loader completion
    const loaderTimer = setTimeout(() => {
      setIsLoading(false)
      setAnimateImages(true) // Set this to true to start image animations
    }, 3000) // Match this duration with your loader duration

    // Clean up the timers on component unmount or when `useEffect` re-runs
    return () => {
      clearTimeout(timer)
      clearTimeout(loaderTimer)
    }
  }, [])

  const renderPortfolio = (portfolio) => {
    return (
      <div className="images-container">
        {portfolio.map((project, idx) => {
          return (
            <div
              className={`image-box ${animateImages ? 'animate' : ''}`}
              key={idx}
              style={{ animationDelay: `${idx * 0.2}s` }} // Stagger the animation
            >
              <img
                className="project-image"
                src={project.cover}
                alt="project-image"
              />
              <div className="content">
                <p className="title">{project.title}</p>
                <h4 className="description">{project.description}</h4>
                {project.url && (
                  <button
                    className="btn"
                    onClick={() => window.open(project.url)}
                  >
                    View
                  </button>
                )}
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <div className="container portfolio-page">
      <h1 className="page-title">
        <AnimatedLetters
          letterClass={letterClass}
          strArray={['P', 'o', 'r', 't', 'f', 'o', 'l', 'i', 'o']}
          idx={15}
        />
      </h1>
      {isLoading ? (
        <Loader type="pacman" />
      ) : (
        <div>{renderPortfolio(portfolioData.portfolio)}</div>
      )}
    </div>
  )
}

export default Portfolio