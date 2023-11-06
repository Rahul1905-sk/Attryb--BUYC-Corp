import { Box, Button, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import CarCard from "./CarCard";

const SingleCarPage = () => {
  return (
    <Stack display={"flex"} flexDir={'row'} justifyContent={'space-around'} >
      <Stack className="left-div" w={'60%'}  h={"80vh"} overflow={'auto'} >
        <Stack w={'100%'} >
          <img width={'100%'} style={{borderRadius:'3%'}}
            src="https://stimg.cardekho.com/images/carexteriorimages/930x620/Honda/City-Hybrid-2023/9713/1677745369245/front-left-side-47.jpg"
            alt="honda"
          />
        </Stack>

        <Stack>
          <CarCard />
        </Stack>
      </Stack>
      <Stack className="right-div" w={'30%'} borderRadius={'2%'} border={"1px solid grey"} p={"20px"}>
        <Heading size={'xl'}>Maruti Suzuki 2008 xl</Heading>
        <Box display={'flex'} flexDir={"row"}>
          <Text>{"20,000"} kms • {"Petrol"}  • {"Automatic"}  •   {"1st Owner"} </Text>
          
        </Box>  
        <Heading size={'lg'} mt={'20px'}> Price- ₹24,000</Heading>
        <Heading size={'sm'} mt={'50px'}> Description</Heading>
        <Text>
        • The car has a modern and aerodynamic body style. <br />
        • It offers strong performance and good fuel efficiency. <br />
        • Spacious, well-equipped interior for a pleasant ride. <br />
        • Packed with safety features and advanced technology. <br />
        • Known for its economical fuel consumption.
        </Text>
        <Button mt={'30px'} bgColor={'#ff4b2b'}  color={'white'}>Buy Now</Button>
      </Stack>
    </Stack>
  );
};

export default SingleCarPage;
