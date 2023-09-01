import { useEffect, useState } from 'react';
import axios from 'axios';
import Item from '../components/Item';
import Label from '../components/Label';
import { SlArrowDown } from 'react-icons/sl'
import { PiMagnifyingGlassDuotone } from 'react-icons/pi';

const ComicList = () => {
  const [items, setItems] = useState([]);
  const [dispItems, setDispItems] = useState([]);
  const [labels, setLabels] = useState([]);
  const [loadIndex, setLoadIndex] = useState(9);
  const [search, setSearch] = useState('');

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

  const searchFilter = () => {
    const filterItems = items.filter(item => item.title.includes(search));
    setDispItems(filterItems);
  };

  return (
    <div className="w-[95%] mx-auto py-8">
      <div className="flex justify-center pc:mx-20 mx-4 py-8 bg-[#eeeeee] rounded-[10px]">
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          className="pc:w-[50%] w-[80%] p-2 bg-white focus:outline-none rounded-l-[5px]"
        />
        <button onClick={searchFilter} className="flex items-center p-2 bg-[#1e3d79] text-white rounded-r-[5px]">
          <PiMagnifyingGlassDuotone className="text-[20px] pc:mr-[2px]" />
          <p className="pc:flex hidden">Search</p>
        </button>
      </div>

      <div className="flex justify-center flex-wrap my-12 pc:gap-3 gap-2 pc:text-[20px] text-[17px]">
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

      <div className="flex flex-wrap relative justify-center">
        {dispItems.slice(0, loadIndex).map(item => (
          <Item key={item.id} item={item} />
        ))}
      </div>

      <div className="flex justify-center">
        <button
          disabled={loadIndex >= dispItems.length}
          onClick={displayMore}
          className="disabled:opacity-0 see-more-btn disabled:m-0"
        >
          <SlArrowDown className="relative text-[40px] z-10 arrow" />
        </button>
      </div>
    </div>
  );
}

export default ComicList;