import Carousel from "react-bootstrap/Carousel";
import introimg from "../utils/caro.jpg";
import introimg1 from "../utils/caro2.jpg";
import introimg2 from "../utils/caro3.jpeg";
import "../css/mycarousel.css";
import { useNavigate } from "react-router-dom";

const MyCarousel = () => {
  const navigate = useNavigate();
  return (
    <div className="mycarousel">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src={introimg}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>
              Cooking Never Got Any <span className="green-span">Easier</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
              fugiat.
            </p>
            <a href="#newsletter">
              <button className="button-18">Get Cook Book</button>
            </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src={introimg1}
            alt="First slide"
          />

          <Carousel.Caption>
            <h3>
              Learn the<span className="green-span"> Art</span> of cooking here
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
              fugiat.
            </p>
            {/* <button className="button-18">Get Cook Book</button> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src={introimg2}
            alt="First slide"
          />

          <Carousel.Caption>
            <h3>
              <span className="green-span"> Elevate</span> your cooking skills
              here
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
              fugiat.
            </p>
            <button
              className="button-18"
              onClick={() => navigate("/searched1/default")}
            >
              Receipe Page
            </button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default MyCarousel;
