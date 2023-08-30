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
    const id = window.location.pathname.split('/detail/')[1]
    axios
      .get('http://localhost:3030/items/' + id)
      .then(res => {
        console.log(res.data)
        setItem(res.data)
      })
  }

  return (
    <div className="w-[80%] mx-auto">
      <div className="px-3 py-1 my-8 bg-[#ecebeb] inline-block rounded-[10px] drop-shadow hover:bg-[#f6f6f6] active:drop-shadow-none">
        <a href="/" className="flex items-center text-[17px]">
          <MdArrowBackIosNew className="text-[20px] mr-2" />
          <span className="pr-2">Back</span>
        </a>
      </div>

      <div className="">
        <h1 className="text-[30px] font-semibold border-b-[2px] border-gray-400">{item.title}</h1>

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

        <div className="mx-2 mb-8">
          <h2 className="text-[20px] font-semibold">あらすじ</h2>
          <p className="mt-2 mx-2 text-[16px] font-lighter tracking-wide leading-relaxed whitespace-pre-wrap">
            {item.synopsis}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Detail;