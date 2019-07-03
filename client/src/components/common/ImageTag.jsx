import PropTypes from 'prop-types';
import React from 'react';

const ImageTag = ({ imageUrl, info }) => {
  return <img src={imageUrl} alt={info} />;
};

ImageTag.propTypes = {
  imageUrl: PropTypes.string,
  info: PropTypes.string,
};

export default ImageTag;
