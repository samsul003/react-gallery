import React, { Component } from 'react';

import galleryService from '../api/galleryService';
import SelectTag from './common/SelectTag';
import Thumbnail from './common/Thumbnail';
import ToggleSwitch from './common/ToggleSwitch';

class Gallery extends Component {
  state = {
    images: [],
    sections: [
      { id: 1, name: 'hot', control: 'Hot' },
      { id: 2, name: 'top', control: 'Top' },
      { id: 3, name: 'user', control: 'User' },
    ],
    sorts: [
      { id: 1, name: 'viral', control: 'Viral' },
      { id: 2, name: 'top', control: 'Top' },
      { id: 3, name: 'time', control: 'Time' },
      { id: 4, name: 'rising', control: 'Rising' },
    ],
    windows: [
      { id: 1, name: 'day', control: 'Today' },
      { id: 2, name: 'week', control: 'This Week' },
      { id: 3, name: 'month', control: 'This Month' },
      { id: 4, name: 'year', control: 'This Year' },
      { id: 5, name: 'all', control: 'All Time' },
    ],
    isSection: false,
    isSort: false,
    isWindow: false,
    isViral: false,
  };

  async componentDidMount() {
    const { isSection, isSort, isWindow } = this.state;
    if (isSection) {
      await this.handleSectionSelection();
    } else if (isSort) {
      await this.handleSortSelection();
    } else if (isWindow) {
      await this.handleWindowSelection();
    } else {
      await this.populateDefaultGallery();
    }
  }

  async populateDefaultGallery() {
    const { data: album } = await galleryService.fetchImages();
    this.setState({ images: album.data });
  }

  handleViralToggle = () => {
    this.setState({ isViral: !this.state.isViral });
  };

  handleSectionSelection = async item => {
    const { isSection, isViral } = this.state;
    const { data: album } = await galleryService.fetchImagesWithSectionParam(
      item,
      isViral
    );
    this.setState({ images: album.data, isSort: !isSection });
  };

  handleSortSelection = async item => {
    const { isSort, isViral } = this.state;
    const { data: album } = await galleryService.fetchImagesWithSortParam(
      item,
      isViral
    );
    this.setState({ images: album.data, isSort: !isSort });
  };

  handleWindowSelection = async item => {
    const { isWindow, isViral } = this.state;
    const { data: album } = await galleryService.fetchImagesWithWindowParam(
      item,
      isViral
    );
    this.setState({ images: album.data, isWindow: !isWindow });
  };

  render() {
    const { images, sections, sorts, windows, isViral } = this.state;

    return (
      <React.Fragment>
        <div className='row controls-nav'>
          <div className='col-sm-3'>
            <SelectTag
              name='section'
              options={sections}
              onSelected={this.handleSectionSelection}
            />
          </div>
          <div className='col-sm-3'>
            <SelectTag
              name='sort'
              options={sorts}
              onSelected={this.handleSortSelection}
            />
          </div>
          <div className='col-sm-3'>
            <SelectTag
              name='window'
              options={windows}
              onSelected={this.handleWindowSelection}
            />
          </div>
          <div className='col-sm-3 pt-2'>
            <span className='text-secondary font-weight-bold mr-2'>
              Viral Images
            </span>
            <ToggleSwitch isViral={isViral} onToggle={this.handleViralToggle} />
          </div>
        </div>

        <div className='row'>
          {images.map(image => (
            <div key={image.id} className='col-sm-3 m-auto'>
              <Thumbnail key={image.id} image={image} path='gallery' />
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Gallery;
