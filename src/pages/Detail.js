import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import axios from 'axios';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { MdArrowBackIosNew } from 'react-icons/md';

const Detail = () => {
  const [item, setItem] = useState([])

  useEffect(() => {
    getItemDetail()
  }, [])

  const getItemDetail = () => {
    const path = window.location.pathname.replace('/detail', '')
    axios
      .get('http://localhost:3030' + path)
      .then(res => {
        setItem(res.data)
      })
  }

  return (
    <div className="pc:w-[70%] w-[90%] mx-auto">
      <button
        onClick={() => window.history.back()} 
        className="back-btn"
      >
        <MdArrowBackIosNew className="back-btn-icon" />
        <span className="text-[17px]">Back</span>
      </button>

      <div className="mb-16">
        <h1 className="pc:text-[30px] text-[23px] font-semibold border-b-[2px] border-gray-400">
          {item.title}
        </h1>

        <div className={`my-4 px-3 inline-block text-[12px] text-white rounded-[25px] ${item.color}`}>
          {item.label}
        </div>

        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper my-8"
        >
          <SwiperSlide>
            <img src={`${process.env.PUBLIC_URL}${item.image}`} alt="" className="w-full" />
            </SwiperSlide>
          <SwiperSlide>
            <img src={`${process.env.PUBLIC_URL}${item.image2}`} alt="" className="w-full" />
          </SwiperSlide>
        </Swiper>

        <div className="mx-2">
          <h2 className="pc:text-[20px] text-[17px] font-semibold">あらすじ</h2>
          <p className="mt-2 mx-2 pc:text-[16px] text-[14px] font-lighter tracking-wide leading-relaxed whitespace-pre-wrap">
            {item.synopsis}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Detail;