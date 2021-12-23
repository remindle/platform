import './input.css';

import React from 'react';

type Props = {
  className?: string;
};

const Input: React.FC<Props & React.HTMLProps<HTMLInputElement>> = ({
  className,
  ...props
}) => <input className={`r-input ${className}`} {...props} />;

export default Input;
