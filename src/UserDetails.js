// Libs
import React, { PropTypes } from 'react';

// Components
import UserInformation from './UserInformation';
import UserImage from './UserImage';

const UserDetails = ({ imageUrl = '', username = '', name = '', bio = '', location = '' }) => ((
  <div className="gh-widget-container">
    <UserImage
      imageSource={imageUrl}
      altText={`${username} avatar`}
    />
    <UserInformation
      name={name}
      bio={bio}
      location={location}
    />
  </div>
));

UserDetails.propTypes = {
  imageUrl: PropTypes.string,
  username: PropTypes.string,
  name: PropTypes.string,
  bio: PropTypes.string,
  location: PropTypes.string,
};

UserDetails.defaultProps = {
  imageUrl: '',
  username: 'JohnDoe',
  name: 'John Doe',
  bio: 'Who am I?',
  location: 'Nowheresville',
};

export default UserDetails;
