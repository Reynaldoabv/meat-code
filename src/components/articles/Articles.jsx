import React, {useState} from 'react'
import './articles.scss'

import Grid from '../grid/Grid'

import Arrow from '../../assets/arrow.svg'

const Articles = () => {

    const [arrow, setArrow] = useState({
        todos: true,
        productos: false,
        recetas: false,
        consejos: false
    })

    const handleTodos = () => setArrow({ todos: !arrow.todos, productos: false, recetas: false, consejos: false })
    const handleProduct = () => setArrow({ todos: false, productos: !arrow.productos, recetas: false, consejos: false })
    const handleRecetas = () => setArrow({ todos: false, productos: false, recetas: !arrow.recetas, consejos: false })
    const handleConsejos = () => setArrow({ todos: false, productos: false, recetas: false, consejos: !arrow.consejos })

    const { todos, productos, recetas, consejos } = arrow;
    
    return ( 
        <div className="container">
            <div className="articles">
                <div className="article-title">
                    <h2 className="text-center">Nuestros Articulos</h2>
                </div>
            </div>

            <div className="row">
                <div className="col-5 col-sm-3">
                    <div className='card'>
                        <button className="btn justify-content-between d-flex" onClick={handleTodos}>Todos { todos ? <img className="my-auto" src={Arrow} alt='arrow-logo' /> : null}</button>
                        <button className="btn justify-content-between d-flex" onClick={handleProduct}>Productos { productos ? <img className="my-auto" src={Arrow} alt='arrow-logo' /> : null}</button>
                        <button className="btn justify-content-between d-flex" onClick={handleRecetas}>Recetas { recetas ? <img className="my-auto" src={Arrow} alt='arrow-logo' /> : null}</button>
                        <button className="btn justify-content-between d-flex" onClick={handleConsejos}>Consejos { consejos ? <img className="my-auto" src={Arrow} alt='arrow-logo' /> : null}</button>
                    </div>
                </div>  
                <div className="col-7 col-sm-9">
                    <Grid arrow={arrow}/>
                </div>
            </div>           
        </div>
    )
}

export default Articles
