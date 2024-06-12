import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ClientReview from './ClientReview';

const responsive = {

    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },

    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },

    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }

  };

const ReviewSlider = () => {
  return (
    <Carousel
     additionalTransfrom={0}
     arrows={true}
     autoPlay={true}
     autoPlaySpeed={5000}
     centerMode={false}
     infinite
     responsive={responsive}
     itemClass='item'
    >
     <ClientReview 
     image="/assets/images/jinshi.2.jpg" 
     name="Jinshid M" 
     role="Web Developer"/>

     <ClientReview image='/assets/images/jinu.jpg ' 
     name='Sinan CT' 
     role='React Developer' />   
     <ClientReview image='/assets/images/Vaseem.png' name='Vaseem EP' role='React Developer' />   

    </Carousel>
  )
}

export default ReviewSlider