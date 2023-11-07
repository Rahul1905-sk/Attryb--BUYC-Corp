import React, { useEffect, useState } from "react";
import { Box, Button, Image, Input, useToast } from "@chakra-ui/react";
import axios from "axios";

const ImageUpload = ({dealForm, setDealForm}) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [uploadImg, setuploadImg] = useState(null);
  const toast = useToast();
 
  useEffect(() => {
    console.log("useEffect ");
    if (uploadImg) {
      handleImageUpload();
    }
    console.log(uploadImg);
  }, [selectedImage]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setuploadImg(file);
    if (file) {
      if (file.size > 1000000) {
         toast({
          title: "File is too large",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      } else {
        setSelectedImage(URL.createObjectURL(file));
      }
    }
  };

  const clearImage = () => {
    setSelectedImage(null);
  };

  const handleImageUpload = async () => {
    console.log(uploadImg);
    try {
      const data = new FormData();
      data.append("file", uploadImg);
      data.append("upload_preset", "nstf8yyt");  

      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dloxi4h21/image/upload",
        data
      ); 

      if (response.data.secure_url) {
        toast({
          title: "Image uploaded successfully",
          status: "success",
          duration: 3000,
          position:'top',
          isClosable: true,
        });
 
        console.log("Image URL:", response.data.secure_url);
        setDealForm({...dealForm, image:response.data.secure_url})
      } else {
        toast({
          title: "Image upload failed",
          status: "error",
          duration: 3000,
          position:'top',
          isClosable: true,
        });
      }
    } catch (error) {
      toast({
        title: "Error uploading image",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };


  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      h={"5vh"}
    >
      <Input
        type="file"
        onChange={handleImageChange}
        accept="image/*"
        display="none"
         
        required
        id="imageInput"
      />
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        gap={1}
      >
        <label htmlFor="imageInput">
          <Button
            as="span"
            colorScheme="purple"
            size="sm"
            //  onClick={handleImageUpload}
          >
            Select Image
          </Button>
        </label>
        {selectedImage && (
          <Button colorScheme="red" size="sm" onClick={clearImage}>
            Clear Image
          </Button>
        )}
      </Box>
      {selectedImage && (
        <Box zIndex={2}>
          <Image src={selectedImage} alt="Selected Image" boxSize="90px" />
          {/* <Button
            mt={2}
            colorScheme="red"
            size="sm"
            onClick={clearImage}
          >
            Clear Image
          </Button> */}
        </Box>
      )}
    </Box>
  );
};

export default ImageUpload;
