import React, { useState, useEffect, useRef } from 'react'
import './contact-us.scss'

import axios from 'axios'

const ContactUs = () => {

    const [details, setDetails] = useState({
        name:'',
        lastName: '',
        email: '',
        phone: ''
    })

    const inputRef = useRef(null)

    useEffect(() =>{
        inputRef.current.focus()
    }, [])

    const handleChange = e => {
        const { name, value } = e.target;
        setDetails({ ...details, [name]: value});
    }

    const sendingData = () => {
        
        const url = `https://5eed24da4cbc340016330f0d.mockapi.io/api/subscribe`

        axios
            .post(url, { details })
            .then(res => {
                console.log(res)
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        sendingData()
        e.target.reset();
    }
    
    return (
        <div className="container contact-us">
            <div className="contact-us-title">
                <h2 className="text-center">Contáctanos</h2>
            </div>
            <form className="contact-us-form mt-5" onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-3 offset-3">
                        <label><strong>NOMBRE: </strong></label><br/>
                        <input 
                            type="text"
                            onChange={handleChange}
                            name="name"
                            ref={inputRef}
                            className="input"
                        />
                    </div>
                    <div className="col-3">
                        <label><strong>APELLIDO: </strong></label><br/>
                        <input 
                            type="text"
                            onChange={handleChange}
                            name="lastName"
                            className="input"
                        />
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-3 offset-3">
                        <label><strong>EMAIL: </strong></label><br/>
                        <input 
                            type="email"
                            onChange={handleChange}
                            name="email" 
                            className="input"
                        />
                    </div>
                    <div className="col-3">
                        <label><strong>TÉLEFONO: </strong></label><br/>
                        <input 
                            type="text"
                            onChange={handleChange}
                            name="phone"
                            className="input"
                        />
                        <input className="contact-us-form-button" type="submit" value="ENVIAR"/>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ContactUs
