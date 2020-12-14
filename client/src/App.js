import React, {useState} from 'react'
import Axios from 'axios'
import {v4 as uuidv4} from 'uuid';
import './App.css'
import Recipe from './components/Recipe';

 
const App = () => {
    const [query, setQuery] = useState("")
    const [recipes, setRecipes] = useState([]);

    const APP_ID = "8bacc5bd";
    const APP_KEY = "b60c242d9b21f12794d7e14b797c70ac";

    const url = `https://api.edamam.com/search?q=${query}&amp;app_id=${APP_ID}&amp;app_key=${APP_KEY}`;

    const getData = async () => {
        const result = await Axios.get(url)
        setRecipes(result.data.hits)
        console.log(result)
        setQuery("");
    }

    const onChange = (event) => {
        setQuery(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        getData();
    }

    return (
        <div className="App">
            <h1>Food Searching App</h1>
            <form className="search-form" onSubmit={onSubmit}>
                <input 
                type="text" 
                placeholder="Search Recipes" autoComplete="off" 
                onChange={onChange}
                value={query}/>
                <input type="submit" value="Search"/>
            </form>
            <div className="recipes">
                {/* Conditional statement to check if the recipes array is empty. If not empty, we need to receive the requested data. */}
                {recipes !== [] && 
                    recipes.map(recipe => 
                    <Recipe key={uuidv4()} recipe={recipe}/>)}
            </div>
        </div>
    )
}

export default App
