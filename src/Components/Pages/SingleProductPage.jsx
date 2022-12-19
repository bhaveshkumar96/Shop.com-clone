import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Stack,
  Image,
  Card,
  CardBody,
  Heading,
  Text,
  CardFooter,
  Button,
  HStack,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from "@chakra-ui/react";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

import Navbar from "../Navbar";
import ImageSlider from "../../Crousel/MainSlider";
import Footer from "../Footer";
function SingleProductPage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const cancelRef = React.useRef();
  const { id } = useParams();
  const [data, setData] = useState({});
  const [price, setPrice] = useState(1);
  const getData = () => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getData();
  }, [id]);
  const handleClick = () => {
    onClose()
    navigate("/");
  };
  // const handleAlert = ()=>{
  //   return  <Alert status='success'>
  //   <AlertIcon />
  //  Your Order is Placed ... Thank You...Shop More
  // </Alert>
  // }
  console.log("datta", data);
  return (
    <>
      <Navbar />
      <ImageSlider />
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
      >
        <Image
          objectFit="cover"
          maxW={500}
          src={data.image}
          alt="Caffe Latte"
        />

        <Stack>
          <CardBody>
            <Heading size="md">{data.title} </Heading>
            <Text py="2" fontFamily={"cursive"} letterSpacing="2px">
              {data.description}
            </Text>
            <Text>
              Price : $ <b>{data.price}</b>{" "}
            </Text>
            <Text>
              {" "}
              Total : $<b>{data.price * price} </b>{" "}
            </Text>
            <Button
              marginTop={"25px"}
              disabled={price === 1}
              border="1px black solid"
              onClick={() => setPrice(price - 1)}
            >
              -
            </Button>{" "}
            <Button marginTop={"25px"}> {price} </Button>{" "}
            <Button
              marginTop={"25px"}
              onClick={() => setPrice(price + 1)}
              border="1px black solid"
            >
              +
            </Button>
            <br />
            <Button
              marginTop={"25px"}
              width={"200px"}
              variant="solid"
              color={"white"}
              bg={"black"}
              _hover={{
                color: "black",
                bg: "white",
                border: "1px black solid",
              }}
              onClick={onOpen}
            >
              Buy Now
            </Button>
            <AlertDialog
              isOpen={isOpen}
              leastDestructiveRef={cancelRef}
              onClose={onClose}
            >
              <AlertDialogOverlay>
                <AlertDialogContent>
                  <AlertDialogHeader fontSize="lg" fontWeight="bold">
                    <HStack>
                      <Text
                        fontFamily={"cursive"}
                        fontSize="25px"
                        color={"#e28743"}
                      >
                        {" "}
                        Order Placed{" "}
                      </Text>

                      <img src="https://img.icons8.com/external-stickers-smashing-stocks/70/null/external-Done-success-and-error-messages-stickers-smashing-stocks.png" />
                    </HStack>
                  </AlertDialogHeader>

                  <AlertDialogBody>
                    <Alert
                      status="success"
                      variant="subtle"
                      flexDirection="column"
                      alignItems="center"
                      justifyContent="center"
                      textAlign="center"
                      height="200px"
                    >
                      <AlertIcon boxSize="40px" mr={0} />
                      <AlertTitle mt={4} mb={1} fontSize="lg">
                        Your Order is Placed !
                      </AlertTitle>
                      <AlertDescription maxWidth="sm">
                        Thanks for Shoping at Shoppers Hub please continue
                        shoping
                      </AlertDescription>
                    </Alert>
                  </AlertDialogBody>

                  <AlertDialogFooter>
                    <Button
                      ref={cancelRef}
                      onClick={onClose}
                      _hover={{
                        color: "black",
                        bg: "white",
                        border: "1px black solid",
                      }}
                    >
                      Cancel
                    </Button>
                    <Button
                      bg="#88d6e2"
                      onClick={() => {
                        onClose();
                        handleClick()
                      }}
                      ml={3}
                      _hover={{
                        color: "black",
                        bg: "white",
                        border: "1px black solid",
                      }}
                    >
                      OK
                    </Button>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialogOverlay>
            </AlertDialog>
          </CardBody>

          <CardFooter></CardFooter>
        </Stack>
      </Card>
      <Footer />
    </>
  );
}

export default SingleProductPage;
