import { Image, Input, Stack, HStack, Text } from "@chakra-ui/react";

function Navbar() {
  return (
    <>
      <Stack bg={"#202340"} color="white" h={35} justify="center">
        <Text cursor={"pointer"}>
          1st time customers save 25% on SHOP.COM exclusive brands using code
          FIRST25OFF . Max $25 discount. Terms Apply Click Here
        </Text>
      </Stack>
      <Stack bg={"#f0f1f7"} gap={0} boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px">
        <HStack justifyContent={"space-between"}>
          <Image
            alt="logo"
            src="https://i.ibb.co/XfBs7tW/shop-com-logo.png"
            width={"8%"}
            cursor="pointer"
          />{" "}
          <Input
            placeholder="Search at Shoppers Hub"
            width={"40%"}
            height={40}
            borderRadius={"20px"}
            colorScheme="gray"
            fontSize={"20px"}
          />
          <Image
            alt="logo2"
            src="https://img.shop.com/Image/header2013/layered-us-eng-105972-blk-friday-banner-300x50-11670940062489.jpg"
          />{" "}
        </HStack>
        <HStack justifyContent={"space-between"}>
          <HStack>
          <img alt="menu" src="https://img.icons8.com/ios-glyphs/30/null/menu--v1.png"/>
          <Text>Categories</Text>
          </HStack>
          <HStack gap={10}>
            <Text>Exclusive Brands</Text>
            <Text>Stores</Text>
            <Text>Deals</Text>
            <Text>SHOP Travel</Text>
            <Text>Departments</Text>
            <Text>ShopBuddy</Text>
            <Text>SHOP Local</Text>
          </HStack>
          <HStack alignItems={"center"}>
            <Text>
              {" "}
              <img
                alt="1"
                width={"25%"}
                src="https://img.icons8.com/ios-filled/50/null/user-male-circle.png"
              />{" "}
              Sign-In
            </Text>
            <Text>
              {" "}
              <img
                alt="2"
                width={"18%"}
                src="https://img.icons8.com/external-becris-lineal-becris/64/null/external-reload-mintab-for-ios-becris-lineal-becris.png"
              />{" "}
              Orders
            </Text>
            <Text>
              {" "}
              <img
                alt="3"
                width={"35%"}
                src="https://img.icons8.com/ios-filled/50/null/shopping-cart.png"
              />{" "}
              Cart
            </Text>
          </HStack>
        </HStack>
      </Stack>
      
    </>
  );
}

export default Navbar;
