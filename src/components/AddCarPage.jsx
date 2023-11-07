import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Input,
  Select,
  Stack,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { AddCarPageFun } from "../Redux/marketplaceReducer/action";
import { Link } from "react-router-dom";
import ImageUpload from "./ImageUpload";
import axios from "axios";
import { BElink } from "./exportContent";
import { useAuth } from "./AuthContext";

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

const AddCarPage = () => { 
  const toast = useToast();
 
  const [dealForm, setDealForm] = useState(initialState);
const {token} = useAuth()
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

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log({dealForm});
    addCar()
  };


  const addCar = async() => {

    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    const res = await axios.post(`${BElink}/dealer/add`, dealForm)
    console.log(res.data.msg);
    toast({
      title: res.data.msg,
      status: "info", 
      duration: 2000,
      isClosable: true,
      position:"top"
    });
    setDealForm(initialState)
  }


  return (
    <Box style={{ width: "100%", paddingBottom: "10px", paddingTop: "0px" }}>
      <form
        onSubmit={handleFormSubmit}
        style={{
          width: "60%",
          margin: "auto",
          padding: "10px 40px 40px 40px",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          marginTop: "50px",
          borderRadius: "20px",
          color: "#B86B9E",
        }}
      >
        <HStack
          style={{
            // paddingTop: "10px",
            margin: "20px",
            marginLeft: "30%",

            gap: "100px",
          }}
        >
          <Heading>Add Car Details</Heading>
        </HStack>

        <HStack style={{ width: "100%" }}>
          <br />
          <Box style={{ width: "49%", marginTop: "-10px" }}>
            <FormControl >
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
            <FormControl >
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

            <FormControl >
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
            <FormControl >
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
            <FormControl >
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
            <FormControl >
              <FormLabel>Original Paint</FormLabel>
              <Select
                placeholder="Select option"
                name="originalPaint"
                onChange={handleFormChange}
               required
                value={dealForm.originalPaint}
              >
                required<option
                 value="yes">Yes</option>
                required<option
                 value="no">No</option>
              </Select>
            </FormControl>
            <br />
            <FormControl >
              <FormLabel>Fuel Type</FormLabel>
              <Select
                placeholder="Select option"
                name="fuel"
                onChange={handleFormChange}
               required
                value={dealForm.fuel}
              >
                required<option
                 value="Petrol">Petrol</option>
                required<option
                 value="Diesel">Diesel</option>
              </Select>
            </FormControl>
            <br />
            <FormControl >
              <FormLabel>Transmission</FormLabel>
              <Select
                placeholder="Select option"
                name="transmission"
                onChange={handleFormChange}
               required
                value={dealForm.transmission}
              >
                required<option
                 value="Automatic">Automatic</option>
                required<option
                 value="Manual">Manual</option>
              </Select>
            </FormControl>
          </Box>

          <Box style={{ width: "49%", marginLeft: "20px" , marginTop:'10px'}}>
            <FormControl >
              <FormLabel>Image</FormLabel>
              <Stack>
                <ImageUpload   dealForm={dealForm} setDealForm={setDealForm} />
              </Stack>
            </FormControl>

            <br />
            <FormControl >
              <FormLabel>Color</FormLabel>
            
              <Select 
               placeholder="Select option"
               name="colors"
               onChange={handleFormChange}
              required
               value={dealForm.colors}
              >
           
            required<option
             value="Red">Red</option>
            required<option
             value="Black">Black</option>
            required<option
             value="Silver">Silver</option>
            required<option
             value="Blue">Blue</option>
            required<option
             value="White">White</option>
            required<option
             value="Yellow">Yellow</option>
          </Select>
            </FormControl>
            <br />
            <FormControl >
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
            <FormControl >
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
            <FormControl >
              <FormLabel>OwnerShip</FormLabel>
             
              <Select
                placeholder="Select option"
                name="owners"
                onChange={handleFormChange}
               required
                value={dealForm.owners}
              >
                required<option
                 value="1st">1st</option>
                required<option
                 value="2nd">2nd</option>
                required<option
                 value="3rd">3rd</option>
                required<option
                 value="4th">4th</option>
                required<option
                 value="4+">4+</option>
              </Select>
            </FormControl>
            <br />
            <FormControl >
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
            <FormControl >
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
            <FormControl >
              <FormLabel>Scratches</FormLabel>
              <Select
                placeholder="Select option"
                name="scratches"
                onChange={handleFormChange}
               required
                value={dealForm.scratches}
              >
                required<option
                 value="yes">Yes</option>
                required<option
                 value="no">No</option>
              </Select>
            </FormControl>

            <br />
          </Box>
        </HStack>
        <Stack spacing={0} w={"120px"} m={"auto"}>
          <Button mt={4}  colorScheme="purple" type="submit">
            Submit
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default AddCarPage;
