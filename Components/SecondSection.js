/* eslint-disable @next/next/no-img-element */
export default function SecondSection() {
  return (
    <div className="relative  2xl:mt-[280px] xl:mt-[200px] mt-[200px]   ">
      <div className="flex justify-center  ">
        <img
          src="./images/hi5.svg"
          alt=" "
          className="  absolute left-[10%] sm:-mt-[4%] -mt-[20%]  lg:w-auto   sm:max-w-[15%] max-w-[20%]   "
        />

        <h1 className="text-[#10B981] 2xl:mt-[2%] xl:mt-[5%] lg:text-[36px] md:text-[30px] text-[24px] mb-[50px] font-extrabold">
          Explore Dream Studio
        </h1>
        <img
          src="./images/hi6.svg"
          alt=" "
          className=" absolute right-[5%] sm:-mt-[4%] -mt-[20%] lg:w-auto  md:max-w-[15%] sm:max-w-[10%] max-w-[15%]    "
        />
      </div>

      <div className="mx-auto  xl:flex xl:justify-center grid lg:grid-rows-2 sm:grid-rows-3 grid-rows-5 grid-flow-col  2xl:gap-x-0  lg:gap-x-10 gap-y-5 xl:max-w-[80%] lg:max-w-[80%] sm:max-w-[90%] max-w-[90%]   ">
        <div className=" flex-col mx-auto   active:bg-white  hover:bg-white rounded-[12px]  w-[214px] h-[268px]   ">
          <h1 className="text-[24px] flex justify-center text-[black] font-bold mt-[31px]">
            Software
          </h1>
          <div className="w-[98px] h-[98px] bg-[#ffffff] drop-shadow-lg rounded-full ml-auto mr-auto flex justify-center items-center my-[34px] ">
            <img src="./images/Software.svg" alt=" " className=" " />
          </div>
          <p className="flex justify-center">View More</p>
        </div>
        <div className=" flex-col mx-auto  rounded-[12px]   hover:bg-white   w-[214px] h-[268px]   ">
          <h1 className="text-[24px] flex justify-center text-[black] font-bold mt-[31px]">
            Design
          </h1>
          <div className="w-[98px] h-[98px] bg-[#ffffff] drop-shadow-lg rounded-full ml-auto mr-auto flex justify-center items-center my-[34px] ">
            <img src="./images/si.svg" alt=" " className=" " />
          </div>
          <p className="flex justify-center">View More</p>
        </div>
        <div className=" flex-col mx-auto active:bg-white hover:bg-white rounded-[12px]  w-[214px] h-[268px]   ">
          <h1 className="text-[24px] flex justify-center text-[black] font-bold mt-[31px]">
            Finance
          </h1>
          <div className="w-[98px] h-[98px] bg-[#ffffff] drop-shadow-lg rounded-full ml-auto mr-auto flex justify-center items-center my-[34px] ">
            <img src="./images/si2.svg" alt=" " className=" " />
          </div>
          <p className="flex justify-center">View More</p>
        </div>
        <div className=" flex-col mx-auto active:bg-white hover:bg-white rounded-[12px]  w-[214px] h-[268px] ">
          <h1 className="text-[24px] flex justify-center text-[black] font-bold mt-[31px]">
            Photography
          </h1>
          <div className="w-[98px] h-[98px] bg-[#ffffff] drop-shadow-lg rounded-full ml-auto mr-auto flex justify-center items-center my-[34px] ">
            <img src="./images/si3.svg" alt=" " className=" " />
          </div>
          <p className="flex justify-center">View More</p>
        </div>
        <div className=" flex-col mx-auto active:bg-white hover:bg-white rounded-[12px]  w-[214px] h-[268px]  ">
          <h1 className="text-[24px] flex justify-center text-[black] font-bold mt-[31px]">
            Management
          </h1>
          <div className="w-[98px] h-[98px] bg-[#ffffff] drop-shadow-lg rounded-full ml-auto mr-auto flex justify-center items-center my-[34px] ">
            <img src="./images/Software.svg" alt=" " className=" " />
          </div>
          <p className="flex justify-center">View More</p>
        </div>
      </div>
    </div>
  );
}
