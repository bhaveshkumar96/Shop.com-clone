import axios from "axios";
import { useEffect, useState } from "react";
import MainSlider from "../../Crousel/MainSlider";
import Footer from "../Footer";
import Navbar from "../Navbar";
import ProductCard from "./ProductCard";
import { SimpleGrid } from "@chakra-ui/react";
import "./BeautyProducts.module.css"
function BeautyProducts() {
  const [data, setData] = useState([]);
  const getData = () => {
    axios
      .get(`https://fakestoreapi.com/products`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getData();
  }, []);
  console.log(data)
  return (
    <>
      <Navbar />
      <MainSlider />
      <SimpleGrid templateColumns='repeat(4,1fr)' gap={"20px"}>
{data.map((ele)=>(
  <ProductCard
  id={ele.id}
  {...ele}
  
  />
))}
</SimpleGrid>
      <Footer />
    </>
  );
}

export default BeautyProducts;
