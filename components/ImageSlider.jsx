import React, {useState} from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};


const ImageSlider = ({ imagesArray }) => {
    return (
      <div className='max-w-7xl max-h-[600px]  ml-32 py-12 px-4 relative group  transition-all duration-500 ease-out'>
    
      <Carousel 
          swipeable={true}
          draggable={true}
          showDots={true}
          renderDotsOutside={true}
          responsive={responsive}
          ssr={true}        // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          customTransition="all ease"
          transitionDuration={600}
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px">
          {
            imagesArray.map((image) => (
              <div key={image} style={{backgroundImage: `url(${image.url})`}} className='w-[100%] h-[500px] rounded-2xl bg-center bg-cover  transition-all ease-out -translate-x-full'></div>
            ))
          }    
              
          </Carousel>
        </div>
  )
}

export default ImageSlider
