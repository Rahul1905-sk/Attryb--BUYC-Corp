import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";

const CarCard = ({data}) => {
  const {kilometer,title,year,place,mileage,colors,originalPaint,fuel,transmission,owners,accidents} = data[0];
 
console.log(kilometer);
console.log(data);
  
  return (
    <Stack border={"1px solid grey"} borderRadius={"10px"} w={"100%"} p={"15px"}>
      <Heading size={"lg"}> Car overview</Heading>
      <Box display={"flex"} justifyContent={"space-between"} gap={'15px'}  >
        <Box className="leftMenu" w={"38%"}>
          <Box display={"flex"} justifyContent={"space-between"}   lineHeight={'40px'}
        //   border= { '2px solid red'}
          >
            <Box display={"flex"} w={'auto'}>
              <img
                src="https://images10.gaadi.com/listing/vdp/co/v1/registrationYear.svg"
                alt="year"
              />
              <Text pl={"5px"}>Registration Year</Text>
            </Box>
            <Text as={"b"}> {year}</Text>
          </Box>
          <Box display={"flex"} justifyContent={"space-between"}   lineHeight={'40px'}
        //   border= { '2px solid red'}
          >
            <Box display={"flex"}>
              <img
                src="https://images10.gaadi.com/listing/vdp/co/v1/rto.svg"
                alt="place"
              />
              <Text pl={"5px"}>Place</Text>
            </Box>
            <Text as={"b"}>{place}</Text>
          </Box>
          <Box display={"flex"} justifyContent={"space-between"}   lineHeight={'40px'}
        //   border= { '2px solid red'}
          >
            <Box display={"flex"}>
              <img
                src="https://images10.gaadi.com/listing/vdp/co/v1/fuel.svg"
                alt="fuel"
              />
              <Text pl={"5px"}>Fuel Type</Text>
            </Box>
            <Text as={"b"}> {fuel}</Text>
          </Box>
          <Box display={"flex"} justifyContent={"space-between"}   lineHeight={'40px'}
        //   border= { '2px solid red'}
          >
            <Box display={"flex"}>
              <img
                src="https://images10.gaadi.com/listing/vdp/co/v1/transmission.svg"
                alt="transmission"
              />
              <Text pl={"5px"}>Transmission</Text>
            </Box>
            <Text as={"b"}> {transmission}</Text>
          </Box>
          <Box display={"flex"} justifyContent={"space-between"}   lineHeight={'40px'}
        //   border= { '2px solid red'}
          >
            <Box display={"flex"}>
              <img
                src="https://images10.gaadi.com/listing/vdp/co/v1/kmsDriven.svg"
                alt="kms"
              />
              <Text pl={"5px"}>Kms Driven</Text>
            </Box>
            <Text as={"b"}>{kilometer} Kms</Text>
          </Box>
        </Box>
        <Box className="rightMenu" w={"38%"}>
          <Box display={"flex"} justifyContent={"space-between"}   lineHeight={'40px'}
        //   border= { '2px solid red'}
          >
            <Box display={"flex"}>
              <img
                src="https://images10.gaadi.com/listing/vdp/co/v1/fuel.svg"
                alt="mileage"
              />
              <Text pl={"5px"}>Mileage</Text>
            </Box>
            <Text as={"b"}> {mileage} Km/L</Text>
          </Box>
          <Box display={"flex"} justifyContent={"space-between"}   lineHeight={'40px'}
        //   border= { '2px solid red'}
          >
            <Box display={"flex"}>
              <img
                src="https://images10.gaadi.com/listing/vdp/co/v1/fuel.svg"
                alt="color"
              />
              <Text pl={"5px"}>Color</Text>
            </Box>
            <Text as={"b"}>{colors}</Text>
          </Box>
          <Box display={"flex"} justifyContent={"space-between"}   lineHeight={'40px'}
        //   border= { '2px solid red'}
          >
            <Box display={"flex"}>
              <img
                src="https://images10.gaadi.com/listing/vdp/co/v1/transmission.svg"
                alt="accidents"
              />
              <Text pl={"5px"}>No. of accidents</Text>
            </Box>
            <Text as={"b"}> {accidents} reported</Text>
          </Box>
          <Box display={"flex"} justifyContent={"space-between"}   lineHeight={'40px'}
        //   border= { '2px solid red'}
          >
            <Box display={"flex"}>
              <img
                src="https://images10.gaadi.com/listing/vdp/co/v1/insuranceValidity.svg"
                alt="paint"
              />
              <Text pl={"5px"}>Original Paint</Text>
            </Box>
            <Text as={"b"}>{originalPaint? 'Yes': "No"}</Text>
          </Box>
          <Box display={"flex"} justifyContent={"space-between"}   lineHeight={'40px'}
        //   border= { '2px solid red'}
          >
            <Box display={"flex"}>
              <img
                src="https://images10.gaadi.com/listing/vdp/co/v1/ownership.svg"
                alt="owner"
              />
              <Text pl={"5px"}>Ownership</Text>
            </Box>
            <Text as={"b"}> {owners} Ownership</Text>
          </Box>
        </Box>
         
        <Box></Box>
      </Box>
    </Stack>
  );
};

export default CarCard;
