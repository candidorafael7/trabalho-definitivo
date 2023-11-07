import Carousel from "react-bootstrap/Carousel";
import img1 from "./imagens/img1.png";
import img2 from "./imagens/img2.png";
import img3 from "./imagens/img3.png";
import "./banner.css";

function Banner() {
  return (
    <Carousel>
      <Carousel.Item>
        <a href="/produtos"><img className="d-block w-100 img-fluid img-resize" src={img1} alt="First slide"/></a>
      </Carousel.Item>
      <Carousel.Item>
        <a href="/produtos"><img className="d-block w-100 img-resize " src={img2} alt="Second slide"/></a>
      </Carousel.Item>
      <Carousel.Item>
        <a href="/produtos"><img className="d-block w-100 img-resize" src={img3} alt="Third slide"/></a>
      </Carousel.Item>
    </Carousel>
  );
}

export default Banner;
