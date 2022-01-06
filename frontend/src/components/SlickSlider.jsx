import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Card } from "react-bootstrap";

const SlickSlider = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        <div>
          <Card>
            <Card.Img variant="top" src="http://placehold.jp/250x300.png" />
            <Card.Body>
              <Card.Text className="text-center">Card Title1</Card.Text>
              {/* <Card.Text>Himel Bikon 2010</Card.Text> */}
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card>
            <Card.Img variant="top" src="http://placehold.jp/250x300.png" />
            <Card.Body>
              <Card.Text>Card Title</Card.Text>
              {/* <Card.Text>Himel Bikon 2010</Card.Text> */}
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card>
            <Card.Img variant="top" src="http://placehold.jp/250x300.png" />
            <Card.Body>
              <Card.Text>Card Title</Card.Text>
              {/* <Card.Text>Himel Bikon 2010</Card.Text> */}
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card>
            <Card.Img variant="top" src="http://placehold.jp/250x300.png" />
            <Card.Body>
              <Card.Text>Card Title</Card.Text>
              {/* <Card.Text>Himel Bikon 2010</Card.Text> */}
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card>
            <Card.Img variant="top" src="http://placehold.jp/250x300.png" />
            <Card.Body>
              <Card.Text>Card Title</Card.Text>
              {/* <Card.Text>Himel Bikon 2010</Card.Text> */}
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card>
            <Card.Img variant="top" src="http://placehold.jp/250x300.png" />
            <Card.Body>
              <Card.Text>Card Title</Card.Text>
              {/* <Card.Text>Himel Bikon 2010</Card.Text> */}
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
        </div>
      </Slider>
    </div>
  );
};

export default SlickSlider;
