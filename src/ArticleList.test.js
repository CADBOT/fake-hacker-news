import React from 'react';
import ArticleList from './ArticleList';

import {shallow} from 'enzyme';
describe('<ArticleList/>', () => {
  let wrapper
  let articles = [
    {
    "id": 1,
    "headline": "A self-driving toy car using end-to-end learning",
    "url": "https://github.com/experiencor/self-driving-toy-car"
    }
  ]
  beforeEach(() => {
    wrapper = shallow(<ArticleList articles={articles}/>)
  })
  it('renders each article as an a tag inside a div', () => {
    console.log(wrapper.debug())
    let aTag = wrapper.find('a')
    console.log
    expect(aTag.text()).toEqual('A self-driving toy car using end-to-end learning')
    expect(aTag.matchesElement(<a href='https://github.com/experiencor/self-driving-toy-car'>A self-driving toy car using end-to-end learning</a>)).toEqual(true)
  })
})
