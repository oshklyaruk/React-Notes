import React from 'react';
import PropTypes from 'prop-types';
import './Button.sass'

const Button = ({style, children, onClick}) => (
  <button
    className="button"
    onClick={onClick}
    style={style}
  >
    {children}
  </button>
)

Button.propTypes = {
  style: PropTypes.object,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Button;
