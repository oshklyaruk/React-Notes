import React from 'react';
import PropTypes from 'prop-types';
import './Input.sass'

const Input = ({value, onChange, type = "text", placeholder = ""}) => (
  <input
    className="input"
    onChange={onChange}
    value={value}
    type={type}
    placeholder={placeholder}
  />
)

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string
}

export default Input;
