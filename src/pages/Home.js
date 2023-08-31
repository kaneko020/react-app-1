import { PiMonitorDuotone }  from 'react-icons/pi';
import { PiMonitorPlayDuotone } from 'react-icons/pi';
import { PiBookDuotone } from 'react-icons/pi';
import { PiBookOpenDuotone } from 'react-icons/pi';

const Home = () => {
  return (
    <div className="w-full h-full pc:py-44 py-32 bg-[#f2f2f2] text-[30px] text-[#090909] font-medium">
      <a href="/comics" className="pc:w-[70%] w-[90%] top-btn">
        <PiBookDuotone className="text-[50px]" />
        <p className="mx-3">Comics Introduction</p>
        <PiBookOpenDuotone className="text-[50px]" />
      </a>
      <a href="/movies" className="pc:w-[70%] w-[90%] top-btn">
        <PiMonitorDuotone className="text-[50px]" />
        <p className="mx-3">Movies Introduction</p>
        <PiMonitorPlayDuotone className="text-[50px]" />
      </a>
    </div>
  )
}

export default Home;