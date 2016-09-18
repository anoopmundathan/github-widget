import React, { PropTypes } from 'react';

const UserInformation = ({ name = '', bio = '', location = '' }) => {
  let locationElement;

  if (location === '' || location === null) {
    locationElement = null;
  } else {
    locationElement = (<span className="location">
      <i className="fa fa-map-pin" />&nbsp;
      {location}
    </span>);
  }
  return (
    <div className="gh-widget-personal-details">
      <span className="full-name">{name}</span>
      <span className="bio">{bio}</span>
      {locationElement}
    </div>
  );
};

UserInformation.propTypes = {
  name: PropTypes.string,
  bio: PropTypes.string,
  location: PropTypes.string,
};

export default UserInformation;
