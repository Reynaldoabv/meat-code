import React, {useState} from 'react'
import './hero-background.scss'

import Header from '../header/Header'
import TextAnimation from '../../components/text-animation/TextAnimation'

const HeroBackground = () => {

    const [titles] = useState({
        title: "El secreto",
        title2: "de tu cocina",
        delay: 2000,
        duration: 1000            
    })
    
    return (
        <div className="hero">
            <Header />
            <div className="row space">
                <div className="col-7">
                    <TextAnimation titles={titles} />
                </div>
            </div>
        </div>
    )
}

export default HeroBackground
