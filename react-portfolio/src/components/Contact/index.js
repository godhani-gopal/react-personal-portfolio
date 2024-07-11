import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const navigate = useNavigate()
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => clearTimeout(timeoutId)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    emailjs
      .sendForm(
        'godhanigopal0011_react',
        'template_ebpysm8',
        form.current,
        '3v4kGMuusbyeoO5eV'
      )
      .then(
        () => {
          alert('Message successfully sent!')
          navigate('/')
          setIsSubmitting(false)
        },
        (error) => {
          alert('Failed to send the message, please try again')
          console.error('Error sending email:', error) // Log the error for debugging
          setIsSubmitting(false)
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in freelance opportunities, particularly on
            ambitious or large projects. Additionally, I am open to exploring
            new positions and opportunities, including relocation. <br />
            <br />
            Please feel free to contact me with any requests or questions using
            the form below.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input
                    type="submit"
                    className="flat-button"
                    value="SEND"
                    disabled={isSubmitting}
                  />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Gopal Godhani
          <br />
          <br />
          Farmington, MI 48335 <br />
          United States
          <br /> <br />
          <span>godhanigopal0011@gmail.com</span>
          <br />
          <span>(313) 454-1661</span>
        </div>
        <div className="map-wrap">
          <MapContainer
            center={[42.463950489314875, -83.37420779464466]}
            zoom={7}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[42.463950489314875, -83.37420779464466]}>
              <Popup>
                Gopal Godhani here, come over for a cup of coffee :)
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
