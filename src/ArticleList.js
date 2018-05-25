import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let ArticleList = ({articles}) => (
  <div>
    {articles.map(article => <div key={article.id}><a href={article.url}>{article.headline}</a></div>)}
  </div>
)

export default ArticleList;
