import { FaBook } from 'react-icons/fa';

const Header = () => {
  return (
    <div
      className="flex sticky top-0 left-0 w-full h-[100px] justify-between items-center text-[#333] bg-gray-200 bg-opacity-60 z-10"
    >
      <a href="/" className="flex items-center mx-6 z-20 hover:text-[#555]">
        <FaBook className="text-[50px] mr-2" />
        <h1 className="text-[35px] font-semibold">Comics Introduction</h1>
      </a>
      <div className="flex items-center mx-8 gap-4 text-[16px] font-medium">
        <a href="/comics">Comics</a>
        <a href="/movies">Movies</a>
      </div>
    </div>
  );
}

export default Header;