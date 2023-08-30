import { useEffect, useState } from 'react';
import axios from 'axios';
import Item from '../components/Item';

const List = () => {
  const [items, setItems] = useState([]);
  const [dispItems, setDispItems] = useState([]);

  useEffect(() => {
    getItems();
  }, []);

  const getItems = () => {
    axios
      .get('http://localhost:3030/items')
      .then(res => {
        setItems(res.data);
        setDispItems(res.data);
      })
  }

  const selectedCategory = (category) => {
    if (category === "All") {
      setDispItems(items)
      return;
    } else {
      const filterItems = items.filter(item => item.label === category);
      setDispItems(filterItems);
    }
  }

  return (
    <div className="w-[95%] mx-auto">
      <div className="flex justify-center my-8 gap-6 text-[20px]">
        <button onClick={() => selectedCategory("All")} className="">All</button>
        <button onClick={() => selectedCategory("Jump Comics")} className="">Jump Comics</button>
        <button onClick={() => selectedCategory("ジャンプSQ")} className="">ジャンプSQ</button>
        <button onClick={() => selectedCategory("ヤングジャンプ")} className="">ヤングジャンプ</button>
        <button onClick={() => selectedCategory("Magazine Comics")} className="">Magazine Comics</button>
        <button onClick={() => selectedCategory("Sunday Comics")} className="">Sunday Comics</button>
        <button onClick={() => selectedCategory("Morning")} className="">Morning</button>
      </div>
      <div className="flex flex-wrap relative justify-center my-6 mx-4">
        {dispItems.map(item => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default List;