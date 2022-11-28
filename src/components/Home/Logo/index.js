import { useRef } from 'react'
import LogoS from '../../../assets/images/logo-p.png'
import './index.scss'

const Logo = () => {
  const solidLogoRef = useRef()


  return (
    <div className="logo-container" >
      <img
        className="solid-logo"
        ref={solidLogoRef}
        src={LogoS}
        alt="JavaScript,  Developer"
      />

    </div>
  )
}

export default Logo