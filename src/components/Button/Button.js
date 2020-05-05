import React from 'react';
import PropTypes from 'prop-types';
import './Button.sass'

const Button = ({style, children, onClick}) => (
  <div>
    <button
      className="button"
      onClick={onClick}
      style={style}
    >
      {children}
    </button>
  </div>
)

Button.propTypes = {
  style: PropTypes.object,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Button;
