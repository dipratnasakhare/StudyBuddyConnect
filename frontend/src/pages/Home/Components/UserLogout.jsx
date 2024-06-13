import React from "react";
import {
  Avatar,
  Box,
  Flex,
  HStack,
  VStack,
  Text,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Button,
} from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";

import { FiChevronDown } from "react-icons/fi";

export const UserLogout = ({ user }) => {

  const navigate = useNavigate();

  const HandelLogin = () =>{
    navigate('/login')
   }
   
   const HandelSignOut = () =>{

  }

  return (
    <div>
      {user ? (
        <Flex alignItems={"center"}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: "none" }}
            >
              <HStack>
                <Avatar
                  size={"sm"}
                  src={
                    "https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                />
                <VStack
                  display={{ base: "none", md: "flex" }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2"
                >
                  <Text fontSize="sm">Justina Clark</Text>
                  <Text fontSize="xs" color="gray.600">
                    Admin
                  </Text>
                </VStack>
                <Box display={{ base: "none", md: "flex" }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
            //    bg={useColorModeValue("white", "gray.900")}
            //    borderColor={useColorModeValue("gray.200", "gray.700")}
            >
              <MenuItem>Profile</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuItem>Billing</MenuItem>
              <MenuDivider />
              <MenuItem  onClick={HandelSignOut} >Sign out</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      ) : (
        <Button onClick={HandelLogin} colorScheme="teal" variant="outline">
          Login
        </Button>
      )}
    </div>
  );
};
