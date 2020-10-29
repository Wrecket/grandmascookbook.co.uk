import React from 'react';
import './RecipeList.css';
import RecipeItem from '../RecipeItem/RecipeItem';
import Welcome from '../Welcome/Welcome';
import ScrollContainer from 'react-indiana-drag-scroll'
import Rrec from '../Rrec/Rrec';
import Frec from '../Frec/Frec';
import Nrec from '../Nrec/Nrec';

const RecipeList = (props) => { 

    function setter() {
            if ((props.state.searchInput) !== "") {
                return filteredRecipes.map((recipe) => <RecipeItem key={recipe.id} recipe={recipe} />)
            } else {
            return <div className="rec-links d-flex"><Nrec/><Rrec/><Frec/></div>
            }
        }

    let recipes = props.state.recipes
        let filteredRecipes = props.state.recipes.filter(recipe => {
            return recipe.category.toLowerCase().includes(props.state.searchInput) || recipe.name.toLowerCase().includes(props.state.searchInput) || recipe.time.toLowerCase().includes(props.state.searchInput)
        })
        if (recipes.length === 0) return <div className="noItems">No Items Found</div>;
        else
		    return <div className="recipeList">
                <div className="recipe__overwrap">
                <div className="phantom-input2"></div>
                    
                    <Welcome check={props.check}/>               
                    <ScrollContainer className="recipe scroll-container container-fluid pl-5 pb-5">
                        {setter()}
                    </ScrollContainer>
                    
                </div>  
                    </div>; 
    }


export default RecipeList;