import React from 'react'
import './header.scss'

import Logo from '../../assets/logo.svg'
import Facebook from '../../assets/facebook-icon.svg'
import Instagram from '../../assets/instagram-icon.svg'
import Youtube from '../../assets/youtube-icon.svg'


const Header = () => {
    return (
        <div className="header justify-content-between">
            <img className="img-fluid logo navbar-brand" src={Logo} alt="Logo-cocina"/>
            <div className="social-media">
                <img className="img-fluid facebook" src={Facebook} alt="facebook-icon"/>
                <img className="img-fluid instagram" src={Instagram} alt="instagram"/>
                <img className="img-fluid youtube" src={Youtube} alt="youtube-icon"/>
            </div>
        </div>
    )
}

export default Header
