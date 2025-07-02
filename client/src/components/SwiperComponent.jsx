import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../style.css'

const SwiperComponent = ({ key, data }) => {

  const GenerateSpread = (data) => {
    return data.spread.filter((item) => item.includes('_')).map((item, index) => (
      <SwiperSlide key={index} className="swiper-slide"><img src={`${item}`} /></SwiperSlide>
    ))
  };


  return (
    <Swiper
      key={key}
      className="swiper"
      modules={[Pagination, Navigation]}
      spaceBetween={30}
      slidesPerView={1}
      pagination={{ clickable: true, el: "swiper-pagination" }}
      navigation={true}
    >
      <div className="swiper-wrapper">
        <SwiperSlide className="swiper-slide"><img src={`${data.modal}/${data.modal}cover.png`} /></SwiperSlide>

        <SwiperSlide className="swiper-slide"><img src={`${data.modal}/${data.modal}plate.png`} /></SwiperSlide>
        {GenerateSpread(data)}
      </div>
    </Swiper>

  );
};

export default SwiperComponent;