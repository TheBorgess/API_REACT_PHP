import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AllTitles extends Component {
  
    state = {
       titles: []
    };
  
  componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/posts')
          .then(res => res.json())
          .then(res => {
              this.setState({
                  titles: res
              });
          });
  }

  render() {
     
     //console.log(this.state.titles);
     //<p><b>Title:</b> <a target='_self' href={`Title/${item.id}`} id='teste' value='testeee'>{item.title}</a></p>
      
      return (
          <div>
              <h1>&nbsp;All Titles</h1>    
              <nav>
                <ul>
                  <li>
                     <Link to="/">Home</Link> 
                  </li>
                </ul>
             </nav>
          
             <ul>
                  {this.state.titles.map(item => (
                      <li key={item.id}>
               
                        <p><b></b> <Link to={`/Title/${item.id}`}>{item.title}</Link></p>       
                          
                      </li>
                  ))}
              </ul>
        </div>
      );
  }
}

export default AllTitles;