import { PiTwitterLogoDuotone } from 'react-icons/pi';
import { PiInstagramLogoDuotone } from 'react-icons/pi';
import { PiFacebookLogoDuotone } from 'react-icons/pi';
import { PiYoutubeLogoDuotone } from 'react-icons/pi';

const Footer = () => {
  return (
    <>
    <div
      className="flex justify-center items-center w-full h-[100px] gap-5 bg-[#d7d7d7] text-[#333]"
    >
      <PiTwitterLogoDuotone className="text-[30px]" />
      <PiInstagramLogoDuotone className="text-[30px]" />
      <PiFacebookLogoDuotone className="text-[30px]" />
      <PiYoutubeLogoDuotone className="text-[30px]" />
    </div>

    <div
      className="flex justify-center items-center w-full h-[50px] bg-[#616161] text-white text-[13px] font-light"
    >
      <p>©️JUT JOY</p>
    </div>
  </>
  );
}

export default Footer;