import { HStack, Stack, Text, Image,} from "@chakra-ui/react";
import MainSlider from "../../Crousel/MainSlider";
import Footer from "../Footer";
import Navbar from "../Navbar";

function LandingPage() {
  return (
    <>
      <Navbar />
      <MainSlider />
      <Text fontSize={'25px'} fontWeight="bold" marginTop={"20px"} marginBottom="25px">GIFT IDEAS</Text>
        <HStack paddingLeft={'40px'}  marginTop="50px" marginBottom={'40px'}>
          <Stack>
          <Image
           width="70%"
            border={"10px #cbcdd4  solid"}
            borderRadius={"50%"}
            src="https://img.shop.com/Image/240000/243400/243406/products/1947692115.jpg?plain&size=400x400"
          />
          <Text fontWeight={'bold'}>ELECTRONICS</Text>
          </Stack>
          <Stack>
          <Image
            width="90%"
            border={"10px #cbcdd4  solid"}
            borderRadius={"50%"}
            src="https://img.shop.com/Image/240000/243300/243380/products/1869987733.jpg?plain&size=300x300"
          />
          <Text fontWeight={'bold'}>GIFT UNDER $25 </Text>
          </Stack>
         
         
          <Stack>
          <Image
           width="90%"
            border={"10px #cbcdd4  solid"}
            borderRadius={"50%"}
            src="https://img.shop.com/Image/240000/248600/248698/products/1766653370.jpg?plain&size=300x300"
          />
          <Text fontWeight={'bold'}>STOCKING STUFFER</Text>
          </Stack>
          <Stack>
          <Image
            width="90%"
            border={"10px #cbcdd4  solid"}
            borderRadius={"50%"}
            src="https://img.shop.com/Image/280000/287000/287062/products/1942108864.jpg?plain&size=300x300"
          />
          <Text fontWeight={'bold'}>GIFT FOR THE FAMILY</Text>
          </Stack>
        </HStack>
      <HStack gap={8} marginLeft="15px" marginTop="50px" marginBottom={'40px'} border={"10px #cbcdd4  solid"}>
      <Image
            boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
            cursor={"pointer"}
            alt="1"
            src="https://img.shop.com/Image/homepage/shop-usa-100086-gift-wrapping-media1669930199153.jpg"
          />
          <Image
            boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
            cursor={"pointer"}
            alt="1"
            src="https://img.shop.com/Image/homepage/shop-usa-105054-Holiday-egift-banners-social-media-assets-media1665596337501.jpg"
          />
          <Image
            boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
            cursor={"pointer"}
            alt="1"
            src="https://img.shop.com/Image/homepage/shop-usa-105045-Holiday-Curbside-Pickup-Banners-Social-Media-min1666128402917.jpg"
          />
          <Image
            boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
            cursor={"pointer"}
            alt="1"
            src="https://img.shop.com/Image/homepage/shop_usa_100094_eng_2022_holiday_buy_online_pickup_in_store_banner_-min1667575563985.jpg"
          />
        </HStack>
      <Stack >
      <Text fontSize={'25px'} fontWeight="bold" marginTop="50px" marginBottom={'40px'}>Holiday Specials</Text>
        <HStack paddingLeft={'40px'}>
          <Stack>
          <Image
           width="90%"
            border={"10px #cbcdd4  solid"}
            borderRadius={"50%"}
            src="https://img.shop.com/Image/240000/248600/248698/products/925887691.jpg?plain&size=750x750"
          />
          <Text fontWeight={'bold'}>BEAUTY</Text>
          </Stack>
          <Stack>
          <Image
            width="90%"
            border={"10px #cbcdd4  solid"}
            borderRadius={"50%"}
            src="https://img.shop.com/Image/280000/282000/282022/products/1875095140.jpg?plain&size=750x750"
          />
          <Text fontWeight={'bold'}>JWELRY</Text>
          </Stack>
          <Stack>
          <Image
            width="90%"
            border={"10px #cbcdd4  solid"}
            borderRadius={"50%"}
            src="https://img.shop.com/Image/210000/214100/214196/products/701199621.jpg?plain&size=750x750"
          />
          <Text fontWeight={'bold'}>HEALTH & NUTRITION</Text>
          </Stack>
         
          <Stack>
          <Image
           width="90%"
            border={"10px #cbcdd4  solid"}
            borderRadius={"50%"}
            src="https://img.shop.com/Image/240000/243300/243380/products/1788447992.jpg?plain&size=750x750"
          />
          <Text fontWeight={'bold'}>BEAUTY GIFT</Text>
          </Stack>
          <Stack>
          <Image
            width="90%"
            border={"10px #cbcdd4  solid"}
            borderRadius={"50%"}
            src="https://img.shop.com/Image/240000/248600/248698/products/1849034699.jpg?plain&size=750x750"
          />
          <Text fontWeight={'bold'}>SEE ALL</Text>
          </Stack>
        </HStack>
      </Stack>
      <Stack  border={"10px #cbcdd4  solid"} paddingTop="20px" >
        <HStack gap={20} margin="auto">
          <Image
            boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
            cursor={"pointer"}
            alt="1"
            src="https://img.shop.com/Image/homepage/ix-us-eng-105233-digestive-health-packets-holiday-banner-med1667506965936.jpg"
          />
          <Image
            boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
            cursor={"pointer"}
            alt="1"
            src="https://img.shop.com/Image/homepage/royal-spa-usa-engsmall1666034758440.jpg"
          />
          <Image
            boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
            cursor={"pointer"}
            alt="1"
            src="https://img.shop.com/Image/homepage/isotonix-usa-105568-opc3-beauty-blend-banner-media1671109554812.jpeg"
          />
        </HStack>
        <br />
        <Text color={"#2e2c38"} fontSize="30px" fontWeight="bold">
          Top Sellers
        </Text>
        <HStack justify={"center"} paddingBottom="25px" color={"#2e2c38"} >
          <Stack _hover={{ color: "#5fc6f7", cursor: "pointer" }}>
            <Image
              width={"90%"}
              src="https://img.shop.com/Image/210000/214100/214196/products/1301699648.jpg?plain&size=600x600"
            />
            <Text>Isotonix OPC-3®</Text>
            <b>$31.95 - $71.95</b>
          </Stack>
          <Stack _hover={{ color: "#5fc6f7" }}>
            <Image
              width={"90%"}
              src="https://img.shop.com/Image/210000/214100/214196/products/935461732.jpg?plain&size=600x600"
            />
            <Text>Isotonix® Daily Essentials Packets</Text>
            <b>$77.00</b>
          </Stack>
          <Stack _hover={{ color: "#5fc6f7" }}>
            <Image
              width={"90%"}
              src="https://img.shop.com/Image/240000/243300/243396/products/603891601.jpg?plain&size=600x600"
            />
            <Text>Ultimate Aloe™</Text>
            <b>$71.95</b>
          </Stack>
          <Stack _hover={{ color: "#5fc6f7" }}>
            <Image
              width={"90%"}
              src="https://img.shop.com/Image/210000/214100/214196/products/561800354.jpg?plain&size=600x600"
            />
            <Text>Isotonix® Digestive Enzymes with Probiotics (Packets)</Text>
            <b>$24.95</b>
          </Stack>
          <Stack _hover={{ color: "#5fc6f7" }}>
            <Image
              width={"90%"}
              src="https://img.shop.com/Image/210000/214100/214196/products/1301699648.jpg?plain&size=600x600"
            />
            <Text>Isotonix® Digestive Enzymes with Probiotics</Text>
            <b>$31.95 - $71.95</b>
          </Stack>
        </HStack>
      </Stack>
      {/* ourBrand */}
      <Stack  border={"10px #cbcdd4  solid"}>
        <Text color={"#2e2c38"} fontSize="30px" fontWeight="bold">
          Our Brands
        </Text>
        <HStack justify={"center"} paddingBottom="25px" color={"#2e2c38"} >
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
      <Footer />
    </>
  );
}

export default LandingPage;
