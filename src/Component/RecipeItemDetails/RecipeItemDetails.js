import React from 'react';
import { useEffect } from 'react'
import recipes from "../data/recipes.json";
import './RecipeItemDetails.css'
import { Link, useHistory } from 'react-router-dom'
import tab from '../media/tab.png'


const RecipeItemDetails = (props) => {
    const recipeId = props.match.params.id;
    const recipe = recipes.find(r => r.id === Number(recipeId));
    const nextRec = recipes.find(r => r.id === (Number(recipeId)+1));
    const prevRec = recipes.find(r => r.id === (Number(recipeId)-1));
    const ingredients = recipe.ingredients;

    useEffect(() => {
        window.scrollTo(0, 0)
        }, [])

    function NextButton() {
        let history = useHistory();
      
        function handleClick() {
            if ((recipe.id+1) <= recipes.length -1) {
                history.push(`/recipes/${nextRec.id}`);
            }
        }
      
        return (
          <button className="btn btn-secondary recipe__btn" type="button" onClick={handleClick}>
            Next Recipe 
          </button>
        );
      }

      function PrevButton() {
        let history = useHistory();
      
        function handleClick() {
            if ((recipe.id-1) > 0) {
                history.push(`/recipes/${prevRec.id}`);
            }
        }
      
        return (
          <button className="btn btn-secondary recipe__btn mr-1" type="button" onClick={handleClick}>
            Previous Recipe 
          </button>
        );
      }

    return ( 
        <div className="RecipeItemDetails-d">
            
            <div className="phantom"></div>
           <div className=" recipe__menu-box-outer-d container shadow">
               <img src={tab} alt="filing tab" className="tab"></img>
               <Link to="/"><p className="font tab__text">Recipes</p></Link>
           <Link to="/"><h2 className="recipe__logo font">Grandma's Cookbook.</h2></Link>
           <Link to="/"><p className="x">X</p></Link>
                <div className="btn-wrap container">
                    {PrevButton()}  
                    {NextButton()}
                </div>
                    <div className="recipe__menu-box-inner-d shadow">
                        <div className="recipe__details">
                            <div className="recipe__desc-img-container shadow">
                                <h1 className="recipe__desc-name font">{`Recipe Name:`}<br/> {`${recipe.name}`}</h1>
                                <img src={recipe.image} alt={recipe.name} className="recipde__desc-img img-fluid" /> 
                                <div className="recipe__desc-text font">
                                    <p className="recipe__desc-inner-text">{`Cook Time: ${recipe.time}`}</p>
                                    <p className="recipe__desc-inner-text">{`Temperature: ${recipe.temperature}`}</p>
                                </div>
                            </div>
                            <div className="recipe__ingredients">
                                <h3 className="font brown">Ingredients:</h3>
                                <ul className="recipe__list">
                                    {
                                        ingredients.map((item, index) => <li key={index} classn="recipe__list-item">{item}</li>)
                                    }
                                </ul>   
                            </div>
                            </div>
                            <div className="recipe__method mt-3">
                                <h3 className="font mt-3 brown">Method:</h3>
                                <ul className="recipe__list">
                                    {
                                        recipe.recipe.map((item, index) => <li key={index} classn="recipe__list-item">{item}</li>) 
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="padder"></div> 
                                  
        </div>
     );
}
 
export default RecipeItemDetails;