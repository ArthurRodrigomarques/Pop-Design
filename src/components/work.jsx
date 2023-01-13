import React from 'react'
import './work.css'
import $ from 'jquery';
// imgs
import ImgUm from '../img/imgum.jpg'
import Img2 from '../img/img2.jpg'
import Img3 from '../img/img3.jpg'
import Img4 from '../img/img4.jpg'
import Img5 from '../img/img5.jpg'
import Img6 from '../img/img6.jpg'






const work = () => {
  return (
    <div className='div-work'>
        <h1>Our Work</h1>
        <p>Aliquam interdum, nisl sed faucibus tempor, massa velit laoreet ipsum, et faucibus sapien magna at enim. Suspendisse a dictum tortor, vel rhoncus libero. Integer at lacus velit. Nullam dapibus venenatis placerat.</p>


        <div class="galeria">
            <div class="center">
                <div class="container-slider2">
                            <div class="container-slider-single2">
                                <img src={ImgUm} />  
                            </div>
                            <div class="container-slider-single2">
                                <img src={Img2} />  
                            </div>
                            <div class="container-slider-single2">
                                <img src={Img3} />  
                            </div>
                            <div class="container-slider-single2">
                                <img src={Img4} />  
                            </div>
                            <div class="container-slider-single2">
                                <img src={Img5} />  
                            </div>
                            <div class="container-slider-single2">
                                <img src={Img6} />  
                            </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default work