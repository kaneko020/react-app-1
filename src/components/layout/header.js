import logo from '../../logo.svg';

const Header = () => {
  return (
    <div
      className="flex sticky top-0 left-0 w-full h-[100px] justify-between items-center bg-gray-100 opacity-70 z-10"
    >
      <a href="/" className="flex items-center">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="text-[35px] font-semibold">Welcome to React</h1>
      </a>
      <div className="flex items-center mx-8 gap-4 text-[16px] font-medium">
        <p>TEST1</p>
        <p>TEST2</p>
        <p>TEST3</p>
      </div>
    </div>
  );
}

export default Header;