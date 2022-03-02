import React, { useState, forwardRef, useImperativeHandle } from "react";
import { Text } from "@chakra-ui/react";

const DynamicText = forwardRef((props, ref) => {
  const [value, setValue] = useState("Random Text");

  useImperativeHandle(ref, () => ({ changeValue }));
  
  const changeValue = (newValue) => {
    setValue(newValue);
  };

  return <Text as='h1' maxWidth='100vw'>{value}</Text>;
});

export default DynamicText;
