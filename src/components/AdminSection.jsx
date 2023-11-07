import { Button, HStack, Input, Select, Stack, Toast, useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import HomePageCard from "./HomePageCard";
import { BElink } from "./exportContent";
import axios from "axios";
import { useAuth } from "./AuthContext";
import AdminPageCard from "./AdminPageCard";
import Loader from "./Loader";

let originalData = [];

const AdminSection = () => {
  const [data, setData] = useState([]);
  const toast = useToast()
  const { token } = useAuth();
  const [isLoading, setIsLoading] = useState(false)
  // console.log(token);
  const getData = async () => {
    setIsLoading(true)
    
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    let res = await axios.get(`${BElink}/dealer/`);
  const result = res.data.msg;
  setData(result);
  originalData = result.slice();
  setIsLoading(false)
  };

  useEffect(() => {
    getData();
  }, []);
  console.log(data);

  const sortByPrice = (type) => {
    let newData;
    if (type) {
      if (type === "asc") {
        newData = [...data].sort((a, b) => a.price - b.price);
      } else if (type === "desc") {
        newData = [...data].sort((a, b) => b.price - a.price);
      } else {
        newData = data;
      }
      console.log(newData);
      setData(newData);
    } else {
      setData(originalData);
    }
  };

  const sortByMileage = (type) => {
    let newData;
    if (type) {
      if (type === "asc") {
        newData = [...data].sort((a, b) => a.mileage - b.mileage);
      } else if (type === "desc") {
        newData = [...data].sort((a, b) => b.mileage - a.mileage);
      } else {
        newData = data;
      }
      console.log(newData);
      setData(newData);
    } else {
      setData(originalData);
    }
  };

  const sortByColor = (color) => {
    console.log(color);
    if (color) {
      const newData = originalData.filter((item) =>
        item.colors.includes(color)
      );

      console.log('rahul',newData);

      if (newData.length === 0) { 
        toast({
          title: `No cars available in ${color}`,
          status: "info",  
          duration: 3000,
          isClosable: true,
          position:"top"
        });
      } else {
        setData(newData);
      }
    } else {
      setData(originalData);
    }
  };

  const handleReset = () => {
    setData(originalData);
  };

  return (
    <Stack spacing={0}>
         {isLoading && <Loader />}
      <Stack spacing={0}>
        <HStack
          paddingTop={"30px"}
          marginBottom={"30px"}
          paddingLeft={"40px"}
          paddingRight={"40px"}
        >
          <Select onChange={(e) => sortByPrice(e.target.value)}>
            <option value="">Sort by Price</option>
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
          </Select>
          <Select onChange={(e) => sortByMileage(e.target.value)}>
            <option value="">Sort by Mileage</option>
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
          </Select>
          <Select onChange={(e) => sortByColor(e.target.value)}>
            <option value="">Filter by Color</option>
            <option value="Red">Red</option>
            <option value="Black">Black</option>
            <option value="Silver">Silver</option>
            <option value="Blue">Blue</option>
            <option value="White">White</option>
            <option value="Yellow">Yellow</option>
          </Select>
        </HStack>
        <Button
          marginBottom={"30px"}
          w={"150px"}
          m={"auto"}
          onClick={handleReset}
        >
          Reset All Filters
        </Button>
      </Stack>
      <Stack>
        <AdminPageCard data={data} getData={getData} />
      </Stack>
    </Stack>
  );
};

export default AdminSection;
