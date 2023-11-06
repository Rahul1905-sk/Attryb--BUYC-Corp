import { Button, HStack, Input, Select, Stack } from "@chakra-ui/react";
import React from "react";
import HomePageCard from "./HomePageCard";

const HomePage = () => {

  const handleReset = () => {

  }


  return (
    <Stack spacing={0}>
      <Stack spacing={0}>
      <HStack
        paddingTop={"30px"}
        marginBottom={"30px"}
        paddingLeft={"40px"}
        paddingRight={"40px"}
      >
        <Select onChange={(e) => handleSortByPrice(e.target.value)}>
          <option value="">Sort by Price</option>
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </Select>
        <Select onChange={(e) => handleSortByMileage(e.target.value)}>
          <option value="">Sort by Mileage</option>
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </Select>
        <Select onChange={(e) => handleFilterByColor(e.target.value)}>
          <option value="">Filter by Color</option>
          <option value="red">Red</option>
          <option value="black">Black</option>
          <option value="silver">Silver</option>
          <option value="blue">Blue</option>
          <option value="white">White</option>
          <option value="yellow">Yellow</option>
        </Select>
      </HStack>
      <Button marginBottom={"30px"} w={'150px'} m={'auto'} onClick={handleReset}>
        Reset All Filters
      </Button>

      </Stack>
<Stack>
  <HomePageCard />
</Stack>
      
    </Stack>
  );
};

export default HomePage;
