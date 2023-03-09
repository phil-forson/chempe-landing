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
import Lagrilla from "../src/assets/lagrilla.png"
import Azemera from "../src/assets/azemera.png"
import Capitol from "../src/assets/capitol.png"
import Marriot from "../src/assets/marriot.png"

function App() {
  // const addCatToBackend = () => {
  //   axios.get('https://fakestoreapi.com/products/categories').then((res) => {
  //    if(res.status === 200){
  //     console.log(res.data)
  //     const reqBody = res.data.map((cat: any) => {
  //       return {
  //         name: cat,
  //         category: ''
  //       }
  //     })
  //     reqBody.map((req: any) => {
  //       axios.post('http://localhost:3000/categories', req).then((res) => {
  //         if(res.status === 201){
  //           console.log(res)
  //         }
  //       })
  //     })
  //    }
  //   })
  // }

  // const addProductsToBackend = () => {
  //   axios.get('https://fakestoreapi.com/products/').then((res1) => {
  //     if(res1.status === 200){
  //       axios.get('http://localhost:3000/categories').then((res2) => {
  //         const reqBody = res1.data.map((item: any) => {
  //           return {
  //             name: item.title,
  //             price: item.price,
  //             description: item.description,
  //             category: res2.data.find((res: any) => res.name === item.category)?.id
  //           }
  //         })
  //         axios.post('http://localhost:3000/products', reqBody).then((res3) => {
  //           if(res3.data === 200){
  //             console.log(res3.data)
  //           }
  //         })
  //         console.log(reqBody)
  //       })
  //           }
  //   })
  // }
  return (
    <div className="h-full w-full vsm:px-0  vsm:pt-5 lg:py-10">
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
      <section className="h-auto px-[320px] py-[80px]">
        <div className="w-full text-center text-primary font-bold text-[30px] mb-[100px]">
          Choose Your Solution
        </div>
        <div className="flex justify-between gap-x-[115px] items-center">
          <div className="relative h-[573px] ">
            <div className="custom-bg h-[573px] w-[400px] mt-[73px] rounded-[20px] "></div>
            <div className="absolute top-0 left-16">
              <img src={Premium} className="h-[574px]" />
            </div>
          </div>
          <div className="flex flex-col text-primary">
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
        <div className="mt-[200px] flex flex-row-reverse justify-between gap-x-[115px] items-center">
          <div className="relative h-[573px] ">
            <div className="custom-bg h-[573px] w-[400px] mt-[73px] rounded-[20px] "></div>
            <div className="absolute top-0 left-16">
              <img src={Premium} className="h-[574px]" />
            </div>
          </div>
          <div className="flex flex-col text-primary">
            <div className="font-bold text-[35px]">Order and pay</div>
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
      <section className="h-auto py-[80px] px-[90px]">
        <div className="w-full text-center text-primary font-bold text-[30px] mb-[100px]">
          Add the best features
        </div>
        <div className="lg:rounded-[20px] custom-bg lg:h-auto w-full lg:py-[90px] vsm:px-[36px] lg:px-[150px]">
          <div className=" flex justify-between gap-x-[85px] items-center">
            <div className="w-1/2">
              <img src={GoogleReviews} className="h-[500px] w-fit" />
            </div>
            <div className="flex flex-col text-primary w-1/2 mr-[104px]">
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
          <div className="mt-[90px] flex flex-row-reverse justify-between gap-x-[85px] items-center">
            <div className="w-1/2">
              <img src={Loyalty} className="h-[500px] w-fit" />
            </div>
            <div className="flex flex-col text-primary w-1/2 mr-[104px]">
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
      <section className="h-auto bg-primary px-[200px] py-[90px]">
        <div className="text-[30px] w-full font-bold text-white text-center">More than 30 restaurants trust us</div>
        <div className="flex gap-x-6 justify-center items-center mt-[90px]">
          <img src={Capitol} />
          <img src={Lagrilla} />
          <img src={Azemera} />
          <img src={Marriot} />
        </div>
      </section>
      
    </div>
  );
}

export default App;
