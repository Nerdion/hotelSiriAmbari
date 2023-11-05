import { Image } from "antd";
import React, { useEffect } from "react";
import "../Styles/gallery.css";
import { Space } from "antd";

const GallaryView = () => (
  <div className="Galdiv" style={{ textAlign: "center" }}>
    <Image.PreviewGroup style={{ margin: "0 6rem" }} id="gallery">
      <span>
        <h1 style={{ color: "#363433", margin: "5rem 0" }}>GALLERY</h1>
      </span>
      <div className="Gallerywrapp">
        <Image
          className="Galimg"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          width={250}
          height={250}
          src="https://www.gentinghotel.co.uk/_next/image?url=https%3A%2F%2Fs3.eu-west-2.amazonaws.com%2Fstaticgh.gentinghotel.co.uk%2Fuploads%2Ffeed-cards%2F_750x750_crop_center-center_none%2FSuite_Nov2022_0008_Square.jpg&w=750&q=75"
        />
      </div>
      <div className="Gallerywrapp">
        <Image
          className="Galimg"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="100"
          height={250}
          data-aos-duration="1000"
          width={250}
          src="https://www.gentinghotel.co.uk/_next/image?url=https%3A%2F%2Fs3.eu-west-2.amazonaws.com%2Fstaticgh.gentinghotel.co.uk%2Fuploads%2Ffeed-cards%2F_750x750_crop_center-center_none%2FSuperiorRoom_Nov2022_0018_Square.jpg&w=750&q=75"
        />
      </div>
      <div className="Gallerywrapp">
        <Image
          className="Galimg"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="150"
          data-aos-duration="1000"
          width={250}
          height={250}
          src="https://www.gentinghotel.co.uk/_next/image?url=https%3A%2F%2Fs3.eu-west-2.amazonaws.com%2Fstaticgh.gentinghotel.co.uk%2Fuploads%2Fgallery%2F_750x750_crop_center-center_none%2FGH_hotel-accessible-room_0001_1920x800.jpg&w=750&q=75"
        />
      </div>
      <div className="Gallerywrapp">
        <Image
          className="Galimg"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="200"
          data-aos-duration="1000"
          width={250}
          height={250}
          src="https://img.freepik.com/free-photo/luxury-bedroom-suite-resort-high-rise-hotel-with-working-table_105762-1783.jpg?w=740&t=st=1685166660~exp=1685167260~hmac=387325967e1ebac11a5a2e00d3008b68bdf3faa5fd22c085196d1f7523cd07e7"
        />
      </div>
    </Image.PreviewGroup>
  </div>
);
export default GallaryView;
