import { Image } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// If you want to use your own Selectors look up the Advancaed Story book examples
const ImageSlider = ({ slides }) => {
  return (
    <Carousel infiniteLoop={true}  set showThumbs={false} >
      {slides.map((slide,i) => {
        return <Image src={slide.image} height="auto" width="800px" borderColor={"black"} />;
      })}
    </Carousel>
  );
};

export default ImageSlider;
