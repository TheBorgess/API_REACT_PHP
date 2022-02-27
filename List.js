import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class List extends Component {
  state = {
      linguagens: []
  };

  componentDidMount() {
      fetch('http://alefesouza.dev/api/languages.php')
          .then(res => res.json())
          .then(res => {
              this.setState({
                  linguagens: res
              });
          });
  }


  render() {
      //console.log(this.state.linguagens);
      return (
          <div>
              <h1>List of Languages</h1>
              <nav>
                <ul>
                  <li>
                     <Link to="/">Home</Link>
                  </li>
                </ul>
             </nav>
              
              <ul>
                  {this.state.linguagens.map(item => (
                      <li key={item.id}>
                          <p><b>Name:</b> {item.name}</p>
                          <p><b>Creator:</b> {item.creator}</p>
                          <p><b>Year:</b> {item.year}</p>
                          <p><b>Image:</b> <a target='_self' href={item.image}>Open</a></p>
                      </li>
                  ))}
              </ul>
          </div>
      );
  }
}

export default List;
