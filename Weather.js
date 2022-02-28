import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Weather extends Component {
  
    state = {
       weather: []
    };
  
 
  componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/todos')
          .then(res => res.json())
          .then(res => {
              this.setState({
                  weather: res
              });
          });
  }

  render() {
     
     //console.log(this.state.weather);
      
      return (
          <div>
              <h1>Weather</h1>    
              <nav>
                <ul>
                  <li>
                     <Link to="/">Home</Link> 
                  </li>
                </ul>
             </nav>
          
             <ul>
                  {this.state.weather.map(item => (
                      <li key={item.id}>
             
                          <p><b>Title:</b> <a target='_self' href={`Weather/${item.id}`}>{item.title}</a></p>
                    
                      </li>
                  ))}
              </ul>
        </div>
      );
  }
}

export default Weather;