import { useEffect, useState } from 'react';
import axios from 'axios';
import Item from '../components/Item';

const List = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    getItems()
  }, [])

  const getItems = () => {
    axios
      .get('http://localhost:3030/items')
      .then(res => {
        setItems(res.data)
      })
  }

  return (
    <div className="flex flex-wrap relative justify-center my-6 mx-4">
      {items.map(item => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
}

export default List;