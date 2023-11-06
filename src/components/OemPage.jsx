import { Button, Input, Stack, VStack } from "@chakra-ui/react";
import React from "react";
import HomePage from "./HomePage";
import HomePageCard from "./HomePageCard";
import OemCard from "./OemCard";

const OemPage = () => {
  return (
    <Stack w={'100%'} >
      <Stack
        display={"flex"}
        flexDir={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        p={'30px 20px 0px 20px'}
w={'60vw'}
        m={'auto'}
      >
        <Input placeholder="Search OEM Car" />
        <Button>Search</Button>
      </Stack>
<Stack >
<OemCard />  
</Stack>


    </Stack>
  );
};

export default OemPage;
