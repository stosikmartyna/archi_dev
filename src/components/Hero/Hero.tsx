import React, { useState } from 'react';
import img_1 from '../../img/img_1.jpg';
import img_2 from '../../img/img_2.jpg';
import img_3 from '../../img/img_3.jpg';
import img_4 from '../../img/img_4.jpg';
import img_5 from '../../img/img_5.jpg';
import Icon from 'react-icons-kit';
import { heroContainer, slide, arrowButtonLeft, arrowButtonRight, headerSection, sliderImg } from './Hero.styles';
import { ic_navigate_before } from 'react-icons-kit/md/ic_navigate_before';
import { ic_navigate_next } from 'react-icons-kit/md/ic_navigate_next';

export const Hero = () => {
    const [imgPositionX, setImgPositionX] = useState<number>(0);

    const images = [
        <img src={img_1} alt="slide-img" className={sliderImg}/>,
        <img src={img_2} alt="slide-img" className={sliderImg}/>,
        <img src={img_3} alt="slide-img" className={sliderImg}/>,
        <img src={img_4} alt="slide-img" className={sliderImg}/>,
        <img src={img_5} alt="slide-img" className={sliderImg}/>,
    ];

    const goImgLeft = () => {
        imgPositionX === 0 ? setImgPositionX(-100 * (images.length - 1)) : setImgPositionX(imgPositionX + 100);
    }

    const goImgRight = () => {
        imgPositionX === -100 * (images.length - 1) ? setImgPositionX(0) : setImgPositionX(imgPositionX - 100);
    }
    
    return (
        <div className={heroContainer}>
            {images.map((image, index) => {
                return (
                    <div key={index} className={slide(imgPositionX)}>
                        {image}    
                    </div>
                )
            })}
            <Icon icon={ic_navigate_before} size={64} onClick={goImgLeft} className={arrowButtonLeft} />
            <Icon icon={ic_navigate_next} size={64} onClick={goImgRight} className={arrowButtonRight} />
            <div className={headerSection}>
                <h1>Modern architecture</h1>
                <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis tempore qui, totam possimus aliquid est deleniti aspernatur animi. Perspiciatis, voluptate vel ipsam dolor beatae expedita quaerat quasi labore id tempora.</span>
            </div>
        </div>
    )
}