import React, { Component } from "react";
import MySwiper from "../MySwiper";
import "./style.css";
class ImgGird extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgLst: [
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
      ],
      newImgLst: [],
      isModal: false
    };
  }

  componentDidMount = () => {};

  showModal = index => {
    const { isModal, imgLst } = this.state;
    let newImgLst = [];
    if (index !== 0) {
      // 不是第一张
      newImgLst = imgLst.slice(index).concat(imgLst.slice(0, index));
    } else {
      newImgLst = imgLst;
    }
    console.log(newImgLst);
    this.setState({
      isModal: !isModal,
      curImg: index,
      newImgLst
    });
  };
  showWholePic = index => {
    console.log("在看第=====" + index + "=====张");
  };
  render() {
    const { imgLst, isModal, curImg, newImgLst } = this.state;
    return (
      <div className="girdWrapper">
        <ul className="imgLst">
          {imgLst &&
            imgLst.map((item, index) => (
              <li key={index}>
                <img
                  className="mImg"
                  alt=""
                  src={item.src}
                  //   onClick={() => this.showWholePic(index)}
                  onClick={() => this.showModal(index)}
                />
              </li>
            ))}
        </ul>
        {isModal ? (
          <div className="modal">
            <MySwiper imgLst={newImgLst}></MySwiper>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default ImgGird;
