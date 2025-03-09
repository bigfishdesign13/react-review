import React from "react";
// import styled from "styled-components";
// import { colors } from "../data/styles";
import Label from "./Label";
import { Box, Input } from "@chakra-ui/react";

const TextInput = (props) => {
  const { id, helperText, label, placeholder, onChange, value = "" } = props;
  return (
    <Box w="100%">
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
      <div aria-live="polite">{helperText}</div>
    </Box>
  );
};

export default TextInput;
