import "./App.css";
import Logo from "../src/assets/logo.png";
import Vector from "../src/assets/Vector.png";
import Home from "../src/assets/home.png";
import Menu from "../src/assets/menu.svg";

function App() {
  return (
    <div className="h-full w-full vsm:px-0 lg:px-[90px] vsm:pt-5 lg:py-10">
      <div className="lg:px-8 vsm:px-5 vsm:pb-3 lg:pb-8 flex justify-between items-center w-full">
        <div className="">
          <img src={Logo} width={150} />
        </div>
        <div className="flex items-center vsm:hidden lg:block">
          <a className="" href="#">
            QR Payments
          </a>
          <a className="ml-[27px]" href="#">
            Order And Pay
          </a>
          <a className="ml-[27px]" href="#">
            Additional Features
          </a>
          <a className="ml-[27px]" href="#">
            About Us
          </a>
          <a className="ml-[27px]" href="#">
            Prices
          </a>
          <button className="ml-[27px] outline-none border-none px-[24px] py-[12px] bg-[#008644] text-white rounded-[100px]">
            Contact
          </button>
        </div>
        <div className="lg:hidden">
          <img src={Menu} />
        </div>
      </div>
      <div className="lg:rounded-[20px] custom-bg lg:min-h-[527px] w-full vsm:px-[36px] lg:px-[116px] flex lg:justify-between vsm:flex-col lg:flex-row">
        <div className="lg:w-1/2 py-12">
          <div className="vsm:text-[50px] lg:text-[80px] text-[#008644] font-[700] vsm:leading-[60px] lg:leading-[90px]">
            Restaurant Payments Made Easy
          </div>
          <div className="flex justify-between vsm:mr-0 vsm:w-full lg:w-[290px] vsm:flex-col lg:flex-row  mt-12">
            <button className=" outline-none mt-4 px-[24px] py-[12px] bg-[#008644] text-white rounded-[100px]">
              Request Demo
            </button>
            <button className=" outline-none mt-4 px-[24px] py-[12px] text-[#008644] border-[1px] border-[#008644] rounded-[100px]">
              View Prices
            </button>
          </div>
        </div>
        <div className=" lg:w-1/2 py-14 flex justify-center">
          <div className="relative">
            <div className="relative vsm:top-0 lg:top-10 lg:left-24 ">
              <img src={Vector} className=" vsm:h-[214px] lg:h-[391px]" />
            </div>
            <div className="absolute vsm:top-[-20px] lg:top-10 vsm:left-3 lg:left-36">
              <img src={Home} className="vsm:h-[286px] lg:h-[434px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
