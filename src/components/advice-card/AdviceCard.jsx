import React from 'react'
import './advice-card.scss'

import { Spring } from 'react-spring/renderprops'

const AdviceCard = ({ advice }) => {
    
    const {image, title, content} = advice

    return (
        <Spring
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}
            config={{ delay: 500 , duration: 3500}} 
        >
            { props => (
                <div className="advice-card col-10 col-sm-6 col-lg-4" style={props}>
                    <div className="card mb-3">   
                        <img className="card-img-top img-fluid" src={image} alt="Card cap" />
                        <div className="card-body">
                            <h5 className="card-title"><strong>{title}</strong></h5>
                            <p className="card-text">{content}</p>
                            <a href="https://www.example.com"><p className="view-more">VER MÁS</p></a>
                        </div>
                    </div>
                </div>
            )}
        </Spring>       
    )
}

export default AdviceCard