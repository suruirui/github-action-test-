import React, { Component } from "react";
import Gallery from "react-grid-gallery";

const IMAGES = [
  {
    src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
    thumbnail:
      "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    // //isSelected: true,
    caption: "After Rain (Jeshu John - designerspics.com)"
  },
  {
    src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
    thumbnail:
      "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    tags: [
      { value: "Ocean", title: "Ocean" },
      { value: "People", title: "People" }
    ],
    caption: "Boats (Jeshu John - designerspics.com)"
  },
  {
    src:
      "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=585669240,1860013738&fm=26&gp=0.jpg",
    thumbnail:
      "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212
  },
  {
    src:
      "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=585669240,1860013738&fm=26&gp=0.jpg",
    thumbnail:
      "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=585669240,1860013738&fm=26&gp=0.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212
  },
  {
    src:
      "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1317858725,1531846503&fm=26&gp=0.jpg",
    thumbnail:
      "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1317858725,1531846503&fm=26&gp=0.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212
  },
  {
    src:
      "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=350409649,190622771&fm=26&gp=0.jpg",
    thumbnail:
      "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=350409649,190622771&fm=26&gp=0.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212
  },
  {
    src:
      "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2305968831,2980855138&fm=26&gp=0.jpg",
    thumbnail:
      "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2305968831,2980855138&fm=26&gp=0.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212
  },
  {
    src:
      "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1522618237,1119676793&fm=26&gp=0.jpg",
    thumbnail:
      "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1522618237,1119676793&fm=26&gp=0.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212
  },
  {
    src: "https://c6.staticflickr.com/9/8593/28357129133_f04c73bf1e_b.jpg",
    thumbnail:
      "https://c6.staticflickr.com/9/8593/28357129133_f04c73bf1e_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 179,
    tags: [
      { value: "Nature", title: "Nature" },
      { value: "Fauna", title: "Fauna" }
    ],
    caption: "Untitled (Jan Vasek - jeshoots.com)"
  },
  {
    src: "https://c6.staticflickr.com/9/8893/28897116141_641b88e342_b.jpg",
    thumbnail:
      "https://c6.staticflickr.com/9/8893/28897116141_641b88e342_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 215,
    tags: [{ value: "People", title: "People" }],
    caption: "Untitled (moveast.me)"
  },
  {
    src: "https://c1.staticflickr.com/9/8056/28354485944_148d6a5fc1_b.jpg",
    thumbnail:
      "https://c1.staticflickr.com/9/8056/28354485944_148d6a5fc1_n.jpg",
    thumbnailWidth: 257,
    thumbnailHeight: 320,
    caption: "A photo by 贝莉儿 NG. (unsplash.com)"
  },
  {
    src: "https://c7.staticflickr.com/9/8824/28868764222_19f3b30773_b.jpg",
    thumbnail:
      "https://c7.staticflickr.com/9/8824/28868764222_19f3b30773_n.jpg",
    thumbnailWidth: 226,
    thumbnailHeight: 320,
    caption: "A photo by Matthew Wiebe. (unsplash.com)"
  },
  {
    src: "https://c5.staticflickr.com/9/8768/28941110956_b05ab588c1_b.jpg",
    thumbnail:
      "https://c5.staticflickr.com/9/8768/28941110956_b05ab588c1_n.jpg",
    thumbnailWidth: 240,
    thumbnailHeight: 320,
    //isSelected: true,
    caption: "8H (gratisography.com)"
  },
  {
    src: "https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_b.jpg",
    thumbnail:
      "https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 190,
    caption: "286H (gratisography.com)"
  },
  {
    src: "https://c7.staticflickr.com/9/8569/28941134686_d57273d933_b.jpg",
    thumbnail:
      "https://c7.staticflickr.com/9/8569/28941134686_d57273d933_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 148,
    //isSelected: true,
    caption: "315H (gratisography.com)"
  },
  {
    src: "https://c6.staticflickr.com/9/8342/28897193381_800db6419e_b.jpg",
    thumbnail:
      "https://c6.staticflickr.com/9/8342/28897193381_800db6419e_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 213,
    caption: "201H (gratisography.com)"
  },
  {
    src: "https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_b.jpg",
    thumbnail:
      "https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_n.jpg",
    thumbnailWidth: 248,
    thumbnailHeight: 320,
    caption: "Big Ben (Tom Eversley - isorepublic.com)"
  },
  {
    src: "https://c7.staticflickr.com/9/8785/28687743710_3580fcb5f0_b.jpg",
    thumbnail:
      "https://c7.staticflickr.com/9/8785/28687743710_3580fcb5f0_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 113,
    caption: "Red Zone - Paris (Tom Eversley - isorepublic.com)"
  },
  {
    src: "https://c6.staticflickr.com/9/8520/28357073053_cafcb3da6f_b.jpg",
    thumbnail:
      "https://c6.staticflickr.com/9/8520/28357073053_cafcb3da6f_n.jpg",
    thumbnailWidth: 313,
    thumbnailHeight: 320,
    //isSelected: true,
    caption: "Wood Glass (Tom Eversley - isorepublic.com)"
  },
  {
    src: "https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_b.jpg",
    thumbnail:
      "https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 213,
    caption: "Flower Interior Macro (Tom Eversley - isorepublic.com)"
  }
];
class MarkUpGallery extends Component {
  render() {
    return (
      <div style={{ width: "100%", height: "100%", backgroundColor: "#000" }}>
        <Gallery images={IMAGES} />
      </div>
    );
  }
}
export default MarkUpGallery;
