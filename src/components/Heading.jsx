import React from "react";
import styled from "styled-components";
import { colors } from "../utils/styles";

const StyledHeading = styled.h1`
  font-size: 32px;
  color: ${colors.text.heading};
`;

const Heading = (props) => {
  const { children, size } = props;
  return <StyledHeading classname={size}>{children}</StyledHeading>;
};

export default Heading;
