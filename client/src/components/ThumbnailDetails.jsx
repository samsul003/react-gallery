import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import galleryService from '../api/galleryService';
import ImageTag from './common/ImageTag';

class ThumbnailDetails extends Component {
  state = {
    image: {
      id: '',
      description: '',
      title: '',
      score: null,
      upVotes: null,
      downVotes: null,
      coverImage: '',
    },
  };

  async componentDidMount() {
    await this.populateThumbnailDetails();
  }

  async populateThumbnailDetails() {
    const thumbnailId = this.props.match.params.id;
    const { data: thumbnail } = await galleryService.fetchImageWithId(
      thumbnailId
    );
    this.setState({ image: this.mapStateToViewModel(thumbnail.data) });
  }

  mapStateToViewModel(item) {
    return {
      id: item.id,
      title: item.title,
      description: item.images[0].description,
      views: item.views,
      score: item.score,
      upVotes: item.ups,
      downVotes: item.downs,
      coverImage: item.cover,
    };
  }

  render() {
    const { image } = this.state;
    return (
      <div className='container thumb-details'>
        <div>
          <NavLink to='/gallery' className='btn btn-sm btn-light mb-2'>
            <i className='fa fa-arrow-left'> back</i>
          </NavLink>
        </div>
        <div className='card mb-5 image-thumbnail'>
          <div className='card-header card-img-top text-center'>
            <ImageTag
              imageUrl={
                image.coverImage
                  ? `https://i.imgur.com/${image.coverImage}.png`
                  : `https://i.imgur.com/${image.id}.png`
              }
              info={image.title}
              className='img-thumbnail'
            />
          </div>
          <div className='card-body'>
            <p className='card-title text-secondary'>
              <span className='font-weight-bold'>Title: </span>{' '}
              {!image.title ? '...Opps no title found :(' : image.title}
            </p>
            <p className='card-text text-secondary'>
              <span className='font-weight-bold'>Description: </span>
              {!image.description
                ? '...Opps no description found :('
                : image.description}
            </p>
          </div>
          <div className='card-footer'>
            <span className='badge badge-secondary mr-2 p-2'>
              Views: {image.views}
            </span>
            <span className='badge badge-warning mr-2 p-2'>
              Score: {image.score} {!image.score ? '0 Points' : ' Points'}
            </span>
            <span className='badge badge-success mr-2 p-2'>
              <i className='fa fa-thumbs-up' />
              {image.upVotes}
            </span>
            <span className='badge badge-danger mr-2 p-2'>
              <i className='fa fa-thumbs-down' />
              {image.downVotes}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default ThumbnailDetails;
