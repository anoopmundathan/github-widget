// Libs
import React, { Component, PropTypes } from 'react';
import moment from 'moment';

// Components
import UserDetails from './UserDetails';
import UserStats from './UserStats';
import Repositories from './Repositories';
import Footer from './Footer';

const baseUserUrl = 'https://api.github.com/users/';

const get = (url) => (
  // Return a new promise.
  new Promise((resolve, reject) => {
    // Do the usual XHR stuff
    const req = new XMLHttpRequest();
    req.open('GET', url);

    req.onload = () => {
      // This is called even on 404 etc
      // so check the status
      if (req.status === 200) {
        // Resolve the promise with the response text
        resolve(req.response);
      } else {
        // Otherwise reject with the status text
        // which will hopefully be a meaningful error
        reject(Error(req.statusText));
      }
    };

    // Handle network errors
    req.onerror = () => {
      reject(Error('Network Error'));
    };

    // Make the request
    req.send();
  })
);

const getLastPushDate = (repositories = []) => {
  if (repositories.length === 0) {
    return moment();
  }

  const pushDates = repositories.map(repo => (moment(repo.pushed_at)));

  return moment.max(pushDates);
};

class GithubWidget extends Component {
  static propTypes = {
    username: PropTypes.string.isRequired,
  };

  state = {
    userDetails: {},
    repositories: [],
  };

  componentDidMount() {
    const { username } = this.props;

    get(`${baseUserUrl}${username}`).then(response => {
      const userDetails = JSON.parse(response);
      this.setState({
        ...this.state,
        userDetails,
      });

      return get(userDetails.repos_url);
    }).then(response => {
      const userRepos = JSON.parse(response);
      this.setState({
        ...this.state,
        repositories: userRepos,
      });
    });
  }

  render() {
    const { userDetails, repositories } = this.state;

    if (userDetails === null) {
      return <div>Doing stuff</div>;
    }

    return (
      <div className="github-widget">
        <UserDetails
          imageUrl={userDetails.avatar_url}
          username={userDetails.login}
          name={userDetails.name}
          bio={userDetails.bio}
          location={userDetails.location}
        />
        <UserStats
          following={userDetails.following}
          followers={userDetails.followers}
          repositories={userDetails.public_repos}
        />
        <hr className="gh-widget-hr" />
        <Repositories repositories={repositories} top={3} />
        <Footer userUrl={userDetails.html_url} lastActiveDate={getLastPushDate(repositories)} />
      </div>
    );
  }
 }

export default GithubWidget;
