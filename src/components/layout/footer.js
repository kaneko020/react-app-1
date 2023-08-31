import { PiTwitterLogoDuotone } from 'react-icons/pi';
import { PiInstagramLogoDuotone } from 'react-icons/pi';
import { PiFacebookLogoDuotone } from 'react-icons/pi';
import { PiYoutubeLogoDuotone } from 'react-icons/pi';
import { SlArrowUp } from 'react-icons/sl'

const Footer = () => {
  const returnTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
    <div
      className="w-full h-[100px] bg-[#d7d7d7] text-[#333]"
    >
      <div className="h-full flex justify-center items-center gap-5">
        <PiTwitterLogoDuotone className="text-[30px]" />
        <PiInstagramLogoDuotone className="text-[30px]" />
        <PiFacebookLogoDuotone className="text-[30px]" />
        <PiYoutubeLogoDuotone className="text-[30px]" />
      </div>

      <div className="flex justify-end -mt-[70px] mr-[20px]">
        <button onClick={returnTop} className="go-top-btn border-[#555] border-[1px] rounded-full p-3">
          <SlArrowUp className="text-[20px]" />
        </button>
      </div>
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