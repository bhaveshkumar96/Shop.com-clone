import { Stack, Image, Text } from "@chakra-ui/react";

function Footer() {
  return (
    <>
   
      <Stack bgColor={"#f0f1f7"}>
      <Stack cursor={"pointer"}>
        <img src="https://i.ibb.co/XJ6DPVh/footer-Image.png" alt="11" />
      </Stack>
        <Text align={"left"} fontSize="12px">
          © 1997-2022 Market America, Inc. or its affiliates. All other
          designated trademarks, copyrights, and brands are the property of
          their respective owners.
          <br />
          Only Customers will receive cashback on qualifying purchases.
          UnFranchise Owners/Shop Consultants will receive increased IBV instead
          of cashback on qualifying purchases.
        </Text>
        <Text align={"left"} fontSize={"13px"}>
          <a href="/">Privacy Policy</a>| <a href="/">Terms of Use</a>|{" "}
          <a href="/">Advertising Disclouser</a>| <a href="/">Return Policy</a>|{" "}
          <a href="/">Shipping Information</a>{" "}
        </Text>
        <Stack align={"center"}>
          <Image
            w={"45%"}
            alt="scr"
            src="https://i.ibb.co/p20dLDb/footer-image.png"
          />
        </Stack>

        <Stack align={"center"}>
          <img
            width={"15%"}
            alt="flogo"
            src="https://i.ibb.co/vBMYdyb/digi.png"
          />
        </Stack>
      </Stack>
    </>
  );
}

export default Footer;
