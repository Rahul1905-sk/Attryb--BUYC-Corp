import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";

const CarCard = () => {
  return (
    <Stack border={"1px solid grey"} borderRadius={"10px"} w={"100%"} p={"15px"}>
      <Heading size={"lg"}> Car overview</Heading>
      <Box display={"flex"} justifyContent={"space-between"} gap={'15px'}  >
        <Box className="leftMenu" w={"38%"}>
          <Box display={"flex"} justifyContent={"space-between"}   lineHeight={'40px'}
        //   border= { '2px solid red'}
          >
            <Box display={"flex"}>
              <img
                src="https://images10.gaadi.com/listing/vdp/co/v1/yearManufacture.svg"
                alt="year"
              />
              <Text pl={"5px"}>Year of Manufacture</Text>
            </Box>
            <Text as={"b"}> Aug 2018</Text>
          </Box>
          <Box display={"flex"} justifyContent={"space-between"}   lineHeight={'40px'}
        //   border= { '2px solid red'}
          >
            <Box display={"flex"}>
              <img
                src="https://images10.gaadi.com/listing/vdp/co/v1/yearManufacture.svg"
                alt="year"
              />
              <Text pl={"5px"}>Registration Place</Text>
            </Box>
            <Text as={"b"}> Aug 2018</Text>
          </Box>
          <Box display={"flex"} justifyContent={"space-between"}   lineHeight={'40px'}
        //   border= { '2px solid red'}
          >
            <Box display={"flex"}>
              <img
                src="https://images10.gaadi.com/listing/vdp/co/v1/yearManufacture.svg"
                alt="year"
              />
              <Text pl={"5px"}>Fuel Type</Text>
            </Box>
            <Text as={"b"}> Aug 2018</Text>
          </Box>
          <Box display={"flex"} justifyContent={"space-between"}   lineHeight={'40px'}
        //   border= { '2px solid red'}
          >
            <Box display={"flex"}>
              <img
                src="https://images10.gaadi.com/listing/vdp/co/v1/yearManufacture.svg"
                alt="year"
              />
              <Text pl={"5px"}>Year of Manufacture</Text>
            </Box>
            <Text as={"b"}> Aug 2018</Text>
          </Box>
          <Box display={"flex"} justifyContent={"space-between"}   lineHeight={'40px'}
        //   border= { '2px solid red'}
          >
            <Box display={"flex"}>
              <img
                src="https://images10.gaadi.com/listing/vdp/co/v1/yearManufacture.svg"
                alt="year"
              />
              <Text pl={"5px"}>Year of Manufacture</Text>
            </Box>
            <Text as={"b"}> Aug 2018</Text>
          </Box>
        </Box>
        <Box className="rightMenu" w={"38%"}>
          <Box display={"flex"} justifyContent={"space-between"}   lineHeight={'40px'}
        //   border= { '2px solid red'}
          >
            <Box display={"flex"}>
              <img
                src="https://images10.gaadi.com/listing/vdp/co/v1/yearManufacture.svg"
                alt="year"
              />
              <Text pl={"5px"}>Year of Manufacture</Text>
            </Box>
            <Text as={"b"}> Aug 2018</Text>
          </Box>
          <Box display={"flex"} justifyContent={"space-between"}   lineHeight={'40px'}
        //   border= { '2px solid red'}
          >
            <Box display={"flex"}>
              <img
                src="https://images10.gaadi.com/listing/vdp/co/v1/yearManufacture.svg"
                alt="year"
              />
              <Text pl={"5px"}>Year of Manufacture</Text>
            </Box>
            <Text as={"b"}> Aug 2018</Text>
          </Box>
          <Box display={"flex"} justifyContent={"space-between"}   lineHeight={'40px'}
        //   border= { '2px solid red'}
          >
            <Box display={"flex"}>
              <img
                src="https://images10.gaadi.com/listing/vdp/co/v1/yearManufacture.svg"
                alt="year"
              />
              <Text pl={"5px"}>Year of Manufacture</Text>
            </Box>
            <Text as={"b"}> Aug 2018</Text>
          </Box>
          <Box display={"flex"} justifyContent={"space-between"}   lineHeight={'40px'}
        //   border= { '2px solid red'}
          >
            <Box display={"flex"}>
              <img
                src="https://images10.gaadi.com/listing/vdp/co/v1/yearManufacture.svg"
                alt="year"
              />
              <Text pl={"5px"}>Year of Manufacture</Text>
            </Box>
            <Text as={"b"}> Aug 2018</Text>
          </Box>
          <Box display={"flex"} justifyContent={"space-between"}   lineHeight={'40px'}
        //   border= { '2px solid red'}
          >
            <Box display={"flex"}>
              <img
                src="https://images10.gaadi.com/listing/vdp/co/v1/yearManufacture.svg"
                alt="year"
              />
              <Text pl={"5px"}>Year of Manufacture</Text>
            </Box>
            <Text as={"b"}> Aug 2018</Text>
          </Box>
        </Box>
         
        <Box></Box>
      </Box>
    </Stack>
  );
};

export default CarCard;
