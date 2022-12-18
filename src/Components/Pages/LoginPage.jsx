import { HStack, Stack, Image, Text, Button, Input } from "@chakra-ui/react";

import Footer from "../Footer";
import Navbar from "../Navbar";
import { AuthContext } from "../Context/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
function LoginPage() {
  const {toggleUser} = useContext(AuthContext)
  const navigate = useNavigate()
  const handleClick = ()=>{
    toggleUser()
    navigate("/")
  }
  return (
    <>
      <Navbar />
      {/* <MainSlider/> */}
      <HStack gap={"20%"}>
        <Stack width={"35%"} ml="100px">
          <Text fontSize={"4xl"} textAlign="centre" fontFamily={"cursive"}>
            The only site you need
          </Text>
          <Input
            variant="flushed"
            placeholder="Enter Your Email"
            textAlign={"center"}
            fontSize="xl"
          />
           <Input
           type={"password"}
            variant="flushed"
            placeholder="Enter Your password"
            textAlign={"center"}
            fontSize="xl"
          />
          <Button onClick={handleClick} bg={"black"} borderRadius={"none"} colorScheme="white" letterSpacing={'3px'} fontSize="18px">
            
           Login
          </Button>
          <hr />
          <br />
          <Button
            bg={"white"}
            border="1px"
            borderRadius={"none"}
            columnGap="10"
          >
            {" "}
            <Image
              src="https://i.ibb.co/kKVfTqh/icons8-google-48.png"
              width={"8%"}
            />
            <Text as={"b"} fontFamily="Helvetica">
              Continue With Google{" "}
            </Text>{" "}
          </Button>
          <Button
            bg={"white"}
            border="1px"
            borderRadius={"none"}
            columnGap="10"
          >
            <Image
              src="https://i.ibb.co/QYLH2s2/icons8-apple-logo-50.png"
              width={"8%"}
            />{" "}
            <Text as={"b"} fontFamily="Helvetica">
              Continue With Apple{" "}
            </Text>{" "}
          </Button>
          <Button
            bg={"white"}
            border="1px"
            borderRadius={"none"}
            columnGap="10"
          >
            <Image
              src="https://i.ibb.co/dJS70Mj/icons8-facebook-48.png"
              width={"8%"}
            />{" "}
            <Text as={"b"} fontFamily="Helvetica">
              Continue With Facebook{" "}
            </Text>{" "}
          </Button>
          <Text>
            By creating an account, you consent to Shopper's{" "}
            <Text as={"u"}>Terms & Conditions.</Text> To learn more about how
            Shoppers hub uses and protects your personal data, please read
            Shopper's <Text as={"u"}>Privacy Policy.</Text>{" "}
          </Text>
        </Stack>
        <Stack marginBottom={"20px"}>
          <Image src="https://images.pexels.com/photos/972804/pexels-photo-972804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        </Stack>
      </HStack>

      <Footer />
    </>
  );
}

export default LoginPage;
