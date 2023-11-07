import {
  Box,
  Flex,
  Avatar,
  HStack,
  Text,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Heading,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

import LOGO from "../../public/Attryb/1.png";
import { useEffect, useState } from "react";
import { useAuth } from "./AuthContext";

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { token, logout } = useAuth();
  const hrefs = ["/", "/oempage", "/login"];
  const Links = ["Home", "OEM", token ? "Logout" : "Login"];
  if (token) {
    Links.splice(1, 0, "Dashboard", "Add Car");
    hrefs.splice(1, 0, "/adminsection", "/addcarpage");
  }

  const handleLogoutClick = () => {
    logout();
    navigate("/login");
  };

  const NavLink = (props) => {
    const { children, ind } = props;
    console.log({ props });
    return (
      <Box
        as="a"
        px={2}
        py={1}
        rounded={"md"}
        _hover={{
          textDecoration: "none",
          bg: useColorModeValue("gray.200", "gray.700"),
        }}
        href={hrefs[children[1]]}
        onClick={
          token && children[0] === "Logout" ? handleLogoutClick : undefined
        }
      >
        {children[0]}
      </Box>
    );
  };

  return (
    <>
      <Box
        bg={useColorModeValue("gray.100", "gray.900")}
        px={4}
        boxShadow={" rgb(38, 57, 77) 0px 20px 30px -25px;"}
        position="sticky"
        top={0}
        left={0}
        right={0}
        zIndex={100}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />

          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  size={"lg"}
                  src={
                    "https://i.pinimg.com/736x/61/bf/66/61bf666836faa3d13debf58d20c51427.jpg"
                  }
                />
              </MenuButton>
            </Menu>
            <Heading mt={'-4px'} size={"lg"}>BUYC</Heading>
          </Flex>
          <HStack spacing={8} alignItems={"center"}>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link, i) => (
                <NavLink key={link}>{[link, i]}</NavLink>
              ))}
            </HStack>
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link, i) => (
                <NavLink key={link}>{[link, i]}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
