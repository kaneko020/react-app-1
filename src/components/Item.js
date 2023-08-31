const Item = ({ item }) => {
  return (
    <a
      href={`${window.location.pathname}/detail/${item.id}`}
      className="pc:w-[30%] w-[90%] pc:mb-16 mb-8 mx-3 item"
    >
      <p className="overflow-hidden rounded-[10px]">
        <img
          src={`${process.env.PUBLIC_URL}${item.image}`}
          alt=""
          className="w-full mx-auto hover:scale-[1.2] transition-all duration-300 ease-in-out"
        />
      </p>

      <div className="text-[14px]">
        <h3 className={`item-title ${item.color}-before`}>
          {item.title}
        </h3>
      </div>

      <div className={`px-3 inline-block text-[13px] text-white rounded-[25px] ${item.color}`}>
        {item.label}
      </div>
    </a>
  );
}

export default Item;