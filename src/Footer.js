// Libs
import React, { PropTypes } from 'react';
import moment from 'moment';

const Footer = ({ userUrl = '', lastActiveDate = {} }) => (
  (<div className="gh-widget-container">
    <div className="gh-widget-follow">
      <button>
        <a className="gh-widget-link" target="new" href={userUrl}>
          Follow
        </a>
      </button>
    </div>
    <div className="gh-widget-active-time">
      <span>
        {`Last active: ${moment(lastActiveDate).fromNow()}`}
      </span>
    </div>
  </div>
  )
);

Footer.propTypes = {
  userUrl: PropTypes.string,
  lastActiveDate: PropTypes.object,
};

export default Footer;
