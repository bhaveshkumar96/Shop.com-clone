import { HStack, Stack, Text, Image } from "@chakra-ui/react";
import MainSlider from "../Crousel/MainSlider";

function LandingPage() {
  return (
    <>
      <MainSlider />
      <Stack>
        
        <Text color={"#2e2c38"} as={"h1"}>
          Our Brands
        </Text>
        <HStack justify={"center"} paddingBottom="25px" color={"#2e2c38"}>
        <Stack _hover={{ color: "#5fc6f7",cursor:"pointer" }} >
            <Image width={"90%"} src="https://img.shop.com/Image/210000/214100/214196/products/1301699648.jpg?plain&size=600x600" />
            <Text>Isotonix OPC-3®</Text>
            <b>$31.95 - $71.95</b>
          </Stack>
          <Stack _hover={{ color: "#5fc6f7" }}>
            <Image width={"90%"} src="https://img.shop.com/Image/210000/214100/214196/products/935461732.jpg?plain&size=600x600" />
            <Text>Isotonix® Daily Essentials Packets</Text>
            <b>$77.00</b>
          </Stack>
          <Stack _hover={{ color: "#5fc6f7" }}>
            <Image width={"90%"} src="https://img.shop.com/Image/240000/243300/243396/products/603891601.jpg?plain&size=600x600" />
            <Text>Ultimate Aloe™</Text>
            <b>$71.95</b>
          </Stack>
          <Stack _hover={{ color: "#5fc6f7" }}>
            <Image width={"90%"} src="https://img.shop.com/Image/210000/214100/214196/products/561800354.jpg?plain&size=600x600" />
            <Text>Isotonix® Digestive Enzymes with Probiotics (Packets)</Text>
            <b>$24.95</b>
          </Stack>
          <Stack _hover={{ color: "#5fc6f7" }}>
            <Image width={"90%"} src="https://img.shop.com/Image/210000/214100/214196/products/1301699648.jpg?plain&size=600x600" />
            <Text>Isotonix® Digestive Enzymes with Probiotics</Text>
            <b>$31.95 - $71.95</b>
          </Stack>
        </HStack>
      </Stack>
      {/* ourBrand */}
      <Stack>
        <Text color={"#2e2c38"} as={"h1"}>
          Our Brands
        </Text>
        <HStack justify={"center"} paddingBottom="25px" color={"#2e2c38"}>
          <Stack _hover={{ color: "#5fc6f7" }}>
            <Text>
              <b>HEALTH & NUTRITION</b>
            </Text>
            <Image src="https://img.shop.com/Image/homepage/healthnutirtion1572880380738.jpg" />
          </Stack>
          <Stack _hover={{ color: "#5fc6f7" }}>
            <Text>
              <b>BEAUTY</b>
            </Text>
            <Image src="https://img.shop.com/Image/homepage/lipstick1572880828301.jpg" />
          </Stack>
          <Stack _hover={{ color: "#5fc6f7" }}>
            <Text>
              <b>HOME & CLEANING</b>
            </Text>
            <Image src="https://img.shop.com/Image/homepage/home_ma1572880950379.jpg" />
          </Stack>
          <Stack _hover={{ color: "#5fc6f7" }}>
            <Text>
              <b>BABY & KIDS</b>
            </Text>
            <Image src="https://img.shop.com/Image/homepage/baby-kids1572881179463.jpg" />
          </Stack>
          <Stack _hover={{ color: "#5fc6f7" }}>
            <Text>
              <b>JEWELRY</b>
            </Text>
            <Image src="https://img.shop.com/Image/homepage/1840336563__225x225-img__.jpg" />
          </Stack>
        </HStack>
      </Stack>
    </>
  );
}

export default LandingPage;
