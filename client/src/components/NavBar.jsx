import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    const { isAuthenticated, onLogin, onLogout } = this.props;

    return (
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <Link className='navbar-brand' to='/gallery'>
          <i className='fa fa-bullseye' />
          <span className='text-secondary ml-2'>
            <span className='text-success font-weight-bold'>i</span>
            Gallery
          </span>
        </Link>
        {!isAuthenticated ? (
          <button className='btn btn-primary btn-sm ml-auto' onClick={onLogin}>
            Login
          </button>
        ) : (
          <React.Fragment>
            <Link className='btn btn-success btn-sm ml-auto mr-2' to='/uploads'>
              Your Photos
            </Link>

            <button className='btn btn-danger btn-sm' onClick={onLogout}>
              Logout
            </button>
          </React.Fragment>
        )}
      </nav>
    );
  }
}

NavBar.propTypes = {
  isAuthenticated: PropTypes.bool,
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
};

export default NavBar;
