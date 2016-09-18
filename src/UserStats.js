import React, { PropTypes } from 'react';

const UserStats = ({ followers = 0, following = 0, repositories = 0 }) => (
  (<div className="gh-widget-stats">
    <div className="gh-widget-item">
      <span className="count">{followers}</span>
      <span className="stat-name">Followers</span>
    </div>
    <div className="gh-widget-item">
      <span className="count">{following}</span>
      <span className="stat-name">Following</span>
    </div>
    <div className="gh-widget-item">
      <span className="count">{repositories}</span>
      <span className="stat-name">Repositories</span>
    </div>
  </div>
));

UserStats.propTypes = {
  followers: PropTypes.number,
  following: PropTypes.number,
  repositories: PropTypes.number,
};

export default UserStats;
