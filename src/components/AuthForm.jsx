import React from 'react';
import {
  Box,
  Input,
  Stack,
  Button,
  Text,
  FormControl,
  FormLabel,
  Link,
  Checkbox,
  Center,
  Image,
  Heading,
} from '@chakra-ui/react';

function AuthForm({ isLogin }) {
  return (
    <Center h="100vh">
      <Box
        w="100%"
        maxW="400px"
        p={4}
        borderWidth="1px"
        borderRadius="lg"
        boxShadow="md"
      >
        <Checkbox colorScheme="purple" size="lg" mb={4} isChecked={isLogin}>
          Flip
        </Checkbox>
        <Box
          display={isLogin ? 'block' : 'none'}
          transition="0.5s"
          transform={isLogin ? 'rotateY(0deg)' : 'rotateY(180deg)'}
        >
          <Box textAlign="center">
            <Image src="/images/frontImg.jpg" alt="front" />
            <Text fontSize="26px" fontWeight="600">
              Every new friend is a new adventure
            </Text>
            <Text fontSize="15px" fontWeight="500">
              Let's get connected
            </Text>
          </Box>
        </Box>
        <Box
          display={isLogin ? 'none' : 'block'}
          transition="0.5s"
          transform={isLogin ? 'rotateY(180deg)' : 'rotateY(0deg)'}
        >
          <Box textAlign="center">
            <Image src="/images/backImg.jpg" alt="back" />
            <Text fontSize="26px" fontWeight="600">
              Complete miles of the journey with one step
            </Text>
            <Text fontSize="15px" fontWeight="500">Let's get started</Text>
          </Box>
        </Box>
        <Box display={isLogin ? 'block' : 'none'} p={4}>
          <Heading as="h1" size="xl" textAlign="center">
            Login
          </Heading>
          <form>
            <Stack spacing={4} mt={4}>
              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input type="email" placeholder="Enter your email" />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Password</FormLabel>
                <Input type="password" placeholder="Enter your password" />
              </FormControl>
              <Text textAlign="center">
                <Link color="purple.500" href="#">
                  Forgot password?
                </Link>
              </Text>
              <Button colorScheme="purple" type="submit">
                Submit
              </Button>
              <Text textAlign="center" mt={4}>
                Don't have an account?{' '}
                <Link color="purple.500" onClick={() => isLogin(false)}>
                  Signup now
                </Link>
              </Text>
            </Stack>
          </form>
        </Box>
        <Box display={isLogin ? 'none' : 'block'} p={4}>
          <Heading as="h1" size="xl" textAlign="center">
            Signup
          </Heading>
          <form>
            <Stack spacing={4} mt={4}>
              <FormControl isRequired>
                <FormLabel>Name</FormLabel>
                <Input type="text" placeholder="Enter your name" />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input type="email" placeholder="Enter your email" />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Password</FormLabel>
                <Input type="password" placeholder="Enter your password" />
              </FormControl>
              <Button colorScheme="purple" type="submit">
                Submit
              </Button>
              <Text textAlign="center" mt={4}>
                Already have an account?{' '}
                <Link color="purple.500" onClick={() => isLogin(true)}>
                  Login now
                </Link>
              </Text>
            </Stack>
          </form>
        </Box>
      </Box>
    </Center>
  );
}

export default AuthForm;
