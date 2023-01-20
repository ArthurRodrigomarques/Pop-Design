import React from 'react'
import './work.css'
import { Component } from "react";
import Slider from "react-slick";
import{AiFillCloseCircle} from 'react-icons/ai'
// imgs
import Img1 from '../img/imgum.jpg'
import Img2 from '../img/img2.jpg'
import Img3 from '../img/img3.jpg'
import Img4 from '../img/img4.jpg'
import Img5 from '../img/img5.jpg'
import Img6 from '../img/img6.jpg'



export default class MultipleItems extends Component {
  render(onClose) {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };

    return (
      <div className='div-work '>
        <h1>div-work  </h1>
        <AiFillCloseCircle onClick={onClose} size={28} className='close'/>
        <p>Aliquam interdum, nisl sed faucibus tempor, massa velit laoreet ipsum, et faucibus sapien magna at enim. Suspendisse a dictum tortor, vel rhoncus libero. Integer at lacus velit. Nullam dapibus venenatis placerat.</p>


        <Slider {...settings}>
          <div>
            <img src={Img1} />
          </div>
          <div>
            <img src={Img2} />
          </div>
          <div>
            <img src={Img3} />
          </div>
          <div>
            <img src={Img4} />
          </div>
          <div>
            <img src={Img5} />
          </div>
          <div>
            <img src={Img6} />
          </div>
        </Slider>
      </div>
    );
  }
}