
import Footer from "../Footer";
import Navbar from "../Navbar";
import  {SimpleGrid, GridItem, Box} from "@chakra-ui/react";
let imageData = [
  {
    image:
      "https://img.shop.com/Image/Images/11module/MABrands/isotonix-us-au-gb-hk-sg-logo.svg",
  },
  {
    image:
      "https://img.shop.com/Image/Images/11module/MABrands/prime-usca-hk-logo.svg",
  },
  {
    image:
      "https://img.shop.com/Image/Images/11module/MABrands/advanced-level-90-us-logo.svg",
  },
  {
    image:
      "https://img.shop.com/Image/Images/11module/MABrands/bliss-new-us-logo.svg",
  },
  {
    image:
      "https://img.shop.com/Image/Images/11module/MABrands/glucosatrin-usca-au-logo.svg",
  },
  {
    image:
      "https://img.shop.com/Image/Images/11module/MABrands/heart-health-logo-trademark-cross.svg",
  },
  {
    image:
      "https://img.shop.com/Image/Images/11module/MABrands/mochatonix-us-logo.svg",
  },
  {
    image:
      "https://img.shop.com/Image/Images/11module/MABrands/mpc-us-logo.svg",
  },
  {
    image:
      "https://img.shop.com/Image/Images/11module/MABrands/nutriclean-us-logo.svg",
  },
  {
    image:
      "https://img.shop.com/Image/Images/11module/MABrands/vitamind-us-logo.svg",
  },
  {
    image:
      "https://img.shop.com/Image/Images/11module/MABrands/isotonix-custom-cocktail-us-logo.svg",
  },
  {
    image:
      "https://img.shop.com/Image/Images/11module/MABrands/nutri-physical-us-logo.svg",
  },
  {
    image:
      "https://img.shop.com/Image/Images/11module/MABrands/curcumin-extreme-usca-hk-sg-logo.svg",
  },
  {
    image:
      "https://img.shop.com/Image/Images/11module/MABrands/awake-us-logo.svg",
  },
  {
    image:
      "https://img.shop.com/Image/Images/11module/MABrands/opc3Chews_usa_32979_LogoTreatment_200x75.svg",
  },
  {
    image:
      "https://img.shop.com/Image/Images/11module/MABrands/Probiotics-10.svg",
  },
  {
    image:
      "https://img.shop.com/Image/Images/11module/MABrands/thymenol-logo.svg",
  },
  {
    image:
      "https://img.shop.com/Image/Images/11module/MABrands/cannabiquin-logo-tm.svg",
  },
  {
    image:
      "https://img.shop.com/Image/Images/11module/MABrands/cannabicool-logo-tm.svg",
  },
  {
    image:
      "https://img.shop.com/Image/Images/11module/MABrands/pure-collagen-logo.svg",
  },
];
function BrandCardPage() {
  return (
    <>
   <Navbar /> 
      
      <SimpleGrid templateColumns="repeat(4,1fr)" gap={"50px"} marginTop="50px" border={"10px #cbcdd4  solid"} >
            {imageData.map((el, i) =>  (
            <img src={el.image} alt={i}/>
          )
            
          )}
  
      </SimpleGrid>
      <Footer /> 
    </>
  );
}

export default BrandCardPage;
