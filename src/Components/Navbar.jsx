import { Image, Input, Stack, HStack, Text} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import React from "react";
import { Button } from "@chakra-ui/react";
import { AuthContext } from "./Context/AuthContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const {isAuth} = useContext(AuthContext)
  return (
    <>
   
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Explore Other Collection</DrawerHeader>
  
            <DrawerBody>
              <Stack paddingBottom={"20px"}>
              <img width={"50%"} src="https://i.ibb.co/XfBs7tW/shop-com-logo.png" alt="al" />
              <hr />
              <br />
              </Stack>
             
              <li>Clothes</li>
              <li>Shoes</li>

             <li> <Link to={"/products"}>Beauty</Link> </li>
              <li>Home</li>
              <li>Baby</li>
              <li>Health & Nutirtion</li>
              <li>Jwels</li>
              <li>Electronics</li>
              <li>Pet Supplies</li>
              <li>Food & Drinks</li>
              <li>Travels</li>
              <li>Sports</li>
              <li>Shop</li>
              <br />
<hr />
<br />
              <Text>Welcome <b> {isAuth ? "Bhavesh Kumar" : ""} </b>  </Text>
              
            </DrawerBody>
  
            <DrawerFooter>
              
             
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      <Stack bg={"#202340"} color="white" h={35} justify="center" >
        <Text cursor={"pointer"}>
          1st time customers save 25% on SHOP.COM exclusive brands using code
          FIRST25OFF . Max $25 discount. Terms Apply Click Here
        </Text>
      </Stack>
      
      <Stack bg={"#f0f1f7"} gap={0} boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" height="120px" >
        <HStack justifyContent={"space-between"}>
          <Link to={"/"}>
          <Image
            alt="logo"
            src="https://i.ibb.co/XfBs7tW/shop-com-logo.png"
            width={"33%"}
            cursor="pointer"
          />
          </Link>
          {" "}
          <Input
            placeholder="Search at Shoppers Hub"
            width={"40%"}
         
            borderRadius={"20px"}
            colorScheme="none"
            fontSize={"20px"}
          />
          <Image
            alt="logo2"
            src="https://img.shop.com/Image/header2013/layered-us-eng-105972-blk-friday-banner-300x50-11670940062489.jpg"
          />{" "}
        </HStack>
        <HStack justifyContent={"space-between"}>
          <HStack>
         
             <Button ref={btnRef} color="black" onClick={onOpen}>
             <img width={"50%"} src="https://img.icons8.com/ios-filled/50/null/menu-rounded.png" alt="12121"/>
        </Button>
          </HStack>
          <HStack gap={10}>
          <Link to={"/brands"}> Exclusive Brands </Link>
            <Text cursor={'pointer'}>Stores</Text>
            <Text cursor={'pointer'}>Deals</Text>
            <Text cursor={'pointer'}>SHOP Travel</Text>
            <Text cursor={'pointer'}>Departments</Text>
            <Text cursor={'pointer'}>ShopBuddy</Text>
            <Text cursor={'pointer'}>SHOP Local</Text>
          </HStack>
          <HStack align={"center"} cursor="pointer">
            <HStack>
              <img
                alt="1"
                width={"25%"}
                src="https://img.icons8.com/ios-filled/50/null/user-male-circle.png"
              />
              <Link to='/login'>
              <Text> {isAuth ? "Sign-out" : "Sign-in"}  </Text></Link>
            </HStack>
            <HStack>
              <img
                alt="2"
                width={"18%"}
                src="https://img.icons8.com/external-becris-lineal-becris/64/null/external-reload-mintab-for-ios-becris-lineal-becris.png"
              />
              <Text> Orders</Text>
            </HStack>
            <HStack>
              <img
                alt="3"
                width={"35%"}
                src="https://img.icons8.com/ios-filled/50/null/shopping-cart.png"
              />
              <Text>Cart</Text>
            </HStack>
          </HStack>
        </HStack>
      </Stack>
      
    </>
  );
}

export default Navbar;
