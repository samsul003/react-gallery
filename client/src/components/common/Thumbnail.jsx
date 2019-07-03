import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';

import ImageTag from './ImageTag';

const Thumbnail = ({ image }) => {
  return (
    <div id={image.id} className='card card--thumb'>
      <NavLink to={`gallery/${image.id}`} className='card-img-top text-center'>
        <ImageTag
          imageUrl={`https://i.imgur.com/${image.cover}.png`}
          info={image.title}
          className='img-thumbnail'
        />
      </NavLink>
      <div className='card-body p-2'>
        <h5 className='card-title text-center'>
          {!image.title ? '...Opps no title found :(' : image.title}
        </h5>
      </div>
    </div>
  );
};

Thumbnail.propTypes = {
  image: PropTypes.object,
};

export default Thumbnail;
