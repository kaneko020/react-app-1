import { PiHouseDuotone } from 'react-icons/pi';
import { PiBooksDuotone } from 'react-icons/pi';
import { PiVideoDuotone } from 'react-icons/pi';
import { PiPlugsDuotone } from 'react-icons/pi';
import { PiPlugsConnectedDuotone } from 'react-icons/pi';

const Header = () => {
  return (
    <div
      className="flex sticky top-0 left-0 w-full h-[100px] justify-between items-center text-[#333] bg-gray-200 bg-opacity-60 z-10"
    >
      <a href="/" className="flex items-center mx-6 z-20 hover:text-[#555]">
        <h1 className="text-[35px] font-semibold">Introduction</h1>
      </a>
      <div className="flex items-center mx-8 gap-7 text-[18px] font-medium">
        <a href="/" className="flex items-center">
          <PiHouseDuotone className="text-[25px] mr-2" />
          Home
        </a>
        <span>|</span>

        <a href="/comics" className="flex items-center">
          <PiBooksDuotone className="text-[25px] mr-2" />
          Comics
        </a>
        <span>|</span>

        <a href="/movies" className="flex items-center">
          <PiVideoDuotone className="text-[25px] mr-2" />
          Movies
        </a>
      </div>
    </div>
  );
}

export default Header;