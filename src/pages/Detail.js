import { useEffect, useState } from 'react';
import axios from 'axios';

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
    <div className="w-[90%] mx-auto my-[40px]">
      <h1 className="text-[30px] font-semibold">{item.title}</h1>

      <div className={`my-4 px-3 inline-block bg-${item.color} text-[12px] text-white rounded-[25px]`}>
        {item.label}
      </div>

      <div className="overflow-hidden">
        <img src={`${process.env.PUBLIC_URL}${item.image}`} alt="" className="my-4 w-full" />
      </div>
    </div>
  );
}

export default Detail;