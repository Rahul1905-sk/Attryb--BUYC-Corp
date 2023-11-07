import { PropsWithChildren, Fragment, useState } from "react";
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
  useToast, 
} from "@chakra-ui/react";
import { AiOutlineHeart, AiOutlineExclamationCircle } from "react-icons/ai";
import { BsTelephoneX } from "react-icons/bs";
import { EditIcon, DeleteIcon, ViewIcon } from "@chakra-ui/icons";
import axios from "axios";
import { BElink } from "./exportContent";
import { Link } from "react-router-dom";
import { useAuth } from "./AuthContext";

 
const HomePageCard = ({ data ,getData}) => {
 const toast = useToast();
 const {token} = useAuth() 
 const [isLoading, setIsLoading] = useState(false)

const localUserID = localStorage.getItem('attrybUserID')
  const unitArr = ["", "Kms", "", "Km/L"];
  // console.log(data);
  const newArr = data?.map((item) => {
    const {
      _id,
      brand,
      model,
      price,
      image,
      year,
      colors, 
      accidents,
      fuel,
      kilometer,
      originalPaint,
      owners,
      place,
      mileage,
      scratches,
      title,
      userID,
      transmission,
    } = item;

    const detailsData = [year, kilometer, fuel, mileage];

    return {
      _id,
      brand,
      model,
      price,
      image,
      colors,
      accidents,
      originalPaint,
      owners,
      place,
      scratches,
      title,
      detail: detailsData,
      userID
    };
  });
 
  console.log({ newArr });
  
  const handleDelete = async(id) => {
  // alert(id);
  
  setIsLoading(true)
  const res = await axios.delete(`${BElink}/dealer/delete/${id}`)
  console.log(res.data);
  toast({
    title: res.data.msg,
    status: "info", 
    duration: 2000,
    isClosable: true,
    position:"top"
  });
  setIsLoading(false)
    getData()
  }



  return (
    <Container maxW="100vw" p={{ base: 5, md: 12 }} margin="0 auto">
      <Stack
        spacing={4}
        display={"grid"}
        gridTemplateColumns={"repeat(2, 1fr)"}
      >
        {newArr.map((product, HomePageCard) => (
          <Stack
            key={HomePageCard}
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
                objectFit="cover"
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
                  {product.title}
                </chakra.h3>
                <chakra.h3
                  fontSize={{ base: "lg", md: "xl" }}
                  fontWeight="bold"
                >
                  ₹ {product.price.toLocaleString()}
                </chakra.h3>
              </Flex>
              <Box>
                <Text fontSize="lg" fontWeight="500">
                  {product.place}
                </Text>
              </Box>
              <Flex alignItems="center" color="gray.500">
                {product.detail.map((data, HomePageCard) => (
                  <Fragment key={HomePageCard}>
                    <Text fontSize={{ base: "sm", sm: "md" }}>
                      {data} {unitArr[HomePageCard]}
                    </Text>
                    {product.detail.length - 1 != HomePageCard && (
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
                <Stack
                  direction="row"
                  spacing={1}
                  mt={"35px"}
                  mb="0 !important"
                >
                  <Box visibility={'hidden'}>

                  <IconButton  spacing={2} bg="green.500" color="white">
                    <Icon as={EditIcon} w={4} h={4} />
                    <Text fontSize="sm">Edit</Text>
                  </IconButton>
                  </Box>
                 
                </Stack>
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

export default HomePageCard;
