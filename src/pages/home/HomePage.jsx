import React from 'react'
import './home-page.scss'

import Hero from '../../components/hero/HeroBackground'
import Articles from '../../components/articles/Articles'
import ContactUs from '../../components/contact-us/ContactUs'

const HomePage = () => {
    return(
        <div className="home-page">
            <Hero />
            <Articles />
            <ContactUs />
        </div>
    )
}      

export default HomePage
