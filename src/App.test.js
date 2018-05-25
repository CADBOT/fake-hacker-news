import React from 'react';
import App from './App';
import ArticleList from './ArticleList';

import {shallow, mount} from 'enzyme';
import sinon from 'sinon'

jest.mock('axios', () => {
  let data = [
    {
      "headline": "Avail Programming Language ",
      "url": "http://www.availlang.org/about-avail/introduction/index.html"
    },
    {
      "headline": "Drawpile is a free software collaborative drawing program",
      "url": "https://drawpile.net/"
    }
    ]
  
  return {
    get: jest.fn(() => Promise.resolve(data)),
  }
})

import axios from 'axios'

describe('<App/>', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<App/>)
  })
  it('renders an article list', () => {
    let articles = wrapper.state().articles
    expect(wrapper.containsMatchingElement(<ArticleList articles={articles}/>)).toBe(true)
  })
  xit('calls the news api in componentDidMount', () => {
     let getArticlesSpy = sinon.spy(App.prototype, 'getArticles')
     wrapper = mount(<App/>)
     expect(getArticlesSpy.calledOnce).toEqual(true) 
  })
  it('getArticles will send an axios call and set state with the result', () => {
     let componentDidMount = wrapper.instance().componentDidMount
     componentDidMount().then(() => {
       expect(axios.get).toHaveBeenCalled()
     })
    /*
     let data = [
    {
      "headline": "Avail Programming Language ",
      "url": "http://www.availlang.org/about-avail/introduction/index.html"
    },
    {
      "headline": "Drawpile is a free software collaborative drawing program",
      "url": "https://drawpile.net/"
    }
    ]

     let resolved = new Promise((r) => r({data}))
     sinon.stub(axios, 'get').returns(resolved)    
     let componentDidMount = wrapper.instance().componentDidMount
     componentDidMount().then(() => {
       expect(axios.get).toHaveBeenCalled()
     })
*/
     /*
     axios.get('blah').then( r => {
       console.log('r', r)
       console.log('data', data)
     })
     8?*/
  })
})

