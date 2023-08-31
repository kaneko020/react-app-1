import { useEffect, useState } from 'react';
import axios from 'axios';
import Item from '../components/Item';
import Label from '../components/Label';
import { SlArrowDown } from 'react-icons/sl'

const ComicList = () => {
  const [items, setItems] = useState([]);
  const [dispItems, setDispItems] = useState([]);
  const [labels, setLabels] = useState([]);
  const [loadIndex, setLoadIndex] = useState(9);

  useEffect(() => {
    getItems();
    getLabels();
  }, []);

  // comicsの取得
  const getItems = () => {
    axios
      .get('http://localhost:3030/comics')
      .then(res => {
        setItems(res.data);
        setDispItems(res.data);
      })
  }

  // labelsの取得
  const getLabels = () => {
    axios
      .get('http://localhost:3030/comicLabels')
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
      const filterItems = items.filter(item => item.label.includes(label));
      setDispItems(filterItems);
    }
  }

  const displayMore = () => {
    setLoadIndex(loadIndex + 12);
  };

  return (
    <div className="w-[95%] mx-auto">
      <div className="flex justify-center flex-wrap my-[50px] pc:gap-3 gap-2 pc:text-[20px] text-[17px]">
        <h5
          onClick={() => selectedLabel('All', 'bg-black')}
          id="All"
          className="label font-semibo bg-black text-white"
        >
          All
        </h5>

        {labels.map(label => (
          <Label key={label.id} label={label} selectedLabel={selectedLabel} />
        ))}
      </div>

      <div className="flex flex-wrap relative justify-center my-6 mx-4">
        {dispItems.slice(0, loadIndex).map(item => (
          <Item key={item.id} item={item} />
        ))}
      </div>

      <div className="flex justify-center mb-32">
        <button
          disabled={loadIndex >= dispItems.length}
          onClick={displayMore}
          className="disabled:opacity-0 see-more-btn"
        >
          <SlArrowDown className="relative text-[40px] z-10 arrow" />
        </button>
      </div>
    </div>
  );
}

export default ComicList;