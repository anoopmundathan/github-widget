import React, { PropTypes } from 'react';

const UserImage = ({ imageSource = '', altText = '' }) => (
  (<div className="gh-widget-photo">
    <img src={imageSource} alt={altText} />
  </div>
  ));

UserImage.propTypes = {
  imageSource: PropTypes.string,
  altText: PropTypes.string,
};

export default UserImage;
