import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import axios from 'axios'

import ArticleList from './ArticleList'

class App extends Component {
  state = {
    articles: []
  }

  getArticles() {

  }
  componentDidMount() {
    //this.getArticles()
    axios.get('http://localhost:3000/articles')
      .then(res => {

      })
  }

  render() {
    return (
      <div>
        <ArticleList articles={this.state.articles}/>
      </div>
    )
  }
}

export default App;
