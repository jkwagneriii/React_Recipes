import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import ParticlesBg from "particles-bg";
import FoodSearch from './FoodSearch'

class App extends Component {
    constructor() {
      super();
      this.state = {
        name: "React"
      };
    }
  
    render() {
      return (
        <div>
          <FoodSearch/>
          <ParticlesBg type="polygon" bg={true}/>
        </div>
      );
    }
  }

ReactDOM.render(<App />, document.getElementById('root'));