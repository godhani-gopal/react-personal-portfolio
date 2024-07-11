import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoG from '../../assets/images/logo-g.png'
// import LogoSub from '../../assets/images/logo_sub_g.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelope,
  faHome,
  faUser,
  faCalendarAlt,
  faSuitcase,
} from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      {<img src={LogoG} alt="logo"></img>}
      {/* {<img className="sub-logo" src={LogoSub} alt="gopal"></img>} */}
    </Link>
    <nav>
      <NavLink exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="about-link"
        to="/about"
      >
        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="portfolio-link"
        to="/portfolio"
      >
        <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="contact-link"
        to="/contact"
      >
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
      </NavLink>
    </nav>

    <ul>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/gopal-g-6682aaa9/"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            className="anchor-icon"
            color="#4d4d4e"
          />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/godhani-gopal"
        >
          <FontAwesomeIcon
            icon={faGithub}
            className="anchor-icon"
            color="#4d4d4e"
          />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2an0zJTditDgGCbxk1qo0gsOhHXT6xv6LTYk7GsPjmC1B09l3o5U61edfRF7OL1laFBVvUbeSZ?gv=true"
        >
          <FontAwesomeIcon
            icon={faCalendarAlt}
            className="anchor-icon"
            color="#4d4d4e"
          />
        </a>
      </li>
    </ul>
  </div>
)

export default Sidebar
