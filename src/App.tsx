import "./App.css";
import Logo from "../src/assets/logo.png";
import Vector from "../src/assets/Vector.png";
import Home from "../src/assets/home.png";
import Menu from "../src/assets/menu.svg";
import Premium from "../src/assets/premium.png";
import Loyalty from "../src/assets/loyalty.png";
import GoogleReviews from "../src/assets/googlerev.png";
import GooglePlus from "../src/assets/google+.png";
import LoyaltyIcon from "../src/assets/loyaltyicon.png";
import Lagrilla from "../src/assets/lagrilla.png";
import Lagrilla2 from "../src/assets/la-grilla.png";
import Azemera from "../src/assets/azemera.png";
import Azemera2 from "../src/assets/aze-mera.png";
import Capitol from "../src/assets/capitol.png";
import Capitol2 from "../src/assets/capi-tol.png";
import Marriot from "../src/assets/marriot.png";
import Ceo from "../src/assets/CEO.png";
import Visa from "../src/assets/visa.png";
import GooglePay from "../src/assets/google-pay.png";
import ApplePay from "../src/assets/apple-pay.png";
import MTN from "../src/assets/mtn.png";
import Vodafone from "../src/assets/vodaphone.png";
import MasterCard from "../src/assets/Mastercard.png";

function App() {
  return (
    <div className="h-full w-full vsm:px-0  vsm:pt-5 lg:pt-10">
      <nav className="lg:px-[93px] vsm:px-5 vsm:pb-3  lg:pb-8 flex justify-between items-center w-full">
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
      </nav>
      <div className="lg:px-[90px]">
        <section className="lg:rounded-[20px] custom-bg lg:min-h-[527px] w-full vsm:px-[36px] lg:px-[116px] flex lg:justify-between vsm:flex-col lg:flex-row">
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
        </section>
      </div>
      <section className="h-auto lg:px-[320px] lg:py-[80px] vsm:px-10 vsm:py-8">
        <div className="w-full text-center text-primary font-bold text-[30px] mb-[80px]">
          Choose Your Solution
        </div>
        <div className="flex justify-between lg:flex-row vsm:flex-col vsm:gap-y-[100px] lg:gap-x-[115px] items-center">
          <div className="relative lg:h-[573px] ">
            <div className="custom-bg lg:h-[573px] vsm:h-[380px] lg:w-[400px] vsm:w-[280px] mt-[73px] rounded-[20px] "></div>
            <div className="absolute top-0 lg:left-16 vsm:left-[52px]">
              <img src={Premium} className="lg:h-[574px] vsm:h-[380px] " />
            </div>
          </div>
          <div className="flex flex-col text-primary vsm:text-center lg:text-left">
            <div className="font-bold text-[35px]">QR Payment</div>
            <div className="">
              The diner scans the QR code to see the menu and when finished
              checks the bill, leaves a tip and pays in seconds without calling
              the waiter or downloading any app.
            </div>
            <div className="flex justify-between vsm:mr-0 vsm:w-full lg:w-full gap-x-2 vsm:flex-col lg:flex-row ">
              <button className=" text-[#fff] outline-none mt-4 px-[24px] py-[12px] bg-primary rounded-[100px] w-full">
                Know More
              </button>
              <button className=" outline-none mt-4 px-[24px] py-[12px] text-[#008644] border-[1px] border-[#008644] rounded-[100px] w-full">
                View Prices
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-between lg:flex-row-reverse vsm:flex-col vsm:gap-y-[100px] lg:gap-x-[115px] items-center mt-[200px]">
          <div className="relative lg:h-[573px] ">
            <div className="custom-bg lg:h-[573px] vsm:h-[380px] lg:w-[400px] vsm:w-[280px] mt-[73px] rounded-[20px]"></div>
            <div className="absolute top-0 lg:left-16 vsm:left-[52px]">
              <img src={Premium} className="lg:h-[574px] vsm:h-[380px]" />
            </div>
          </div>
          <div className="vsm:text-center lg:text-left text-primary">
            <div className="font-bold text-[35px] ">Order and pay</div>
            <div className="">
              Scan the QR code, choose your products and order and pay from your
              phone without calling the waiter or downloading any app. Choose
              the modality that best suits your location.
            </div>
            <div className="flex justify-between vsm:mr-0 vsm:w-full lg:w-full gap-x-2 vsm:flex-col lg:flex-row ">
              <button className=" text-[#fff] outline-none mt-4 px-[24px] py-[12px] bg-primary rounded-[100px] w-full">
                Know More
              </button>
              <button className=" outline-none mt-4 px-[24px] py-[12px] text-[#008644] border-[1px] border-[#008644] rounded-[100px] w-full">
                View Prices
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="h-auto py-[80px] lg:px-[90px] vsm:px-[36px]">
        <div className="w-full text-center text-primary font-bold text-[30px] vsm:mb-10 lg:mb-[80px] vsm:px-4">
          Add the best features
        </div>
        <div className="lg:rounded-[20px] lg:custom-bg lg:h-auto w-full lg:py-[20px] lg:px-[150px]">
          <div className=" flex lg:flex-row vsm:flex-col justify-between vsm:gap-y-[30px] lg:gap-x-[85px] items-center">
            <div className="lg:w-1/2">
              <img
                src={GoogleReviews}
                className="lg:h-[500px] vsm:h-[358px] lg:w-fit vsm:w-[275px]"
              />
            </div>
            <div className="flex flex-col text-primary lg:w-1/2 lg:mr-[104px]">
              <div className="orange-linear rounded-[20px] w-[90px] mb-5 h-auto px-[22px] py-[22px] ">
                <img src={GooglePlus} />
              </div>
              <div className="font-bold text-[35px]">Google Reviews</div>
              <div className="">
                Each paying diner is redirected to leave a review for the
                restaurant. You'll double 5-star reviews in weeks.
              </div>
              <div className="flex justify-between vsm:mr-0 vsm:w-full lg:w-full gap-x-2 vsm:flex-col lg:flex-row ">
                <button className=" text-[#fff] outline-none mt-4 px-[24px] py-[12px] bg-primary rounded-[100px] w-full">
                  Know More
                </button>
                <button className=" outline-none mt-4 px-[24px] py-[12px] text-[#008644] border-[1px] border-[#008644] rounded-[100px] w-full">
                  View Prices
                </button>
              </div>
            </div>
          </div>
          <div className="mt-[90px] flex vsm:flex-col lg:flex-row-reverse justify-between  vsm:gap-y-[30px] lg:gap-x-[85px] items-center">
            <div className="lg:w-1/2">
              <img
                src={Loyalty}
                className="lg:h-[500px] vsm:h-[358px] lg:w-fit vsm:w-[275px]"
              />
            </div>
            <div className="flex flex-col text-primary lg:w-1/2 lg:mr-[104px]">
              <div className="orange-linear rounded-[20px] w-[90px] mb-5 h-auto px-[22px] py-[22px] ">
                <img src={LoyaltyIcon} />
              </div>
              <div className="font-bold text-[35px]">Loyalty Program</div>
              <div className="">
                Your customers earn credits with each payment in Chem-pe to use
                them on their next visits to the restaurant.
              </div>
              <div className="flex justify-between vsm:mr-0 vsm:w-full lg:w-full gap-x-2 vsm:flex-col lg:flex-row ">
                <button className=" text-[#fff] outline-none mt-4 px-[24px] py-[12px] bg-primary rounded-[100px] w-full">
                  Know More
                </button>
                <button className=" outline-none mt-4 px-[24px] py-[12px] text-[#008644] border-[1px] border-[#008644] rounded-[100px] w-full">
                  View Prices
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="h-auto bg-primary lg:px-[200px] lg:py-[90px] vsm:py-24 vsm:px-[36px]">
        <div className="text-[30px] w-full font-bold text-white vsm:text-left lg:text-center">
          More than 30 restaurants trust us
        </div>
        <div className="flex vsm:flex-wrap vsm:gap-x-4 lg:gap-x-3 justify-start items-center vsm:mt-[50px] lg:mt-[90px]">
          <img
            src={Capitol}
            className="vsm:h-[65px] vsm:w-[61px] lg:w-[152px] lg:h-fit"
          />
          <img
            src={Lagrilla}
            className="vsm:h-fit vsm:w-[98px] lg:w-[256px] lg:h-fit"
          />
          <img
            src={Azemera}
            className="vsm:h-fit vsm:w-[138px] lg:w-[360px] lg:h-fit"
          />
          <img
            src={Marriot}
            className="vsm:h-fit vsm:w-[138px] lg:w-[291px] lg:h-fit"
          />
        </div>
      </section>
      <section className="vsm:px-[36px] vsm:py-[40px] lg:px-[200px] lg:py-[90px] h-auto">
        <div className="flex flex-wrap vsm:gap-y-7 lg:gap-x-8">
          <div className="mt-10 ">
            <div className="text-primary testimonial pl-[20px] relative">
              Testimonials
            </div>
            <div className="text-primary font-bold text-[25px]">
              Hear what our clients say
            </div>
            <div className="mt-10">
              <div className="card vsm:px-[26px] vsm:py-[33px] lg:px-10 lg:py-10 flex flex-col vsm:w-[294px] lg:w-[500px] h-fit">
                <div className="">
                  <img
                    src={Lagrilla2}
                    className="lg:w-[150px] vsm:w-[78px] h-fit"
                  />
                </div>
                <div className="vsm:mt-2 lg:mt-4 testimonial-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ducimus repellat cum vel, accusantium beatae tempore numquam!
                  Officiis porro saepe assumenda!
                </div>
                <div className="flex mt-4 gap-x-[20px] items-center">
                  <div className="rounded-full custom-bg h-full">
                    <img src={Ceo} className="h-[40px] align-middle" />
                  </div>
                  <div className="flex flex-col justify-center ">
                    <div className="font-bold">CEO</div>
                    <div className="">La Grilla Restaurant</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-6">
            <div className="card vsm:px-[26px] vsm:py-[33px] lg:px-10 lg:py-10 flex flex-col vsm:w-[294px] lg:w-[500px] h-fit">
              <div className="">
                <img src={Azemera2} className="w-[185px] h-fit" />
              </div>
              <div className="vsm:mt-2 lg:mt-4 testimonial-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Ducimus repellat cum vel, accusantium beatae tempore numquam!
                Officiis porro saepe assumenda!
              </div>
              <div className="flex mt-4 gap-x-[20px] items-center">
                <div className="rounded-full custom-bg h-full">
                  <img src={Ceo} className="h-[40px] align-middle" />
                </div>
                <div className="flex flex-col justify-center ">
                  <div className="font-bold">Managing Director</div>
                  <div className="">Azmera Restaurant</div>
                </div>
              </div>
            </div>
            <div className="card vsm:px-[26px] vsm:py-[33px] lg:px-10 lg:py-10 flex flex-col vsm:w-[294px] lg:w-[500px] h-fit">
              <div className="">
                <img src={Capitol2} className="w-[91px] h-fit" />
              </div>
              <div className="vsm:mt-2 lg:mt-4 testimonial-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Ducimus repellat cum vel, accusantium beatae tempore numquam!
                Officiis porro saepe assumenda!
              </div>
              <div className="flex mt-4 gap-x-[20px] items-center">
                <div className="rounded-full custom-bg h-full">
                  <img src={Ceo} className="h-[40px] align-middle" />
                </div>
                <div className="flex flex-col justify-center ">
                  <div className="font-bold">Chief Operating Officer</div>
                  <div className="">Capitol Restaurant</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="lg:px-10 vsm:px-[36px] vsm:py-10 lg:py-10">
        <div className="w-full text-center text-primary font-bold text-[30px]">
          Accept more payment methods
        </div>
        <div className="flex vsm:flex-wrap lg:gap-x-6 vsm:gap-x-3 vsm:gap-y-4 justify-center items-center mt-[40px]">
          <img src={GooglePay} className="lg:w-[233px] vsm:w-[132px] h-fit" />
          <img src={ApplePay} className="lg:w-[132px] vsm:w-[74px] h-fit" />
          <img src={MTN} className="lg:w-[181px] vsm:w-[102px] h-fit" />
          <img src={Vodafone} className="lg:w-[181px] vsm:w-[154px] h-fit" />
          <img src={Visa} className="lg:w-[122px] vsm:w-[64px] h-fit" />
          <img src={MasterCard} className="lg:w-[102px] vsm:w-[78px] h-fit" />
        </div>
      </section>
      <section className="lg:px-10 lg:py-[90px] vsm:px-[36px] vsm:py-10">
        <div className="custom-bg lg:px-[120px] vsm:px-7 vsm:py-10 flex lg:flex-row vsm:flex-col gap-x-[150px] lg:py-[50px] rounded-[20px]">
          <div className="flex flex-col text-primary lg:w-[400px]">
            <div className="font-bold text-[30px]">Free Demo</div>
            <div className="">
              Fill out the form so that one of our specialists will call you and
              show you how Chem-pe can help you optimize operations in your
              restaurant and sell more with our solutions.
            </div>
          </div>
          <div className="flex lg:flex-row vsm:flex-col vsm:mt-10 lg:mt-0 gap-x-[70px]">
            <div className="flex flex-col">
              <label htmlFor="fullname" className="mb-2 font-bold">
                Full name <span className="text-red-700">*</span>
              </label>
              <input
                name="fullname"
                className="h-[47px] px-3 outline-none mb-5 custom-input"
              />
              <label htmlFor="number" className="mb-2 font-bold">
                Mobile Number <span className="text-red-700">*</span>
              </label>
              <input
                name="number"
                className="h-[47px] px-3 outline-none mb-5 custom-input"
              />
              <label htmlFor="pos" className="mb-2 font-bold">
                POS System <span className="text-red-700">*</span>
              </label>
              <input
                name="pos"
                className="h-[47px] px-3 outline-none custom-input lg:mb-0 vsm:mb-5"
              />
            </div>
            <div className="flex flex-col ">
              <label htmlFor="email" className="mb-2 font-bold">
                Email <span className="text-red-700">*</span>
              </label>
              <input
                name="email"
                className="h-[47px] px-3 outline-none mb-5 custom-input"
              />
              <label htmlFor="restaurant" className="mb-2 font-bold h-6">
                Restaurant Name <span className="text-red-700">*</span>
              </label>
              <input
                name="restaurant"
                className="h-[47px] px-3 outline-none mb-5 custom-input"
              />
              <div className="lg:h-6 lg:mb-2 vsm:h-0 vsm:mb-2"></div>
              <button className="outline-none border-none bg-primary w-full rounded-[8px] h-[47px] text-white">
                Request Demo
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-[50px] lg:py-[80px] vsm:px-[36px] vsm:py-10 lg:px-[250px] bg-primary text-white h-auto flex lg:flex-row vsm:flex-col vsm:gap-y-[70px] lg:gap-x-[50px] w-full lg:items-center vsm:items-start lg:justify-between">
        <div className="vsm:w-full lg:w-auto">
          <div className="font-bold text-[15px]">Social Media</div>
          <div className="flex flex-col">
            <div className="">
              <a href="">Instagram</a>
            </div>
            <div className="">
              <a href="">LinkedIn</a>
            </div>
            <div className="">
              <a href="">Facebook</a>
            </div>
          </div>
        </div>
        <div className="vsm:w-full lg:w-auto">
          <div className="font-bold text-[15px]">About Chempe</div>
          <div className="flex flex-col">
            <div className="">
              <a href="">Our History</a>
            </div>
            <div className="">
              <a href="">Discover our blog</a>
            </div>
            <div className="">
              <a href="">Appointment with us</a>
            </div>
          </div>
        </div>
        <div className="vsm:w-full lg:w-auto">
          <div className="font-bold text-[15px]">Legal</div>
          <div className="flex flex-col">
            <div className="">
              <a href="">Terms And Conditions</a>
            </div>
            <div className="">
              <a href="">Privacy Policy</a>
            </div>
            <div className="">
              <a href="">Cookies</a>
            </div>
          </div>
        </div>
        <div className="vsm:w-full lg:w-auto">
          <div className="font-bold text-[15px] mb-2">Join our newsletter</div>
          <div className="flex flex-col">
            <input
              name="restaurant"
              className="h-[37px] px-3 outline-none mb-2 text-black"
            />
            <button className="outline-none border-none orange-linear w-full h-[37px] text-white">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
