import React, { forwardRef } from 'react';
import { StyledInput } from './styled';

const Input = forwardRef((props, ref) => <StyledInput ref={ref} {...props} />);

export default Input;
