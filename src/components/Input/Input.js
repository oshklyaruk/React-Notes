import React from 'react';
import PropTypes from 'prop-types';
import './Input.sass'

const Input = ({ value, onChange }) => (
    <input
        className="input"
        onChange={onChange}
        value={value}
    />
)

Input.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired
}

export default Input;
