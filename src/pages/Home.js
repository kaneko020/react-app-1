import { PiMonitorDuotone }  from 'react-icons/pi';
import { PiMonitorPlayDuotone } from 'react-icons/pi';
import { PiBookDuotone } from 'react-icons/pi';
import { PiBookOpenDuotone } from 'react-icons/pi';
// import { PiPlugsDuotone } from 'react-icons/pi';
// import { PiPlugsConnectedDuotone } from 'react-icons/pi';

const Home = () => {
  return (
    <div className="text-[30px] text-white font-medium">
      <div className="pc:w-[70%] w-[90%] mx-auto my-20 p-8 rounded-[20px] bg-[#4e4e4e] hover:text-[#3d3d3d] hover:bg-[#ececec]">
        <a
          href="/comics"
          className="flex justify-center items-center"
        >
          <PiMonitorDuotone className="text-[50px]" />
          <p className="mx-3">Comics Introduction</p>
          <PiMonitorPlayDuotone className="text-[50px]" />
        </a>
      </div>
      <div className="pc:w-[70%] w-[90%] mx-auto my-20 p-8 rounded-[20px] bg-[#4e4e4e] hover:text-[#3d3d3d] hover:bg-[#ececec]">
        <a
          href="/movies"
          className="flex justify-center items-center"
        >
          <PiBookDuotone className="text-[50px]" />
          <p className="mx-3">Movies Introduction</p>
          <PiBookOpenDuotone className="text-[50px]" />
        </a>
      </div>
    </div>
  )
}

export default Home;