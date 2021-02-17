import React from 'react';
import SimpleImageSlider from "react-simple-image-slider";
import Gold from '.././assets/slideshow/Gold.jpg';
import GoldNecklace from '.././assets/slideshow/GoldNecklace.jpg'

const images = [
    {url:Gold},
    {url:GoldNecklace}

]

const Slideshow = () => {
    return (
        <div>
           <SimpleImageSlider 
            width={'100vw'}
            height={'42.8%'}
            images={images}
            slideDuration={0.1}
            showBullets={true} /> 
        </div>
    )
}

export default Slideshow;