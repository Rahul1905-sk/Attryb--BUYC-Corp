import { PropsWithChildren, Fragment } from "react";
import {
  chakra,
  Box,
  Stack,
  VStack,
  HStack,
  Flex,
  Text,
  Image,
  Container,
  Icon,
  //   StackProps
} from "@chakra-ui/react";
import { AiOutlineHeart, AiOutlineExclamationCircle } from "react-icons/ai";
import { BsTelephoneX } from "react-icons/bs";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";

 
const OemCard = ({ data }) => {
  
  console.log(data);
  const unitArr = ['', 'km/h', 'km/L', "bhp"]
  
  const newArr = data.map(item => {
    const { _id, brand, model, price_inr, image, year, max_speed, mileage_city, power_bhp, colors } = item;
   
    const detailsData = [year, max_speed, mileage_city, power_bhp];
  
    return {
      _id,
      brand,
      model,
      price_inr,
      image,
      detail: detailsData,
      colors
    };
  });
  
console.log({newArr})


  return (
    <Container maxW="100vw" p={{ base: 5, md: 12 }} margin="0 auto">
     
      <Stack
        spacing={4}
        display={"grid"}
        gridTemplateColumns={"repeat(2, 1fr)"}
      >
        {newArr.map((product, OemCard) => (
          <Stack
            key={OemCard}
            spacing={{ base: 0, md: 4 }}
            direction={{ base: "column", md: "row" }}
            border="1px solid"
            borderColor="gray.400"
            p={2}
            rounded="md"
            w={{ base: "auto", md: "2xl" }}
            overflow="hidden"
            pos="relative"
          >
            {product.isFeatured && (
              <Flex
                alignItems="center"
                p={1}
                bg="red.400"
                pos="absolute"
                fontSize="xs"
                fontWeight="500"
                color="white"
                top={0}
                left={0}
              >
                <Text>FEATURED</Text> &nbsp;{" "}
                <Icon as={AiOutlineExclamationCircle} h={4} w={4} />
              </Flex>
            )}
            <Flex ml="0 !important" w={"550px"}>
              <Image
                rounded="md"
                w={{ base: "100%", md: "18rem" }}
                h="auto"
                objectFit= "contain"
                src={product.image}
                alt="product image"

              />
            </Flex>
            <Stack
              direction="column"
              spacing={2}
              w="100%"
              mt={{ base: "5px !important", sm: 0 }}
            >
              <Flex justify="space-between">
                <chakra.h3
                  fontSize={{ base: "lg", md: "xl" }}
                  fontWeight="bold"
                >
                  {product.brand} {product.model}
                </chakra.h3>
                <chakra.h3
                  fontSize={{ base: "lg", md: "xl" }}
                  fontWeight="bold"
                >
                  ₹{(product.price_inr).toLocaleString()}
                </chakra.h3>
              </Flex>
              <Box>
                <Text fontSize="lg" fontWeight="500">
                  {product.location}
                </Text>
              </Box>
              <Flex alignItems="center" color="gray.500">
                {product.detail.map((data, OemCard) => (
                  <Fragment key={OemCard+'we'}>
                    <Text fontSize={{ base: "sm", sm: "md" }}>{data} {unitArr[OemCard]}</Text>
                    {product.detail.length - 1 != OemCard && (
                      <chakra.span mx={2} fontSize={{ base: "sm", sm: "md" }}>
                        |
                      </chakra.span>
                    )}
                  </Fragment>
                ))}
              </Flex>
              <Stack
                direction={{ base: "column-reverse", sm: "row" }}
                justify="space-between"
                alignItems={{ base: "flex-start", sm: "center" }}
              >
                <Text fontSize="sm" mt={{ base: 1, sm: 0 }}>
                  {/* Updated {product.colors} */}
                  <Stack display={'flex'} flexDir={'row'}  p={'5px 10px'}    >

                  {product.colors.map((data, OemCard) => (
                    <Box key={OemCard} borderRadius={'50%'} w={'20px'} h={'20px'} bgColor={data} boxShadow={'0 0 3px #3d2b3a'} >

                  </Box>
                ))}

                </Stack>
                
                </Text>
                {/* <Stack direction="row" spacing={1} mb="0 !important">
                  <IconButton>
                    <Icon as={AiOutlineHeart} w={4} h={4} />
                  </IconButton>
                  <IconButton spacing={2} bg="green.500" color="white">
                    <Icon as={EditIcon} w={4} h={4} />
                    <Text fontSize="sm">Edit</Text>
                  </IconButton>
                  <IconButton spacing={2} bg="red.600" color="white">
                    <Icon as={DeleteIcon} w={4} h={4} />
                    <Text fontSize="sm">Delete</Text>
                  </IconButton>
                </Stack> */}
              </Stack>
            </Stack>
          </Stack>
        ))}
      </Stack>
    </Container>
  );
};

const IconButton = ({ children, ...props }) => {
  return (
    <HStack
      cursor="pointer"
      border="1px solid"
      borderColor="gray.300"
      px={2}
      py="0.15rem"
      alignItems="center"
      rounded="sm"
      spacing={2}
      {...props}
    >
      {children}
    </HStack>
  );
};

export default OemCard;


 