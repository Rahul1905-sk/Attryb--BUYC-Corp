import { Button, Heading, Input, Stack, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import HomePage from "./HomePage";
import HomePageCard from "./HomePageCard";
import OemCard from "./OemCard";
import { BElink } from "./exportContent";
import axios from "axios";
import ErrorPage from "./ErrorPage";
import Loader from "./Loader";

const OemPage = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]); 
  const [isLoading, setIsLoading] = useState(false)

  const getData = async () => {
    setIsLoading(true)
    
    let res = await axios.get(`${BElink}/oem`);
    setIsLoading(false)
    return res.data
  };
  
  useEffect(() => {
    
    // setIsLoading(true)
    getData().then(res=>setData(res)).catch(err=>console.log(err))
    // setIsLoading(false)
    
  }, []);

  const handleSearch = async () => {
    
    setIsLoading(true)
    const res = await axios.get(`${BElink}/oem/search?keyword=${search}`);
    setData(res.data.msg);
    setIsLoading(false)
  };
 
  return (
    <Stack w={"100%"}>
      {isLoading && <Loader />}
      <Heading size={'lg'} as={'u'} textDecoration={'center'} m={'auto'} mt={'5px'}>Cars Avaiable ({data.length})</Heading>
      <Stack
        display={"flex"}
        flexDir={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        p={"30px 20px 0px 20px"}
        w={"60vw"}
        m={"auto"}
      >
        <Input
          placeholder="Search by brand like `maruti` or year like `2021`"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button onClick={handleSearch}>Search</Button>
      </Stack>
      <Stack>
     {(!data.length && isLoading==false )?  <ErrorPage /> : <OemCard data={data} /> }
     {/* <OemCard data={data} /> */}
      </Stack>
    </Stack>
  );
};

export default OemPage;
