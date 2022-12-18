import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
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
  ButtonGroup,
  Divider,
} from "@chakra-ui/react";
import Navbar from "../Navbar";
import ImageSlider from "../../Crousel/MainSlider";
import Footer from "../Footer";
function SingleProductPage() {
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
            <Button marginTop={"25px"} onClick={() => setPrice(price + 1)} border="1px black solid">
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
            >
              Buy Now
            </Button>
          </CardBody>

          <CardFooter></CardFooter>
        </Stack>
      </Card>
      <Footer />
    </>
  );
}

export default SingleProductPage;
