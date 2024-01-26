import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Import Swiper styles
import styles from './HomeSlider.module.css';

// Static Import Array
const ImageSlider = ['./swiperslide.jpg', './swiperslide', './swiperslide.jpg'];

const HomeSlider = () => {
  return (
<div className={styles.MainContainer}>
<Swiper className={styles.SliderContainer}>
      {ImageSlider.map((image, index) => (
        <SwiperSlide className={styles.SlideItem} key={index}>
          <img src={image} alt={`Slide ${index + 1}`} />
        </SwiperSlide>
      ))}
    </Swiper>
</div>
  );
};

export default HomeSlider;
