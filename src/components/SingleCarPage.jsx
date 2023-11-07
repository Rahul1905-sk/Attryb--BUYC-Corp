import { Box, Button, Heading, Stack, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import CarCard from "./CarCard";
import { useParams } from "react-router-dom";
import { useAuth } from "./AuthContext";
import axios from "axios";
import { BElink } from "./exportContent";
import Loader from "./Loader";

const SingleCarPage = () => {
  const { id } = useParams();
  const { token } = useAuth();
  const [carData, setCarData] = useState(null);
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    getData();
  }, [id]);

  const getData = async () => {
    
    setIsLoading(true)
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    let res = await axios.get(`${BElink}/dealer/${id}`);
    const result = res.data.msg;
    setCarData(result); 
    console.log(result);
    setIsLoading(false)
  };

  if (carData === null) { 
    return    <Loader />
  }


console.log({carData});
const {image,price,kilometer,title,fuel,transmission,owners,accidents} = carData[0]
 
  return (
    <Stack display={"flex"} flexDir={"row"} justifyContent={"space-around"}>
        {isLoading && <Loader />}
      <Stack className="left-div" w={"60%"} h={"80vh"} overflow={"auto"}>
        <Stack w={"100%"}>
          <img
            width={"100%"}
            style={{ borderRadius: "3%" }}
            src={image}
            alt="honda"
          />
        </Stack>



        <Stack>
          <CarCard data={carData} />
        </Stack>

      </Stack>
      <Stack
        className="right-div"
        w={"30%"}
        borderRadius={"2%"}
        border={"1px solid grey"}
        p={"20px"}
      >
        <Heading size={"xl"}>{title}</Heading>
        <Box display={"flex"} flexDir={"row"}>
          <Text>
            {kilometer} kms • {fuel} • {transmission} • {owners} Ownership{" "}
          </Text>
        </Box>
        <Heading size={"lg"} mt={"20px"}>
          {" "}
          Price- ₹{price.toLocaleString()}
        </Heading>
        <Heading size={"sm"} mt={"50px"}>
          {" "}
          Description
        </Heading>
        <Text>
          • The car has a modern and aerodynamic body style. <br />
          • It offers strong performance and good fuel efficiency. <br />
          • Spacious, well-equipped interior for a pleasant ride. <br />
          • Packed with safety features and advanced technology. <br />• Known
          for its economical fuel consumption.
        </Text>
        <Button mt={"30px"} bgColor={"#ff4b2b"} color={"white"}>
          Buy Now
        </Button>
      </Stack>
    </Stack>
  );
};

export default SingleCarPage;
