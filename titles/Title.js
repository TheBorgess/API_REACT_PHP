import React, { Component , useState} from 'react';
import { Link } from 'react-router-dom';

class Title extends Component {

    state = {
       title: []
    };
   
    componentDidMount() {
      var idd = this.props.match.params.id;
      //console.log(idd);
      //fetch('https://jsonplaceholder.typicode.com/todos/'+ idd)
      fetch('https://jsonplaceholder.typicode.com/posts/' + idd)
      //////fetch('https://jsonplaceholder.typicode.com/users/' + idd)
          .then(res => res.json())
          .then(res => {
              this.setState({
                  title : res
              });
          });
  }

  render() {     
      return (
          <div>
              <h1>&nbsp;Title</h1>    
              <nav>
                <ul>
                  <li>
                     <Link to="/">Home</Link> 
                  </li>
                </ul>
             </nav>
          
             <ul>
                 <li>
                      <p><b> {this.state.title.title}</b></p>
                      <p>{this.state.title.body}</p>
                     
                 </li>
            </ul> 
        </div>
      );
  }
}

export default Title;

