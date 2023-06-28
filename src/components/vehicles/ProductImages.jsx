import { useState } from "react";
import Wrapper from "../../styleWrappers/styleProductImages";
import PropTypes from "prop-types";

const ProductImages = ({ images }) => {
  const [main, setMain] = useState(images[0]);

  return (
    <Wrapper>
      <div className="gallery">
        <img className="main" src={main} alt="image" />
        <div className="mini-gallery">
          {images.map((image, index) => {
            return (
              <img
                key={index}
                src={image}
                alt="galley1"
                onClick={() => setMain(images[index])}
                className={image === main ? "active" : ""}
              />
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

ProductImages.propTypes = {
  images: PropTypes.string.isRequired,
};

export default ProductImages;
