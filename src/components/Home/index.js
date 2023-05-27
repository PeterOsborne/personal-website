import LogoTitle from '../../assets/images/logo-p.png'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import './index.scss'
import Logo from './Logo'
import Loader from 'react-loaders'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['e', 't', 'e', 'r']
  const lastNameArray = ['H', 'a', 'r', 'a', 'l', 'd', 'u', 'r', ' ', 'H', 'a', 'm', 'a', 'r', ' ', 'O', 's', 'b', 'o', 'r', 'n', 'e', '.']

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')

    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m &emsp; </span>
            <img src={LogoTitle} alt="JavaScript Developer Name, Web Developer Name" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15} />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={lastNameArray}
              idx={19} />
          </h1>
          <h2> Programmer / Musician / Footballer / Interested in Mathematics and Finance </h2>
          <Link to="/contact" className="flat-button"> CONTACT ME</Link>
        </div>
        <Logo />
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Home