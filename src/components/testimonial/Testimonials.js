import React from 'react'
import css from './Testimonials.module.css'
import Hero from '../../assets/testimonialHero.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import { TestimonialsData } from '../../data/testimonials'

const Testimonial = () => {
  return (
    <div className={css.testimonials}>
        <div className={css.wrapper}>
          <div className={css.container}>
            <span>Top Rated</span>
            <span>Seedily say has suitable disposal and boy. Exercise joy man children rejoiced</span>
          </div>
          <img src={Hero} alt="" />
          <div className={css.container}>
            <span>100k</span>
            <span>Happy Customers with us</span>
          </div>
        </div>
        <div className={css.review}>Reviews</div>
        <div className={css.carousel}>
            <Swiper
              breakpoints={{
                856: {
                  slidesPerView: 3
                },
                640: {
                  slidesPerView: 2
                },
                0: {
                  slidesPerView: 1
                }
              }}
              slidesPerView={3}
              slidesPerGroup={1}
              spaceBetween={20}
              className={css.tCarousel}
            >
              {TestimonialsData?.map(({name, image, comment}, i) => 
                <SwiperSlide>
                  <div className={css.testimonial}>
                    <img src={image} alt="" />
                    <span>{comment}</span>
                    <hr />
                    <span>{name}</span>
                  </div>
                </SwiperSlide>
              )}
            </Swiper>
          </div>
    </div>
  )
}

export default Testimonial