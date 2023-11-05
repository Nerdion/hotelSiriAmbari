import React from "react";
import "../Styles/offers.css";
import lux from "../assets/acc3.jpg";
import { Col, Row } from "antd";
import Carousel from "react-bootstrap/Carousel";

import l2 from "../assets/backwater.jpeg";
import l1 from "../assets/Belurubane.png";
import l3 from "../assets/chiklihole.jpg";
import l4 from "../assets/dubare.jpg";
import l5 from "../assets/goldentemple2.jpg";
import l6 from "../assets/harangidam.jpg";
import l7 from "../assets/nisargadhama.jpg";
import "../Styles/nearByPlaces.css";
import GallaryView from "./GallaryView";
import SimpleMap from "./GoogleMap";

const DemoBox = (props) => (
  <p className={`height-${props.value}`}>{props.children}</p>
);
const NearByPlaces = () => (
  <div>
    <div className="placesnearby">
      <h1 style={{ color: "#debe64", marginBottom: "1rem", fontWeight: "600" }}>
        PLACES NEAR BY
      </h1>
      <p style={{ color: "#363433", fontWeight: "500" }}>
        Welcome to Siri Ambari, your oasis in the heart of Coorg's charming town
        of Kushalnagar! Nestled amidst the breathtaking beauty of this region,
        our hotel offers a perfect blend of comfort, convenience, and natural
        splendor.
        <p>
          Situated in close proximity to major attractions and surrounded by the
          serene ambiance of Coorg, Siri Ambari is the ideal base for exploring
          the wonders of this picturesque destination. Whether you're a nature
          enthusiast, an adventure seeker, or a history buff, our hotel's
          strategic location ensures that you're never far away from the
          treasures Coorg has to offer.
        </p>
        <p>
          Convenience is at your fingertips with an ATM located nearby, ensuring
          hassle-free access to cash whenever you need it. And when it comes to
          satisfying your taste buds, look no further than our delightful café.
          Indulge in a culinary journey of flavors as you savor delicious dishes
          prepared with care and passion. The café's ambience is both cozy and
          inviting, making it the perfect spot to relax and unwind after a day
          of exploration.
        </p>
        <p>
          The seamless connectivity provided by our location, connected to the
          Bangalore-Mysore Road, makes reaching Siri Ambari a breeze. Whether
          you're arriving from Bangalore, Mysore, or any other nearby city, you
          can expect a smooth and hassle-free journey to our hotel.
        </p>
        <p>
          At Siri Ambari, we understand that convenience and accessibility are
          key factors in creating a memorable stay. That's why we've curated a
          list of nearby tourist attractions, ensuring that you make the most of
          your time in Coorg. Immerse yourself in the awe-inspiring beauty of
          Abbey Falls, experience the tranquility of the Golden Temple
          (Namdroling Monastery), or embark on a thrilling trek to the
          mesmerizing Tadiandamol Peak. With our hotel as your starting point,
          these incredible experiences are just a stone's throw away.
        </p>
        <p>
          We take pride in providing our guests with a comfortable and memorable
          stay. From our well-appointed rooms to our warm and attentive staff,
          every aspect of your experience at Siri Ambari is designed to exceed
          your expectations.
        </p>
        <p>
          Book your stay with us today and unlock the treasures of Coorg from
          the heart of Kushalnagar. We can't wait to welcome you to Siri Ambari,
          where unforgettable memories are made.
        </p>
      </p>
    </div>
    <Row>
      <Col span={16} className="nearby-col">
        <Carousel fade className="Carousel">
          <Carousel.Item className="Carousel">
            <div className="wrapper2" style={{ margin: "0" }}>
              <div
                className="dashed-box2 "
                data-aos="fade-right"
                data-aos-offset="200"
                data-aos-delay="200"
                data-aos-duration="1000"
              >
                <img alt="age3" id="luxImg2" src={l1} />
              </div>
              <div
                className="gold-box2"
                data-aos="fade-left"
                data-aos-offset="200"
                data-aos-delay="200"
                data-aos-duration="1000"
              >
                <h3>BELURBANE</h3>
                <p style={{ textAlign: "center", margin: "1rem" }}>
                  It is the best place find on the way from somwarpet to
                  kushalnagar or mysore road it is called as Belur Bane By
                  localites i am seeing this place from my childhood there is no
                  maintanance for grass or other things it is what kept it
                  naturally and the green grass you will find same as the
                  picture it is the must visit place if your in cooorg
                </p>
                <h3 style={{ textAlign: "center", margin: "1rem" }}>10 KM</h3>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item className="Carousel">
            <div className="wrapper2" style={{ margin: "0" }}>
              <div
                className="dashed-box2 "
                data-aos="fade-right"
                data-aos-offset="200"
                data-aos-delay="200"
                data-aos-duration="1000"
              >
                <img alt="age3" id="luxImg2" src={l2} />
              </div>
              <div
                className="gold-box2"
                data-aos="fade-left"
                data-aos-offset="200"
                data-aos-delay="200"
                data-aos-duration="1000"
              >
                <h3>HARANGI BACKWATER</h3>
                <p style={{ textAlign: "center", margin: "1rem" }}>
                  Harangi Backwaters is a man-made reservoir formed by the
                  Harangi Dam on the river Harangi. Surrounded by verdant hills
                  and lush greenery, this pristine water body offers a
                  breathtaking sight that will leave you mesmerized. The calm
                  and crystal-clear waters reflecting the azure sky create a
                  soothing and serene atmosphere, making it a perfect retreat
                  for nature lovers and peace seekers.
                </p>
                <h3 style={{ textAlign: "center", margin: "1rem" }}>4 KM</h3>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item className="Carousel">
            <div className="wrapper2" style={{ margin: "0" }}>
              <div
                className="dashed-box2 "
                data-aos="fade-right"
                data-aos-offset="200"
                data-aos-delay="200"
                data-aos-duration="1000"
              >
                <img alt="age3" id="luxImg2" src={l3} />
              </div>
              <div
                className="gold-box2"
                data-aos="fade-left"
                data-aos-offset="200"
                data-aos-delay="200"
                data-aos-duration="1000"
              >
                <h3>CHIKKLIHOLE</h3>
                <p style={{ textAlign: "center", margin: "1rem" }}>
                  Discover the breathtaking beauty of Chikklihole, an idyllic
                  haven nestled amidst the lush greenery of Karnataka. With its
                  pristine landscapes, serene atmosphere, and captivating charm,
                  Chikklihole is a paradise for nature enthusiasts and a perfect
                  getaway for those seeking respite from the hustle and bustle
                  of city life.
                </p>
                <h3 style={{ textAlign: "center", margin: "1rem" }}>4 KM</h3>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item className="Carousel">
            <div className="wrapper2" style={{ margin: "0" }}>
              <div
                className="dashed-box2 "
                data-aos="fade-right"
                data-aos-offset="200"
                data-aos-delay="200"
                data-aos-duration="1000"
              >
                <img alt="age3" id="luxImg2" src={l4} />
              </div>
              <div
                className="gold-box2"
                data-aos="fade-left"
                data-aos-offset="200"
                data-aos-delay="200"
                data-aos-duration="1000"
              >
                <h3>DUBARE</h3>
                <p style={{ textAlign: "center", margin: "1rem" }}>
                  Dubare is renowned for its famous Elephant Camp, where you can
                  witness the majestic elephants in their natural habitat.
                  Interact with these gentle giants as you participate in
                  activities such as feeding, bathing, and even taking an
                  elephant ride through the lush green forests. This unique
                  experience allows you to form a deep connection with these
                  incredible creatures and gain insights into their conservation
                  and welfare.
                </p>
                <h3 style={{ textAlign: "center", margin: "1rem" }}>5.1 KM</h3>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item className="Carousel">
            <div className="wrapper2" style={{ margin: "0" }}>
              <div
                className="dashed-box2 "
                data-aos="fade-right"
                data-aos-offset="200"
                data-aos-delay="200"
                data-aos-duration="1000"
              >
                <img alt="age3" id="luxImg2" src={l5} />
              </div>
              <div
                className="gold-box2"
                data-aos="fade-left"
                data-aos-offset="200"
                data-aos-delay="200"
                data-aos-duration="1000"
              >
                <h3>GOLDEN TEMPLE</h3>
                <p style={{ textAlign: "center", margin: "1rem" }}>
                  The Golden Temple is one of the largest Tibetan Buddhist
                  monasteries in India, serving as a sanctuary for monks and a
                  place of pilgrimage for devotees. The moment you enter, you'll
                  be enveloped by a sense of serenity, enhanced by the aroma of
                  incense and the soothing sound of chanting prayers. The
                  interior of the temple is a visual feast, adorned with ornate
                  frescoes, intricate murals, and statues of revered Buddhist
                  deities.
                </p>
                <h3 style={{ textAlign: "center", margin: "1rem" }}>4.1 KM</h3>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item className="Carousel">
            <div className="wrapper2" style={{ margin: "0" }}>
              <div
                className="dashed-box2 "
                data-aos="fade-right"
                data-aos-offset="200"
                data-aos-delay="200"
                data-aos-duration="1000"
              >
                <img alt="age3" id="luxImg2" src={l6} />
              </div>
              <div
                className="gold-box2"
                data-aos="fade-left"
                data-aos-offset="200"
                data-aos-delay="200"
                data-aos-duration="1000"
              >
                <h3>HARANGI RESERVOIRE</h3>
                <p style={{ textAlign: "center", margin: "1rem" }}>
                  Harangi Dam is not just a feat of engineering; it is a
                  lifeline for the region, serving multiple purposes. The
                  primary function of the dam is to control and regulate the
                  flow of the Harangi River, ensuring a consistent water supply
                  for irrigation, agriculture, and drinking purposes. This
                  invaluable resource has played a significant role in the
                  socio-economic development of the surrounding areas.
                </p>
                <h3 style={{ textAlign: "center", margin: "1rem" }}>5.4 KM</h3>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item className="Carousel">
            <div className="wrapper2" style={{ margin: "0" }}>
              <div
                className="dashed-box2 "
                data-aos="fade-right"
                data-aos-offset="200"
                data-aos-delay="200"
                data-aos-duration="1000"
              >
                <img alt="age3" id="luxImg2" src={l7} />
              </div>
              <div
                className="gold-box2"
                data-aos="fade-left"
                data-aos-offset="200"
                data-aos-delay="200"
                data-aos-duration="1000"
              >
                <h3>KAVERI NISARGADHAMA</h3>
                <p style={{ textAlign: "center", margin: "1rem" }}>
                  Kaveri Nisargadhama, a blissful retreat nestled amidst the
                  enchanting landscapes of Coorg, Karnataka. Immerse yourself in
                  the serenity of this natural paradise, where the gentle flow
                  of the Kaveri River, lush bamboo groves, and diverse flora and
                  fauna create a haven of tranquility and beauty.
                </p>
                <h3 style={{ textAlign: "center", margin: "1rem" }}>4.5 KM</h3>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </Col>
    </Row>
    <SimpleMap />
  </div>
);
export default NearByPlaces;
