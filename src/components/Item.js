const Item = ({ item }) => {
  return (
    <div className="pc:w-[30%] w-[90%] mb-[60px] mx-2">
      <div className="overflow-hidden">
        <a href={`/detail/${item.id}`}>
          <img
            src={`${process.env.PUBLIC_URL}${item.image}`}
            alt=""
            className="w-full mx-auto hover:scale-110 hover:transition-all duration-500 ease-in-out"
          />
        </a>
      </div>
      <div className="text-[14px]">
        <button
          className={`pl-[30px] p-3 text-start relative inline-block before:content-[''] before:absolute before:left-0 before:-z-10 before:align-middle before:w-[20px] before:h-[20px] before:bg-${item.color} before:rounded-[25px] before:transition-all before:duration-300 before:ease-out hover:before:w-full hover:text-white`}
        >
          {item.title}
        </button>
      </div>
      <div className={`px-3 inline-block bg-${item.color} text-[13px] text-white rounded-[25px]`}>
        {item.label}
      </div>
    </div>
  );
}

export default Item;