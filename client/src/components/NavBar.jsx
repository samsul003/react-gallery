import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    const { isAuthenticated, onLogin, onLogout } = this.props;
    const renderAuthButton = () => {
      if (!isAuthenticated) {
        return (
          <button className='btn btn-primary btn-sm' onClick={onLogin}>
            Login
          </button>
        );
      } else {
        return (
          <React.Fragment>
            <button className='btn btn-danger btn-sm' onClick={onLogout}>
              Logout
            </button>
          </React.Fragment>
        );
      }
    };

    return (
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <Link className='navbar-brand' to='/gallery'>
          <i className='fa fa-bullseye' />
          <span className='text-secondary ml-2'>
            <span className='text-success font-weight-bold'>i</span>
            Gallery
          </span>
        </Link>
        {renderAuthButton()}
      </nav>
    );
  }
}

NavBar.propTypes = {
  isAuthenticated: PropTypes.bool,
  onLogin: PropTypes.func,
  onLogout: PropTypes.func,
};

export default NavBar;
