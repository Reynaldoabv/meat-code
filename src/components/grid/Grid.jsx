import React, { useState, useEffect } from 'react'
import axios from 'axios'

import CardList from '../cardList/CardList'
    
const Grid = ({ arrow }) => {

    const [articles, setArticles] = useState('')
    const [products, setProducts] = useState('')
    const [recipes, setRecipes] = useState('')
    const [advices, setAdvices] = useState('')

    const { todos, productos, recetas, consejos } = arrow

    const getArticles = () => {
        const articles = `https://5eed24da4cbc340016330f0d.mockapi.io/api/articles`
        if(todos){    
            axios.get(articles).then(res => {
                const all = res.data     
                setArticles({ all })     
            })                       
        }
    }

    const getProducts = () => {
        const filterProducts = `https://5eed24da4cbc340016330f0d.mockapi.io/api/articles?filter=Productos`
        if(productos){
            axios.get(filterProducts).then(res => {
                const products = res.data
                setProducts({ products })
            })
        } 
    }

    const getRecipes = () => {
        const filterRecipes = `https://5eed24da4cbc340016330f0d.mockapi.io/api/articles?filter=Recetas`
        if(recetas){
            axios.get(filterRecipes).then(res => {
                const recipes = res.data
                setRecipes({ recipes })
            })
        } 
    }

    const getAdvices = () => {
        const filterAdvices = `https://5eed24da4cbc340016330f0d.mockapi.io/api/articles?filter=Consejos`
        if(consejos){
            axios.get(filterAdvices).then(res => {
                const advices = res.data
                setAdvices({ advices })
            })
        } 
    }

    const fetchArticles = (arrow) => { 
        getArticles()
        getProducts()
        getRecipes()        
        getAdvices()
    }
    
    useEffect(() => {
        fetchArticles(arrow)            
    }, [arrow, fetchArticles]) 

    return (
        <div className="row">                                                     
            { todos && articles ? <CardList articles={articles} /> : null }
            { productos && products ? <CardList products={products} /> : null }
            { recetas && recipes ? <CardList recipes={recipes} /> : null  }
            { consejos && advices ? <CardList advices={advices} /> : null  }
        </div>
    )
}

export default Grid
