import React, { Component } from 'react';

import galleryService from '../api/galleryService';
import ImageTag from './common/ImageTag';
import { NavLink } from 'react-router-dom';

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
        <NavLink to='/gallery' className='btn btn-sm btn-light mb-2'>
          <i className='fa fa-arrow-left'> back</i>
        </NavLink>
        <div className='card card--thumb mb-5'>
          <div className='card-header card-img-top text-center'>
            <ImageTag
              imageUrl={`https://i.imgur.com/${image.coverImage}.png`}
              info={image.title}
              className='img-thumbnail'
            />
          </div>
          <div className='card-body'>
            <h4 className='card-title'>
              Title: {!image.title ? '...Opps no title found :(' : image.title}
            </h4>
            <p className='card-text'>
              Description:{' '}
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
