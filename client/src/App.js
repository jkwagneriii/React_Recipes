import React from 'react'
import Axios from 'axios'
import './App.css'


const App = () => {
    const APP_ID = "8bacc5bd";
    const APP_KEY = "b60c242d9b21f12794d7e14b797c70ac";

    const url = `https://api.edamam.com/search?q=chicken&amp;app_id=${APP_ID}&amp;app_key=${APP_KEY}`;

    const getData = async () => {
        const result = await Axios.get(url)

        console.log(result)
    }

    getData()

    return (
        <div className="App">
            <h1>Food Searching App</h1>
        </div>
    )
}

export default App
