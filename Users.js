import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Users extends Component {

    state = {
         user: [],
         address: []  
    };
       
    componentDidMount() {
      ////var idd = 1;//this.props.match.params.id;   
      fetch('https://jsonplaceholder.typicode.com/users/8')     
          .then(res => res.json())
          .then(res => {
              this.setState({
                  user : res
              });
          })
          .catch(function(error) {
              console.log('error');
          });
    }

  render() {
    
    // Converting JS object to JSON string
    var obj = JSON.stringify(this.state.user);
    console.log('1°=', obj);
    
    // Converting JSON object to JS object
    var obj2 = JSON.parse(obj);
    console.log('2°=', obj2["address"]);

    var obj3 = JSON.stringify(obj2["address"]);
    console.log('3°=', obj3);               

      return (
          <div>
              <h1>&nbsp;User</h1>    
              <nav>
                <ul>
                  <li>
                     <Link to="/">Home</Link> 
                  </li>
                </ul> 
             </nav>
          
             <ul>
                 <li>
                      <p><b> {this.state.user.name}</b></p>
                      <p> {this.state.user.email}</p>
                      <p> {this.state.user.phone}</p>
                      <p> {this.state.user.website}</p>
                                           
                 </li>
            </ul> 
         
        </div>
      );
  }
}

export default Users;