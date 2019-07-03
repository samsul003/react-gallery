import React from 'react';

const HomeScreen = () => {
  return (
    <div className='home-screen-info text-center text-secondary'>
      <p className='font-weight-bold mb-0'>
        Welocme to <span className='text-success'>i</span>Gallery! Please login
        with <span className='text-success'>Imgur credentials</span> to view the
        gallery.
      </p>
    </div>
  );
};

export default HomeScreen;
