import React from 'react'
import { Swiper, SwiperSlide} from 'swiper/react'
import { Pagination, Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { SliderProducts, SLiderProducts } from '../../data/products'
import './Slider.css'

const Slider = () => {
  return (
    <div className="s-container">
        <Swiper
            breakpoints={{
                640: {
                    slidesPerView: 3
                },
                0: {
                    slidesPerView: 1
                }
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper"
            loopFillGroupWithBlank={true}
            navigation={true}
            slidesPerView={3}
            spaceBetween={35}
            slidesPerGroup={1}
            loop={true}
        >
            {SliderProducts?.map(({name, detail, price, img}, index) => 
                <SwiperSlide key={index}>
                    <div className="left-s">
                        <div className="name">
                            <span>{name}</span>
                            <span>{detail}</span>
                        </div>
                        <span>{price}$</span>
                        <div>Shop now</div>
                    </div>
                    <img src={img} alt="product" className='img-p' />
                </SwiperSlide>
            )}
        </Swiper>
    </div>
  )
}

export default Slider