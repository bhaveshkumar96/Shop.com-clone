import React from "react";

import CarouselSlider from "react-carousel-slider";

let data = [
  {
    des: "1",
    imgSrc: "https://i.imgur.com/d5aiXJP.jpg"
  },
  {
    des: "2",
    imgSrc: "https://i.imgur.com/pgCzueK.jpg"
  },
  {
    des: "3",
    imgSrc: "https://i.imgur.com/7nbAJ0C.jpg"
  },
  {
    des: "4",
    imgSrc: "https://i.imgur.com/L75otV6.jpg"
  },
  {
    des: "5",
    imgSrc: "https://i.imgur.com/qkPMr9D.jpg"
  }
];

/* Percantage to set height does not work well 
in prop sliderBoxStyle here because we could 
not init the height of parent element */

let sliderBoxStyle = {
  height: "250px"
  //, width: "200px"
  // , background: "tranparent"
};

function SliderBox(){
return  <CarouselSlider
slideItems={data}
sliderBoxStyle={sliderBoxStyle}
/>
}
export default SliderBox


