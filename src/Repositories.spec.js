import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Repositories from './Repositories';

const repositories = [
  {
    id: 123,
    url: 'www.test.com',
    name: 'csharp-repo',
    language: 'C#',
    stargazers_count: 15
  },
  {
    id: 155,
    url: 'www.test.com',
    name: 'javascript-repo',
    language: 'javascript',
    stargazers_count: 4
  },
  {
    id: 188,
    url: 'www.test.com',
    name: 'python-repo',
    language: 'python',
    stargazers_count: 44
  },
  {
    id: 199,
    url: 'www.test.com',
    name: 'lisp-repo',
    language: 'lisp',
    stargazers_count: 10
  },

];

describe('<Repositories />', () => {
  it('should render number of <Repository /> based on top', () => {

  });

  it('should sort the repositories based on the stargazers_count', () => {

  });
});
