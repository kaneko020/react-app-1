import { PiAppleLogoDuotone } from 'react-icons/pi';
import { PiHouseDuotone } from 'react-icons/pi';
import { PiBooksDuotone } from 'react-icons/pi';
import { PiVideoDuotone } from 'react-icons/pi';

const Header = () => {
  return (
    <div
      className="flex sticky top-0 left-0 w-full pc:h-[100px] h-[70px] px-6 justify-between items-center text-[#333] bg-gray-200 bg-opacity-60 z-10"
    >
      <a href="/" className="flex items-center z-20 hover:scale-[1.1] hover:transition-all duration-300 ease-in-out">
        <PiAppleLogoDuotone className="text-[40px] mr-2" />
        <h1 className="pc:flex hidden text-[35px] font-semibold">Introduction</h1>
      </a>

      <div className="flex items-center mx-2 pc:gap-7 gap-5 text-[18px] font-medium">
        <a href="/" className="flex items-center hover:scale-[1.1] hover:transition-all duration-300 ease-in-out">
          <PiHouseDuotone className="text-[30px] pc:mr-2" />
          <p className="pc:flex hidden">Home</p>
        </a>
        <span className="pc:flex hidden">|</span>

        <a href="/comics" className="flex items-center hover:scale-[1.1] hover:transition-all duration-300 ease-in-out">
          <PiBooksDuotone className="text-[30px] pc:mr-2" />
          <p className="pc:flex hidden">Comics</p>
        </a>
        <span className="pc:flex hidden">|</span>

        <a href="/movies" className="flex items-center hover:scale-[1.1] hover:transition-all duration-300 ease-in-out">
          <PiVideoDuotone className="text-[30px] pc:mr-2" />
          <p className="pc:flex hidden">Movies</p>
        </a>
      </div>
    </div>
  );
}

export default Header;