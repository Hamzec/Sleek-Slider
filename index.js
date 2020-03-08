import React from "react";
import Slider from "react-slick";

class Sliderr extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className=" row mt-3 border w-100 h-100">
        <Slider {...settings}>
          <div>
            <h3></h3>
            <img src={img1} className="w-100 p-3" />
          </div>
          <div>
            <h3>2</h3>
            <img src={img2} className="w-100 p-3" />
          </div>
          <div>
            <h3>3</h3>
            <img src={img3} className="w-100 p-3" />
          </div>
          <div>
            <h3>4</h3>
            <img src={img4} className="w-100 p-3" />
          </div>
          <div>
            <h3>5</h3>
            <img src={img5} className="w-100 p-3" />
          </div>
        </Slider>
        <button
          className="btn btn-primary mt-5 w-100"
          data-toggle="collapse"
          data-target="#yes"
        >
          Generate Images
        </button>
      </div>
    );
  }
}

export default Sliderr;
