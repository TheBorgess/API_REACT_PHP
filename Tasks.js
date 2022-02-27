import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Tasks extends Component {
  
    state = {
       tasks: []
    };
  
 
  componentDidMount() {
      fetch('https://www.boredapi.com/api/activity')
          .then(res => res.json())
          .then(res => {
              this.setState({
                  tasks: res
              });
          });
  }

  render() {
      var price;
      price = parseFloat(this.state.tasks.key);
      //console.log(price);
      //Format the price in Brazilian currency
      price =  Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(price);          
      //price = price.toLocaleString(undefined, {maximumFractionDigits:2})
      ///////price = price.slice(4,100);
      //console.log(price);
      return (
          <div>
              <h1>&nbsp;Tasks</h1>    
              <nav>
                <ul>
                  <li>
                     <Link to="/">Home</Link> 
                  </li>
                </ul>
             </nav>
          
             <ul>
                 <li>
                      <p><b>Activity:</b> {this.state.tasks.activity}</p>
                      <p><b>Type:</b> {this.state.tasks.type}</p>
                      <p><b>Participants:</b> {this.state.tasks.participants}</p>
                      <p><b>Price: </b>{price}</p>
                      <p><b>Accessibility:</b> {this.state.tasks.accessibility}</p>
                 </li>
            </ul> 
        </div>
      );
  }
}

export default Tasks;