/* eslint-disable import/no-unresolved */
import React from 'react';
import { Autoplay, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import styled from 'styled-components';

const Img = styled.img`
  height: 100%;
  width: 100%;
`;

const ImgCarousel = () => (
  <Swiper
    modules={[Autoplay, EffectFade]}
    slidesPerView={1}
    allowTouchMove={false}
    autoplay={{ delay: 5000 }}
    effect="fade"
    speed={1500}
  >
    <SwiperSlide>
      <Img
        src="https://www.instagram.com/static/images/homepage/screenshot1-2x.jpg/9144d6673849.jpg"
        alt="pic-1"
      />
    </SwiperSlide>
    <SwiperSlide>
      <Img
        src="https://www.instagram.com/static/images/homepage/screenshot2-2x.jpg/177140221987.jpg"
        alt="pic-2"
      />
    </SwiperSlide>
    <SwiperSlide>
      <Img
        src="https://www.instagram.com/static/images/homepage/screenshot3-2x.jpg/ff2c097a681e.jpg"
        alt="pic-3"
      />
    </SwiperSlide>
    <SwiperSlide>
      <Img
        src="https://www.instagram.com/static/images/homepage/screenshot4-2x.jpg/b27a108592d8.jpg"
        alt="pic-4"
      />
    </SwiperSlide>
    <SwiperSlide>
      <Img
        src="https://www.instagram.com/static/images/homepage/screenshot5-2x.jpg/5e04169b9308.jpg"
        alt="pic-5"
      />
    </SwiperSlide>
  </Swiper>
);

export default ImgCarousel;
