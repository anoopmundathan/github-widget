import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import sinon from 'sinon';

import GithubWidget from './GithubWidget';

const userDetails = {
  "login": "user",
  "avatar_url": "https://avatars3.githubusercontent.com/u/1103255?v=3",
  "html_url": "https://github.com/user",
  "repos_url": "https://api.github.com/users/user/repos",
  "name": "Developer",
  "location": null,
  "bio": null,
  "public_repos": 3,
  "followers": 5,
  "following": 3,
};

const repositories = [
  {
    "id": 1,
    "name": "repo-1",
    "html_url": "https://github.com/user/repo-1",
    "pushed_at": "2015-06-09T03:48:22Z",
    "stargazers_count": 2,
    "language": "JavaScript",
  },
  {
    "id": 2,
    "name": "repo-2",
    "html_url": "https://github.com/user/repo-2",
    "pushed_at": "2012-06-09T03:48:22Z",
    "stargazers_count": 4,
    "language": "C#",
  },
  {
    "id": 3,
    "name": "repo-3",
    "html_url": "https://github.com/user/repo-3",
    "pushed_at": "2016-06-09T03:48:22Z",
    "stargazers_count": 3,
    "language": "Python",
  },
];


describe('<GithubWidget />', () => {

  it('should render the widget', () => {
    sinon.stub(GithubWidget.prototype, 'componentDidMount').callsFake(function () {
      this.setState({userDetails, repositories});
    });

    const wrapper = mount(<GithubWidget username="user"/> );
  });

  it('should call componentDidMount', () => {
    const callback = sinon.stub(GithubWidget.prototype, 'get');
    callback.withArgs('https://api.github.com/users/user').returns(userDetails);
    callback.withArgs('https://api.github.com/users/user/repos').returns(repositories);

    const wrapper = mount(<GithubWidget username="user"/> );


  });

});

