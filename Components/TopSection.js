/* eslint-disable @next/next/no-img-element */
import Header from "./Header";
import Buttons from "./Buttons";
import Toggle from "./Toggle";

export default function TopSection() {
  return (
    <div className="   bg-[#1F2937]  w-full  ">
      <div className="mx-auto container 2xl:max-w-[80.7%]   lg:max-w-[100%] sm:max-w-[90%] ">
        <div className="flex  md:w-full   ">
          <Header />
          <button className="lg:mr-[40px] hover:border-[#585858] hover:border-b-4 mt-[34px] relative 2xl:ml-[36px] xl:ml-0 md:ml-5 sm:-ml-[10%] -right-[21%] sm:right-0  cursor-pointer bg-[#10B981] w-[129px] h-[48px] rounded-[8px]   leading-[20px] font-medium text-[#FFFFFF] ">
            Sign Up
          </button>
        </div>
        <div className="absolute right-0 2xl:max-w-full sm:max-w-[50%] max-w-[40%]     ">
          <img
            src="./images/Man.png"
            alt=" "
            className="  relative xl:top-[24px] md:top-[34px] top-[64px] sm:h-auto h-[228px] 2xl:h-[1050px] xl:h-[821px] lg:h-[761px] md:h-[505px]  "
          />
        </div>

        <div className=" lg:mt-[200px] sm:mt-[130px] mt-[100px] 2xl:min-w-[444px] lg:max-w-[30%] sm:max-w-[40%] max-w-[50%]  2xl:pb-[200px] xl:pb-[100px] lg:pb-[80px] md:pb-[60px]  sm:pb-[50px] pb-[40px] 2xl:ml-0 lg:ml-[10%] md:ml-[5%] sm:ml-0 ml-[5%]">
          <img
            src="./images/hi2.svg"
            alt=" "
            className="  md:mb-[1px] 2xl:-ml-[5%] xl:-ml-[9%] lg:-ml-[16%] md:-ml-[18%] -ml-[7%]  md:w-auto max-w-[30%]  "
          />
          <div className=" relative flex">
            <h1 className="font-black text-[#FFFFFF] 2xl:text-[60px] xl:text-[50px] md:text-[40px] sm:text-[36px] text-[20px] xl:leading-[60px] lg:leading-[55px] md:leading-[50px] sm:leading-[40px]">
              Your Dream Job is waiting for you!
            </h1>
            <img
              src="./images/hi3.svg"
              alt=" "
              className="absolute  2xl:mt-[36%] xl:mt-[42.5%] lg:mt-[47%] md:mt-[48%] sm:mt-[43%] mt-[25%] 2xl:ml-[52%] lg:ml-[53%] md:ml-[58%] sm:ml-[60%] ml-[87%]  md:w-auto sm:max-w-[6%]  max-w-[5%]  "
            />
          </div>

          <p className="lg:mt-[32px] md:mt-[20px] sm:mt-[10px] font-light text-[#FFFFFF] sm:text-[18px] text-[14px] leading-[28px]">
            Finding a Job that matches your skills & interest is a lot easier
            now, You can browse the Jobs & apply whenever & wherever you want.
          </p>
          <div className="flex md:mt-[32px] sm:mt-[10px] ">
            <div className="space-x-[16px] flex">
              <h1 className="  font-light text-[#FFFFFF] sm:text-[18px] text-[14px] leading-[28px]">
                Remote
              </h1>
              <Toggle />
            </div>

            <div className="ml-[32px] space-x-[16px] flex">
              <h1 className="font-light text-[#FFFFFF] sm:text-[18px] text-[14px] leading-[28px]">
                Onsite
              </h1>
              <Toggle />
            </div>
          </div>
          <img
            src="./images/hi4.svg"
            alt=" "
            className=" mt-[42px] xl:w-auto max-w-[30%] "
          />
        </div>
        <div className=" absolute rounded-[8px] 2xl:left-[9.5%]  lg:left-[10%]  md:left-[5%] left-0  bg-[#FFFFFF] flex 2xl:w-[70%] xl:w-[80%] lg:w-[85%] md:w-[90%] w-[100%]   -mt-[3%] h-[112px]">
          <Buttons />
        </div>
        <div className="block  ">
          <div className="absolute  2xl:ml-[38.5%] lg:ml-[45%]  sm:ml-[40%] ml-[55%] top-[169px] lg:w-auto  max-w-[11%] ">
            <img src="./images/hi1.svg" alt=" " className="    " />
          </div>
          <div className="absolute 2xl:-ml-5 xl:ml-[7.5%] lg:ml-[6%] sm:ml-0 ml-5  2xl:top-[21%] xl:top-[29%] lg:top-[39%] md:top-[15%] sm:top-[15%] top-[23%] sm:w-auto max-w-[15%] ">
            <img src="./images/hi2.svg" alt=" " className="  hidden  " />
          </div>
          <div className="absolute 2xl:ml-[12.7%] xl:ml-[26%] lg:ml-[25.5%] md:ml-[26%] sm:ml-[13%] ml-[47%]  2xl:top-[41.2%] xl:top-[56%] lg:top-[71%] md:top-[34%] sm:top-[36%] top-[35%] sm:w-auto max-w-[2%]  ">
            <img src="./images/hi3.svg" alt=" " className=" hidden   " />
          </div>
          <div className="absolute 2xl:ml-0 lg:ml-[10%] md:ml-[5%] sm:ml-0 ml-5    2xl:top-[62%] xl:top-[89%] lg:top-[115%] md:top-[57%] sm:top-[60%] top-[62%] sm:w-auto max-w-[15%] ">
            <img src="./images/hi4.svg" alt=" " className="  hidden  " />
          </div>
          <div className="absolute lg:left-[9.5%] md:left-[5%]  2xl:top-[94%] xl:top-[120%] lg:top-[165%] md:top-[82%] sm:top-[86%] top-[100%] sm:w-auto max-w-[15%] ">
            <img src="./images/hi5.svg" alt=" " className="  hidden  " />
          </div>
          <div className="absolute right-[5%]  2xl:top-[94%] xl:top-[120%] lg:top-[165%] md:top-[82%] sm:top-[86%] top-[100%] sm:w-auto max-w-[15%] ">
            <img src="./images/hi6.svg" alt=" " className="   hidden " />
          </div>
        </div>
      </div>
    </div>
  );
}
