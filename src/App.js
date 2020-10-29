import React from 'react';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import RecipeList from './Component/RecipeList/RecipeList';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import RecipeItemDetails from './Component/RecipeItemDetails/RecipeItemDetails';
import Footer from './Component/Footer/Footer'
import Login from './Component/Login/Login';
import recipes from './Component/data/recipes.json'

class App extends React.Component {
  
  constructor() {
    super()
    this.state = {
       recipes : recipes,
       searchInput: ""
    }
}

window = () => {
  console.log(window.location.search);
}

handleSearch = (e) => {
  e.preventDefault()
  this.setState({
      searchInput: e.target.value.toLowerCase()
  })
}

check = (e) => {
  e.preventDefault()
  this.setState({
      searchInput: e.target.id.toLowerCase()
  })
}

menuFunc = (e) => {
  e.preventDefault()
  this.setState({
      searchInput: e.target.id.toLowerCase()
  })
}

topFunction = () => {
  console.log("scrolling");
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

render() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <React.Fragment>
        <Route 
          path="/" 
          render={() =>
            <Navbar state={this.state} recipes={this.state.recipes} searchInput={this.state.searchInput} handleSearch={this.handleSearch} />
          }
          />
          <Route exact path="/login" component={Login} />
          <Route 
          path="/" 
          render={() =>
            <RecipeList state={this.state} recipes={this.state.recipes} check={this.check} topFunction={this.topFunction} searchInput={this.state.searchInput} handleSearch={this.handleSearch} />
          }
          />
          <Route path="/:filter/recipes" component={RecipeList} />
          <Route path="/recipes/:id" component={RecipeItemDetails} />
          <Footer />
          </React.Fragment>
      </Switch>
    </BrowserRouter>
  );
}

  
}

export default App;
