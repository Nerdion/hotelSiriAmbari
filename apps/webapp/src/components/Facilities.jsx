import React, { useEffect } from "react";
import { Col, Row } from "antd";
import Carousel from "react-bootstrap/Carousel";

import l2 from "../assets/1.jpeg";
import l1 from "../assets/2.jpg";
import l3 from "../assets/3.jpeg";

import l21 from "../assets/travellers1.jpg";
import l11 from "../assets/travellers2.jpg";
import l31 from "../assets/travellers3.jpg";

import g1 from "../assets/guid1.jpg";
import g2 from "../assets/guid2.jpg";

import c1 from "../assets/catering1.jpg";
import c2 from "../assets/catering2.jpg";

import e1 from "../assets/eventmanagement1.jpeg";
import e2 from "../assets/eventmanagement2.jpeg";
import e3 from "../assets/eventmanagement3.jpeg";
import e4 from "../assets/eventmanagement4.jpeg";

import "../Styles/navbar.css";
import GallaryView from "./GallaryView";
import AOS from "aos";
import "aos/dist/aos.css";

function Facilities() {
  useEffect(() => {
    const shouldEnableAOS = window.innerWidth >= 768;

    if (shouldEnableAOS) {
      AOS.init({
        // Configuration options
        duration: 800, // Duration of animation
        once: true, // Only animate once
        mirror: false, // Animate elements in different directions
      });
    }
  }, []);
  return (
    <div>
      <Row>
        <Col
          data-aos-offset="200"
          data-aos-delay="200"
          data-aos-duration="1000"
          span={9}
          style={{
            margin: "5rem 0rem 3rem 8rem",
            flex: "1",
            display: "flex",
            alignItems: "center",
          }}
          data-aos="fade-in"
          data-aos-id="super-duper"
        >
          {" "}
          <div>
            <h4 style={{ textAlign: "center" }}>PARKING</h4>
            <p>
              Indulge in generous parking space at Siri Ambari Hotel, where
              convenience meets comfort in our spacious parking facilities
            </p>
          </div>
        </Col>
        <Col span={10} style={{ margin: "5rem 6rem 3rem 1rem" }}>
          <Carousel fade>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={l1}
                id="slider-images"
                alt="Second slide"
                style={{ height: "30rem", width: "30rem" }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={l2}
                id="slider-images"
                alt="Third slide"
                style={{ height: "30rem" }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={l3}
                id="slider-images"
                alt="Third slide"
                style={{ height: "30rem" }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                id="slider-images"
                src={l2}
                alt="First slide"
                style={{ height: "30rem" }}
              />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      <Row>
        <Col
          span={9}
          style={{
            margin: "5rem 0rem 3rem 8rem",
            flex: "1",
            display: "flex",
            alignItems: "center",
          }}
        >
          {" "}
          <div>
            <h4 style={{ textAlign: "center" }}>TRAVELLERS</h4>
            <p>
              Experience a seamless journey at Siri Ambari Hotel, where we go
              above and beyond to cater to our valued tourists with exclusive
              travel arrangements and services.
            </p>
          </div>
        </Col>
        <Col span={10} style={{ margin: "5rem 6rem 3rem 1rem" }}>
          <Carousel fade>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={l11}
                id="slider-images"
                alt="Second slide"
                style={{ height: "30rem", width: "30rem" }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={l21}
                id="slider-images"
                alt="Third slide"
                style={{ height: "30rem" }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={l31}
                id="slider-images"
                alt="Third slide"
                style={{ height: "30rem" }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                id="slider-images"
                src={l21}
                alt="First slide"
                style={{ height: "30rem" }}
              />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      <Row>
        <Col
          span={9}
          style={{
            margin: "5rem 0rem 3rem 8rem",
            flex: "1",
            display: "flex",
            alignItems: "center",
          }}
        >
          {" "}
          <div>
            <h4 style={{ textAlign: "center" }}>SERVICE</h4>
            <p>
              Discover the epitome of luxury and convenience at Siri Ambari
              Hotel, where we pamper our guests with impeccable housekeeping
              service, convenient laundry facilities, complimentary breakfast
              with every booking, and the comfort of spacious living rooms
            </p>
          </div>
        </Col>
        <Col span={10} style={{ margin: "5rem 6rem 3rem 1rem" }}>
          <Carousel fade>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={l1}
                id="slider-images"
                alt="Second slide"
                style={{ height: "30rem", width: "30rem" }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={l2}
                id="slider-images"
                alt="Third slide"
                style={{ height: "30rem" }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={l3}
                id="slider-images"
                alt="Third slide"
                style={{ height: "30rem" }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                id="slider-images"
                src={l2}
                alt="First slide"
                style={{ height: "30rem" }}
              />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      <Row>
        <Col
          data-aos-offset="200"
          data-aos-delay="200"
          data-aos-duration="1000"
          span={9}
          style={{
            margin: "5rem 0rem 3rem 8rem",
            flex: "1",
            display: "flex",
            alignItems: "center",
          }}
          data-aos="fade-in"
          data-aos-id="super-duper"
        >
          {" "}
          <div>
            <h4 style={{ textAlign: "center" }}>GUID</h4>
            <p>
              Unlock the secrets of our captivating destination with Siri Ambari
              Hotel's expert local guides, who ensure you make the most of your
              time by effortlessly exploring a multitude of tourist attractions.
              Immerse yourself in the wonders of our city, knowing you'll be
              comfortably returned to our hotel at the end of your unforgettable
              adventure
            </p>
          </div>
        </Col>
        <Col span={10} style={{ margin: "5rem 6rem 3rem 1rem" }}>
          <Carousel fade>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={g1}
                id="slider-images"
                alt="Second slide"
                style={{ height: "30rem", width: "30rem" }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={g2}
                id="slider-images"
                alt="Third slide"
                style={{ height: "30rem" }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={g1}
                id="slider-images"
                alt="Third slide"
                style={{ height: "30rem" }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                id="slider-images"
                src={g2}
                alt="First slide"
                style={{ height: "30rem" }}
              />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      <Row>
        <Col
          data-aos-offset="200"
          data-aos-delay="200"
          data-aos-duration="1000"
          span={9}
          style={{
            margin: "5rem 0rem 3rem 8rem",
            flex: "1",
            display: "flex",
            alignItems: "center",
          }}
          data-aos="fade-in"
          data-aos-id="super-duper"
        >
          {" "}
          <div>
            <h4 style={{ textAlign: "center" }}>EVENT MANAGEMENT</h4>
            <p>
              Turn your dream event into a flawless reality at Siri Ambari
              Hotel, where our dedicated team offers impeccable event management
              services. From meticulous planning to executing every detail to
              perfection, we strive to exceed your expectations and create an
              unforgettable experience that perfectly aligns with your vision.
            </p>
          </div>
        </Col>
        <Col span={10} style={{ margin: "5rem 6rem 3rem 1rem" }}>
          <Carousel fade>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={e1}
                id="slider-images"
                alt="Second slide"
                style={{ height: "30rem", width: "30rem" }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={e2}
                id="slider-images"
                alt="Third slide"
                style={{ height: "30rem" }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={e3}
                id="slider-images"
                alt="Third slide"
                style={{ height: "30rem" }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                id="slider-images"
                src={e4}
                alt="First slide"
                style={{ height: "30rem" }}
              />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      <Row>
        <Col
          data-aos-offset="200"
          data-aos-delay="200"
          data-aos-duration="1000"
          span={9}
          style={{
            margin: "5rem 0rem 3rem 8rem",
            flex: "1",
            display: "flex",
            alignItems: "center",
          }}
          data-aos="fade-in"
          data-aos-id="super-duper"
        >
          {" "}
          <div>
            <h4 style={{ textAlign: "center" }}>CATERING</h4>
            <p>
              Indulge in exquisite culinary delights with Siri Ambari Hotel's
              exceptional catering services. Whether it's a grand party, a
              wedding celebration, a productive meeting, a delightful team
              lunch, or a professional conference, our talented culinary team is
              dedicated to curating delectable menus that perfectly complement
              your event. Experience the epitome of gastronomic excellence and
              elevate your gatherings to new heights with Siri Ambari's
              unparalleled catering expertise.
            </p>
          </div>
        </Col>
        <Col span={10} style={{ margin: "5rem 6rem 3rem 1rem" }}>
          <Carousel fade>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={c1}
                id="slider-images"
                alt="Second slide"
                style={{ height: "30rem", width: "30rem" }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={c2}
                id="slider-images"
                alt="Third slide"
                style={{ height: "30rem" }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={c1}
                id="slider-images"
                alt="Third slide"
                style={{ height: "30rem" }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                id="slider-images"
                src={c2}
                alt="First slide"
                style={{ height: "30rem" }}
              />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      <Row>
        <Col
          data-aos-offset="200"
          data-aos-delay="200"
          data-aos-duration="1000"
          span={9}
          style={{
            margin: "5rem 0rem 3rem 8rem",
            flex: "1",
            display: "flex",
            alignItems: "center",
          }}
          data-aos="fade-in"
          data-aos-id="super-duper"
        >
          {" "}
          <div>
            <h4 style={{ textAlign: "center" }}>CONNECTIVITY</h4>
            <p>
              Experience unmatched convenience and connectivity by choosing Siri
              Ambari Hotel as your ideal destination. Located in the heart of
              the city, our hotel offers proximity to ATMs, the bustling city
              center, and easy access to the main Bangalore-Mysore Highway. With
              excellent connectivity to bus stops and nearby hospitals, your
              comfort and convenience are our top priorities. Enjoy the added
              benefit of nearby cafes, while relishing a secure and private
              stay, thanks to our exceptional security measures. Discover a
              perfect blend of accessibility, tranquility, and convenience at
              Siri Ambari Hotel.
            </p>
          </div>
        </Col>
        <Col span={10} style={{ margin: "5rem 6rem 3rem 1rem" }}>
          <Carousel fade>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={l1}
                id="slider-images"
                alt="Second slide"
                style={{ height: "30rem", width: "30rem" }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={l2}
                id="slider-images"
                alt="Third slide"
                style={{ height: "30rem" }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={l3}
                id="slider-images"
                alt="Third slide"
                style={{ height: "30rem" }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                id="slider-images"
                src={l2}
                alt="First slide"
                style={{ height: "30rem" }}
              />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      <GallaryView />
    </div>
  );
}

export default Facilities;
