import PropTypes from 'prop-types';
import React from 'react';

const ToggleSwitch = ({ isViral, onToggle }) => {
  return (
    <i
      onClick={onToggle}
      style={{ cursor: 'pointer' }}
      className={
        !isViral ? 'fa fa-toggle-off text-info' : 'fa fa-toggle-on text-success'
      }
    />
  );
};

ToggleSwitch.propTypes = {
  isViral: PropTypes.bool,
  onToggle: PropTypes.func,
};

export default ToggleSwitch;
