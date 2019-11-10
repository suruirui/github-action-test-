import React, { Component } from "react";
import Swiper from "swiper/js/swiper.min.js";
import "swiper/css/swiper.min.css";
import "./style.css";
class MySwiper extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    var galleryThumbs = new Swiper(".gallery-thumbs", {
      spaceBetween: 10,
      slidesPerView: 4,
      loop: true,
      freeMode: true,
      loopedSlides: 5, //looped slides should be the same
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      observer: true
    });
    var galleryTop = new Swiper(".gallery-top", {
      spaceBetween: 10,
      loop: true,
      loopedSlides: 5, //looped slides should be the same
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      observer: true,
      thumbs: {
        swiper: galleryThumbs
      }
    });
  };
  render() {
    const { imgLst } = this.props;
    return (
      <div className="mSwipperWrapper">
        <div className="swiper-container gallery-top">
          <div className="swiper-wrapper">
            {imgLst &&
              imgLst.map((item, index) => (
                <div className="swiper-slide gallery-top-slide" key={index}>
                  <img className="mImg" alt="" src={item.src} />
                </div>
              ))}
          </div>
          <div className="swiper-pagination"></div>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </div>
        {/* 缩略图 */}
        <div className="swiper-container gallery-thumbs">
          <div className="swiper-wrapper">
            <div className="swiper-wrapper">
              {imgLst &&
                imgLst.map((item, index) => (
                  <div
                    className="swiper-slide gallery-thumbs-slide"
                    key={index}
                  >
                    <img className="mImg" alt="" src={item.src} />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MySwiper;
