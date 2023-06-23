import './index.scss'
import LogoS from '../../assets/images/logo-p.png'
import LogoSubtitle from '../../assets/images/logo_Peter.png'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub, } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () =>
(
    <div className='nav-bar'>


        <Link className='logo' to='/'>
            <img src={LogoS} alt="logo" />
            <img className='sub-logo' src={LogoSubtitle} alt="Peter" />
        </Link>


        <nav className='nav-buttons'>

            <NavLink
                exact="true"
                activeclassname="active"
                to="/hello"
                className='home-link'
            >
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink
                exact="true"
                activeclassname="active"
                className="about-link"
                to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink
                exact="true"
                activeclassname="active"
                className="contact-link"
                to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
            <NavLink
                exact="true"
                activeclassname="active"
                className="blog-link"
                to="/blog">
                <FontAwesomeIcon icon={faBook} color="#4d4d4e" />
            </NavLink>


        </nav>


        <ul>
            <li>
                <a
                    href="https://www.linkedin.com/in/peter-haraldur-hamar-osborne-210540221/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon
                        icon={faLinkedin}
                        color="#4d4d4e"
                        className="anchor-icon"
                    />

                </a>

            </li>
            <li>
                <a
                    href="https://github.com/PeterOsborne"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon
                        icon={faGithub}
                        color="#4d4d4e"
                        className="anchor-icon"
                    />
                </a>
            </li>
        </ul>

    </div>


)

export default Sidebar