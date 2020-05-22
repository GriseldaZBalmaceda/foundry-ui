import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import Colors from '../../enums/colors';

export const StyledLabel = styled.label`
  ${({ color = Colors.grayDark }: { color: Colors | string }) => `
    display: block;
    color: ${color};
    text-transform: uppercase;
    margin-bottom: .25rem;
    font-size: .75rem;
  `}
`;


export interface LabelProps {
  labelText: string,
  color ?: Colors | string
};

const Label: FunctionComponent<LabelProps> = ({
  labelText,
  color,
}) => (
  <StyledLabel color={color}>
    {labelText}
  </StyledLabel>
);

export default Label;
