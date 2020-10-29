import React from 'react';
import { Link } from 'react-router-dom'
import recipes from '../data/recipes.json'


const Frec = () => {
    let newRecipe = recipes.filter(recipe => {
        return recipe.id === 7
    }) 
    return (
        
            <div className=" welcome__menu-box-outer newrec">
                    <div className="welcome__menu-box-inner">
                    <h2 className="welcome__new-recipe font">Featured Recipe</h2>
                    <Link to={`/recipes/7`} id={newRecipe.name} className="recipe__link">
                        <img src={newRecipe[0].image} alt={newRecipe[0].name} className="welcome__menu-box-img"/>
                        <div className="welcome__menu-name-wrap">
                            <h3 className="welcome__menu-box-img-text font">{newRecipe[0].name}</h3>
                        </div>
                    </Link>    
                    </div>
             </div>
        
      );
    }

    export default Frec