import { useEffect, useState } from 'react';
import axios from 'axios';
import Item from '../components/Item';
import Label from '../components/Label';

const List = () => {
  const [items, setItems] = useState([]);
  const [dispItems, setDispItems] = useState([]);
  const [labels, setLabels] = useState([]);

  useEffect(() => {
    getItems();
    getLabels();
  }, []);

  // itemsの取得
  const getItems = () => {
    axios
      .get('http://localhost:3030/items')
      .then(res => {
        setItems(res.data);
        setDispItems(res.data);
      })
  }

  // labelsの取得
  const getLabels = () => {
    axios
      .get('http://localhost:3030/labels')
      .then(res => {
        setLabels(res.data);
      })
  }

  // ラベル選択
  const selectedLabel = (label, color) => {
    const labelList = document.querySelectorAll('h5');
    const selectedLabel = document.getElementById(label);

    labelList.forEach(label => {
      // buttonのクラスを全て削除
      label.classList.remove(...label.classList);
      // buttonにクラスを追加
      label.classList.add('label');
    });

    // 選択したラベルのbuttonにクラスを追加
    selectedLabel.classList.add(color, 'selected-label');

    if (label === 'All') {
      setDispItems(items);
      return;
    } else {
      const filterItems = items.filter(item => item.label === label);
      setDispItems(filterItems);
    }
  }

  return (
    <div className="w-[95%] mx-auto">
      <div className="flex justify-center my-[50px] gap-3 text-[20px]">
        <h5 onClick={() => selectedLabel('All', 'bg-black')} id="All" className="label font-semibo bg-black text-white">
          All
        </h5>
        {labels.map(label => (
          <Label key={label.id} label={label} selectedLabel={selectedLabel} />
        ))}
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