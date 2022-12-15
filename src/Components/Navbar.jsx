import { Image, Input, Stack, HStack, Text } from "@chakra-ui/react";

function Navbar() {
  return (
    <>
      <Stack bg={"#202340"} color="white" h={40} justify="center">
        <Text cursor={"pointer"}>
          1st time customers save 25% on SHOP.COM exclusive brands using code
          FIRST25OFF . Max $25 discount. Terms Apply Click Here
        </Text>
      </Stack>
      <Stack bg={"#f0f1f7"}>
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
      </Stack>
    </>
  );
}

export default Navbar;
