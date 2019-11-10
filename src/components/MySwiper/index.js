import React, { Component } from "react";
import Swiper from "swiper/js/swiper.min.js";
import "swiper/css/swiper.min.css";
import "./style.css";
class MySwiper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sImgLst: [
        {
          src:
            "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3690492852,467272305&fm=26&gp=0.jpg"
        },
        {
          src:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3637245786,1201327908&fm=26&gp=0.jpg"
        },
        {
          src:
            "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1684254966,82635217&fm=26&gp=0.jpg"
        },
        {
          src:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3136075639,3338708347&fm=26&gp=0.jpg"
        },
        {
          src:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2530356297,1854337845&fm=26&gp=0.jpg"
        },
        {
          src:
            "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1514848387,1509766806&fm=26&gp=0.jpg"
        },
        {
          src:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3637245786,1201327908&fm=26&gp=0.jpg"
        },
        {
          src:
            "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4033919967,4068691540&fm=26&gp=0.jpg"
        },
        {
          src:
            "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1685820617,3891463760&fm=26&gp=0.jpg"
        },
        {
          src:
            "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4129492380,3609907971&fm=26&gp=0.jpg"
        },
        {
          src:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2530356297,1854337845&fm=26&gp=0.jpg"
        },
        {
          src:
            "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1514848387,1509766806&fm=26&gp=0.jpg"
        },
        {
          src:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3637245786,1201327908&fm=26&gp=0.jpg"
        },
        {
          src:
            "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4033919967,4068691540&fm=26&gp=0.jpg"
        },
        {
          src:
            "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1685820617,3891463760&fm=26&gp=0.jpg"
        },
        {
          src:
            "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4129492380,3609907971&fm=26&gp=0.jpg"
        },
        {
          src:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3637245786,1201327908&fm=26&gp=0.jpg"
        },
        {
          src:
            "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4033919967,4068691540&fm=26&gp=0.jpg"
        }
      ]
    };
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
