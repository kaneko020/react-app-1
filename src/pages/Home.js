import { PiMonitorDuotone }  from 'react-icons/pi';
import { PiMonitorPlayDuotone } from 'react-icons/pi';
import { PiBookDuotone } from 'react-icons/pi';
import { PiBookOpenDuotone } from 'react-icons/pi';
import { PiPlugsDuotone } from 'react-icons/pi';
import { PiPlugsConnectedDuotone } from 'react-icons/pi';

const Home = () => {
  return (
    <div className="w-[70%] mx-auto text-[30px] font-medium">
      <a
        href="/comics"
        className="flex justify-center items-center m-20 p-8 rounded-[20px] text-white bg-[#4e4e4e] hover:text-[#3d3d3d] hover:bg-[#ececec] hover:transition-all duration-300 ease-in-out"
      >
        <PiMonitorDuotone className="text-[50px]" />
        <p className="mx-3">Comics Introduction</p>
        <PiMonitorPlayDuotone className="text-[50px]" />
      </a>
      <a
        href="/movies"
        className="flex justify-center items-center m-20 p-8 rounded-[20px] text-white bg-[#4e4e4e] hover:text-[#3d3d3d] hover:bg-[#ececec] hover:drop-shadow-md"
      >
        <PiBookDuotone className="text-[50px]" />
        <p className="mx-3">Movies Introduction</p>
        <PiBookOpenDuotone className="text-[50px]" />
      </a>
    </div>
  )
}

export default Home;