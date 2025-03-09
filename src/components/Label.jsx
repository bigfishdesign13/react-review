import React from "react";
import styled from "styled-components";
import { colors } from "../utils/styles";

const StyledLabel = styled.label`
  color: ${colors.text.body};
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
`;

const Label = (props) => {
  const { children, ...rest } = props;
  return <StyledLabel {...rest}>{children}</StyledLabel>;
};

export default Label;
