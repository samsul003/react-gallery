import PropTypes from 'prop-types';
import React from 'react';

const SelectTag = ({ name, options, onSelected }) => {
  return (
    <div className='mb-0'>
      <select name={name} id={name} className='custom-select'>
        {options.map(option => (
          <option
            className='text-secondary'
            key={option.id}
            value={option.name}
            onClick={() => onSelected(option.name)}
          >
            {option.control}
          </option>
        ))}
      </select>
    </div>
  );
};

SelectTag.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  onSelected: PropTypes.func.isRequired,
};

export default SelectTag;
