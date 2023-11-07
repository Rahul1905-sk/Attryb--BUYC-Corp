import { PropsWithChildren, Fragment, useState, useEffect } from "react";
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
  FormControl,
  FormLabel,
  Input,
  Select,
  Heading,
  Button,
  //   StackProps
} from "@chakra-ui/react";
import { AiOutlineHeart, AiOutlineExclamationCircle } from "react-icons/ai";
import { BsTelephoneX } from "react-icons/bs";
import { EditIcon, DeleteIcon, ViewIcon } from "@chakra-ui/icons";
import axios from "axios";
import { BElink } from "./exportContent";
import { Link } from "react-router-dom";
import { useAuth } from "./AuthContext";
import Loader from "./Loader";

const initialState = {
  title: "",
  brand: "",
  model: "",
  image: "",
  year: "",
  price: "",
  mileage: "",
  colors: "",
  originalPaint: "",
  scratches: "",
  fuel: "",
  kilometer: "",
  transmission: "",
  accidents: "",
  owners: "",
  place: "",
};

const AdminPageCard = ({ data, getData }) => {
  const toast = useToast();
  const [active, setActive] = useState(false);
  const [dealForm, setDealForm] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    document.body.style.overflowY = !active ? "auto" : "hidden";
  }, [active]);

  const { token } = useAuth();
  const handleFormChange = (e) => {
    if (e.target.type === "number") {
      setDealForm((prev) => {
        return { ...dealForm, [e.target.name]: Number(e.target.value) };
      });
    } else {
      setDealForm((prev) => {
        return { ...dealForm, [e.target.name]: e.target.value };
      });
    }
  };

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
    };
  });

  console.log({ newArr });

  const handleDelete = async (id) => {
    // alert(id);
    setIsLoading(true);
    const res = await axios.delete(`${BElink}/dealer/delete/${id}`);
    console.log(res.data);
    toast({
      title: res.data.msg,
      status: "info",
      duration: 2000,
      isClosable: true,
      position: "top",
    });
    getData();
    setIsLoading(false);
  };

  const handleEdit = (id) => {
    setActive(!active);

    fetchData(id);
  };

  const updateFun = async (id) => {
    setIsLoading(true);

    const res = await axios.patch(`${BElink}/dealer/update/${id}`, dealForm);
    console.log(res.data);
    toast({
      title: res.data.msg,
      status: "info",
      duration: 2000,
      isClosable: true,
      position: "top",
    });
    setIsLoading(false);
  };
  const fetchData = async (id) => {
    setIsLoading(true);
    
    const res = await axios.get(`${BElink}/dealer/${id}`);
    console.log(res.data.msg[0]);
    setDealForm(res.data.msg[0]);
    setIsLoading(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    updateFun(dealForm._id);
    setActive(!active);
    getData();
  };

  return (
    <Container maxW="100vw" p={{ base: 5, md: 12 }} margin="0 auto">
        {isLoading && <Loader />}
      <Box
        w={"100vw"}
        h={"100vh"}
        position={"fixed"}
        top={0}
        left={0}
        backdropFilter={"blur(5px)"}
        zIndex={10000}
        display={active ? "flex" : "none"}
        justifyContent={"center"}
        overflow={"hidden"}
        alignItems={"center"}
      >
        <form
          onSubmit={handleFormSubmit}
          style={{
            width: "50%",
            height: "83%",
            margin: "auto",
            padding: "10px 40px 40px 40px",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            marginTop: "50px",
            borderRadius: "20px",
            color: "#B86B9E",
            backgroundColor: "white",
          }}
        >
          <HStack
            style={{
              margin: "20px",
              marginLeft: "35%",
              gap: "100px",
            }}
          >
            <Heading>Edit Car Details</Heading>
          </HStack>

          <HStack
            style={{ width: "100%" }}
            h={"40vh"}
            pt={"400px"}
            overflowY={"scroll"}
          >
            <br />
            <Box style={{ width: "49%", marginTop: "-10px" }}>
              <FormControl>
                <FormLabel>Title</FormLabel>
                <Input
                  name="title"
                  type="text"
                  required
                  value={dealForm.title}
                  onChange={handleFormChange}
                  placeholder="Enter Title"
                />
              </FormControl>
              <br />
              <FormControl>
                <FormLabel>Manufacturer</FormLabel>
                <Input
                  name="brand"
                  type="text"
                  required
                  value={dealForm.brand}
                  onChange={handleFormChange}
                  placeholder="Enter Manufacturer Name"
                />
              </FormControl>
              <br />

              <FormControl>
                <FormLabel>Model Name</FormLabel>
                <Input
                  name="model"
                  type="text"
                  required
                  value={dealForm.model}
                  onChange={handleFormChange}
                  placeholder="Enter Model Number"
                />
              </FormControl>
              <br />
              <FormControl>
                <FormLabel>Year</FormLabel>
                <Input
                  name="year"
                  type="number"
                  required
                  value={dealForm.year}
                  onChange={handleFormChange}
                  placeholder="Enter Manufacture Year"
                />
              </FormControl>

              <br />
              <FormControl>
                <FormLabel>Price</FormLabel>
                <Input
                  name="price"
                  type="number"
                  required
                  value={dealForm.price}
                  onChange={handleFormChange}
                  placeholder="Enter Listing price"
                />
              </FormControl>
              <br />
              <FormControl>
                <FormLabel>Original Paint</FormLabel>
                <Select
                  placeholder="Select option"
                  name="originalPaint"
                  onChange={handleFormChange}
                  required
                  value={dealForm.originalPaint ? "yes" : "no"}
                >
                  required<option value="yes">Yes</option>
                  required<option value="no">No</option>
                </Select>
              </FormControl>
              <br />
              <FormControl>
                <FormLabel>Fuel Type</FormLabel>
                <Select
                  placeholder="Select option"
                  name="fuel"
                  onChange={handleFormChange}
                  required
                  value={dealForm.fuel}
                >
                  required<option value="Petrol">Petrol</option>
                  required<option value="Diesel">Diesel</option>
                </Select>
              </FormControl>
              <br />
              <FormControl>
                <FormLabel>Transmission</FormLabel>
                <Select
                  placeholder="Select option"
                  name="transmission"
                  onChange={handleFormChange}
                  required
                  value={dealForm.transmission}
                >
                  required<option value="Automatic">Automatic</option>
                  required<option value="Manual">Manual</option>
                </Select>
              </FormControl>
            </Box>

            <Box
              style={{ width: "49%", marginLeft: "20px", marginTop: "10px" }}
            >
              <FormControl>
                <FormLabel>Image</FormLabel>
                <Input
                  name="image"
                  type="url"
                  required
                  value={dealForm.image}
                  onChange={handleFormChange}
                  placeholder="Enter Image url"
                />
              </FormControl>

              <br />
              <FormControl>
                <FormLabel>Color</FormLabel>

                <Select
                  placeholder="Select option"
                  name="colors"
                  onChange={handleFormChange}
                  required
                  value={dealForm.colors}
                >
                  required<option value="Red">Red</option>
                  required<option value="Black">Black</option>
                  required<option value="Silver">Silver</option>
                  required<option value="Blue">Blue</option>
                  required<option value="White">White</option>
                  required<option value="Yellow">Yellow</option>
                </Select>
              </FormControl>
              <br />
              <FormControl>
                <FormLabel>Accidents</FormLabel>
                <Input
                  name="accidents"
                  type="number"
                  required
                  value={dealForm.accidents}
                  onChange={handleFormChange}
                  placeholder="Enter no. of accidents"
                />
              </FormControl>
              <br />
              <FormControl>
                <FormLabel>Mileage</FormLabel>
                <Input
                  name="mileage"
                  type="number"
                  required
                  value={dealForm.mileage}
                  onChange={handleFormChange}
                  placeholder="Enter Vehicle mileage"
                />
              </FormControl>
              <br />
              <FormControl>
                <FormLabel>OwnerShip</FormLabel>

                <Select
                  placeholder="Select option"
                  name="owners"
                  onChange={handleFormChange}
                  required
                  value={dealForm.owners}
                >
                  required<option value="1st">1st</option>
                  required<option value="2nd">2nd</option>
                  required<option value="3rd">3rd</option>
                  required<option value="4th">4th</option>
                  required<option value="4+">4+</option>
                </Select>
              </FormControl>
              <br />
              <FormControl>
                <FormLabel>Registration Place</FormLabel>
                <Input
                  name="place"
                  type="text"
                  required
                  value={dealForm.place}
                  onChange={handleFormChange}
                  placeholder="Enter Registration Place"
                />
              </FormControl>

              <br />
              <FormControl>
                <FormLabel>Kilometer</FormLabel>
                <Input
                  name="kilometer"
                  type="number"
                  required
                  value={dealForm.kilometer}
                  onChange={handleFormChange}
                  placeholder="Enter Kms Driven"
                />
              </FormControl>

              <br />
              <FormControl>
                <FormLabel>Scratches</FormLabel>
                <Select
                  placeholder="Select option"
                  name="scratches"
                  onChange={handleFormChange}
                  required
                  value={dealForm.scratches}
                >
                  required<option value="yes">Yes</option>
                  required<option value="no">No</option>
                </Select>
              </FormControl>

              <br />
            </Box>
          </HStack>
          <Stack
            spacing={0}
            w={"180px"}
            m={"auto"}
            display={"flex"}
            flexDir={"row"}
            gap={2}
          >
            <Button mt={4} colorScheme="purple" type="submit">
              Submit
            </Button>
            <Button
              mt={4}
              colorScheme="purple"
              onClick={() => setActive(false)}
            >
              Close
            </Button>
          </Stack>
        </form>
      </Box>

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
                  <Box onClick={() => handleEdit(product._id)}>
                    <IconButton spacing={2} bg="green.500" color="white">
                      <Icon as={EditIcon} w={4} h={4} />
                      <Text fontSize="sm">Edit</Text>
                    </IconButton>
                  </Box>

                  <Box onClick={() => handleDelete(product._id)}>
                    <IconButton spacing={2} bg="red.600" color="white">
                      <Icon as={DeleteIcon} w={4} h={4} />
                      <Text fontSize="sm">Delete</Text>
                    </IconButton>
                  </Box>
                  <Link to={`/singlecarpage/${product._id}`}>
                    <IconButton spacing={2} bg="blue.600" color="white">
                      <Icon as={ViewIcon} w={4} h={4} />
                      <Text fontSize="sm">View</Text>
                    </IconButton>
                  </Link>
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

export default AdminPageCard;
