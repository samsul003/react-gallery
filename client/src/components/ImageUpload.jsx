import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import galleryService from '../api/galleryService';
import Thumbnail from './common/Thumbnail';

class Uploads extends Component {
  state = { images: [] };

  async componentDidMount() {
    await this.populateUploadedPhotos();
  }

  async populateUploadedPhotos() {
    const { data: album } = await galleryService.fetchPersonalImages();
    this.setState({ images: album.data });
  }

  handleUpload = async ({ target }) => {
    await galleryService.uploadImages(target.files);
    target.value = '';
    await this.populateUploadedPhotos();
  };

  render() {
    const { images } = this.state;
    return (
      <React.Fragment>
        <div className='row'>
          <NavLink to='/gallery' className='btn btn-sm btn-light mb-2'>
            <i className='fa fa-arrow-left'> back to Gallery</i>
          </NavLink>
        </div>
        <div className='row controls-nav'>
          <div className='col'>
            <h5 className='text-secondary'>Upload Photos..</h5>
            <div className='image-upload'>
              <input
                onChange={this.handleUpload}
                type='file'
                accept='image/*'
                multiple
                className='btn btn-secondary btn-sm'
              />
            </div>
          </div>
        </div>
        <div className='row'>
          {images.map(image => (
            <div key={image.id} className='col-sm-4 m-auto'>
              <Thumbnail key={image.id} image={image} disableCaption='true' />
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Uploads;
