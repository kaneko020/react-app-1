import { PiHouseDuotone } from 'react-icons/pi';
import { PiBooksDuotone } from 'react-icons/pi';
import { PiVideoDuotone } from 'react-icons/pi';

const Header = () => {
  return (
    <div
      className="flex sticky top-0 left-0 w-full h-[100px] px-6 justify-between items-center text-[#333] bg-gray-200 bg-opacity-60 z-10"
    >
      <a href="/" className="flex items-center z-20 hover:text-[#555]">
        <h1 className="pc:text-[35px] text-[30px] font-semibold">Introduction</h1>
      </a>
      <div className="flex items-center mx-2 pc:gap-7 gap-5 text-[18px] font-medium">
        <a href="/" className="flex items-center">
          <PiHouseDuotone className="text-[25px] pc:mr-2" />
          <p className="pc:flex hidden">Home</p>
        </a>
        <span className="pc:flex hidden">|</span>

        <a href="/comics" className="flex items-center">
          <PiBooksDuotone className="text-[25px] pc:mr-2" />
          <p className="pc:flex hidden">Comics</p>
        </a>
        <span className="pc:flex hidden">|</span>

        <a href="/movies" className="flex items-center">
          <PiVideoDuotone className="text-[25px] pc:mr-2" />
          <p className="pc:flex hidden">Movies</p>
        </a>
      </div>
    </div>
  );
}

export default Header;