import './button.css';

import React from 'react';

const Button: React.FC<React.HTMLProps<HTMLButtonElement>> = ({
  children,
  className,
  type,
  ...props
}) => (
  <button className={`r-btn ${className}`} {...props}>
    {children}
  </button>
);

export default Button;
