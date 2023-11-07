import { Box, Spinner } from "@chakra-ui/react";
import React from "react";

const Loader = () => {
  return (
    <Box
      
      w={"100vw"}
      h={"100vh"}
      position={"fixed"}
      top={0}
      left={0}
      backdropFilter={"blur(5px)"}
      zIndex={10000}
      display={  "flex"}
      justifyContent={"center"}
      overflow={"hidden"}
      alignItems={"center"}
    >
        <Spinner size={'xl'} />
    </Box>
  );
};

export default Loader;
