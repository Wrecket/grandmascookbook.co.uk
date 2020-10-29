import React from 'react';
import './RecipeItem.css'
import { HashLink as Link } from 'react-router-hash-link';


const Recipeitem = ({recipe}) => {
    
    return ( 
            <div className="Recipeitem">
                
                    <Link to={`/recipes/${recipe.id}#navbar`} className="recipe__link">
                        <div className=" recipe__menu-box-outer">
                        <h2 className="recipe__tiny-logo font">Grandma's Cookbook.</h2>
                            <div className="recipe__menu-box-inner">
                                <img src={recipe.image} alt={recipe.name} className="recipe__menu-box-img"></img> 
                                <div className="recipe__textwrap">
                                    <h3 className="recipe__menu-box-img-text font">{recipe.name}</h3>
                                    <p className="recipe__menu-box-img-desc">{`Cooking time: ${recipe.time} minutes`}</p>
                                </div>
                            </div>
                        </div>
                    </Link>
            </div>
     );
}
 
export default Recipeitem;
