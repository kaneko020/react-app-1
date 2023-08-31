import { PiMonitorDuotone }  from 'react-icons/pi';
import { PiMonitorPlayDuotone } from 'react-icons/pi';
import { PiBookDuotone } from 'react-icons/pi';
import { PiBookOpenDuotone } from 'react-icons/pi';
// import { PiPlugsDuotone } from 'react-icons/pi';
// import { PiPlugsConnectedDuotone } from 'react-icons/pi';

const Home = () => {
  return (
    <div className="w-full h-[100vh] pc:py-40 py-32 bg-[#f2f2f2] text-[30px] text-[#090909] font-medium">
      <div className="pc:w-[70%] w-[90%] top-btn">
        <a
          href="/comics"
          className="flex justify-center items-center"
        >
          <PiMonitorDuotone className="text-[50px]" />
          <p className="mx-3">Comics Introduction</p>
          <PiMonitorPlayDuotone className="text-[50px]" />
        </a>
      </div>
      <div className="pc:w-[70%] w-[90%] top-btn">
        <a
          href="/comics"
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