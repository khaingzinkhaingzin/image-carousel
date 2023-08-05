import { useState } from "react";
import "./style.css"

import { image1, image2, image3, image4, image5 } from "../public/images"

const App = () => {
  const [current, setCurrent] = useState(0);
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
  ];

  function prevSlide() {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  }

  function nextSlide() {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  }

  return (
    <div>
      <h1>My Beautiful Image Carousel</h1>
      <div className="slider">
        {images.map((image, index) => 
          current === index && (<div 
            key={index}
            className="slide">
            <img src={image} alt="image" />
          </div>)
        )}

        <div 
          className="left-arrow"
          onClick={prevSlide}
        >
          &#10094;
        </div>
        <div 
          className="right-arrow"
          onClick={nextSlide}
        >
          &#10095;
        </div>
      </div>
    </div>
  )
}

export default App