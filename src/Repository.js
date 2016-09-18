import React, { PropTypes } from 'react';

const Repository = ({ url = '', name = '', language = '', stars = 0 }) => ((
  <div className="gh-widget-container">
    <div className="name">
      <div>
        <a className="gh-widget-link" href={url} >{name}</a>
      </div>
    </div>
    <div className="language">
      <div>
        {language}
      </div>
    </div>
    <div className="stars">
      <div>
        <i className="fa fa-star-o" />&nbsp;
        {stars}
      </div>
    </div>
  </div>
));

Repository.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  stars: PropTypes.number.isRequired,
};

export default Repository;
