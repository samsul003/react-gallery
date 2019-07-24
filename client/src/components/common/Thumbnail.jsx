import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';

import ImageTag from './ImageTag';

const Thumbnail = ({ image, path, disableCaption }) => {
  return (
    <figure id={image.id} className='image-thumbnail'>
      {!disableCaption ? (
        <React.Fragment>
          <NavLink to={`${path}/${image.id}`}>
            <ImageTag
              imageUrl={`https://i.imgur.com/${image.cover || image.id}.png`}
              info={image.title}
            />
          </NavLink>
          <figcaption className='img-caption text-secondary'>
            {!image.title ? '...Opps no title found :(' : image.title}
          </figcaption>
        </React.Fragment>
      ) : (
        <ImageTag
          imageUrl={`https://i.imgur.com/${image.cover || image.id}.png`}
          info={image.title}
        />
      )}
    </figure>
  );
};

Thumbnail.propTypes = {
  image: PropTypes.object.isRequired,
  path: PropTypes.string,
  disabled: PropTypes.string,
};

export default Thumbnail;
