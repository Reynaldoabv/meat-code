import React from 'react'

import ArticleCard from '../article-card/ArticleCard'
import RecipeCard from '../recipe-card/RecipeCard'
import AdviceCard from '../advice-card/AdviceCard'
import ProductCard from '../product-card/ProductCard'

const CardList = ({ articles, recipes, products, advices }) => {

    return (
        <>
            {
                articles && articles ? articles.all.map(article => (
                    <ArticleCard key={article.id} article={article} />
                )) : null
            }   

            {
                recipes && recipes ? recipes.recipes.map(recipe => (
                    <RecipeCard key={recipe.id} recipe={recipe} />
                )) : null
            }

            {
                advices && advices ? advices.advices.map(advice => (
                    <AdviceCard key={advice.id} advice={advice} />
                )) : null
            }

            {
                products && products ? products.products.map(product => (
                    <ProductCard key={product.id} product={product} />
                )) : null
            }
        </>
    )
}

export default CardList
