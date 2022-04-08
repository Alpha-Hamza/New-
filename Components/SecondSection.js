/* eslint-disable @next/next/no-img-element */
export default function SecondSection() {
  return (
    <div className="relative  2xl:mt-[280px] xl:mt-[160px] mt-[200px]   ">
      <div className="flex justify-center  ">
        <h1 className="text-[#10B981] sm:text-[36px] text-[24px] mb-[80px] font-extrabold">
          Explore Dream Studio
        </h1>
      </div>

      <div className=" xl:flex  mx-auto xl:justify-center grid lg:grid-rows-2 grid-rows-3 grid-flow-col  gap-x-10 gap-y-5 xl:max-w-full lg:max-w-[80%] sm:max-w-[90%] max-w-[90%]   ">
        <div className=" flex-col    active:bg-white  hover:bg-white rounded-[12px]  sm:w-[214px] sm:h-[268px] max-w-full  ">
          <h1 className="text-[24px] flex justify-center text-[black] font-bold mt-[31px]">
            Software
          </h1>
          <div className="w-[98px] h-[98px] bg-[#ffffff] drop-shadow-lg rounded-full ml-auto mr-auto flex justify-center items-center my-[34px] ">
            <img src="./images/Software.svg" alt=" " className=" " />
          </div>
          <p className="flex justify-center">View More</p>
        </div>
        <div className=" flex-col  rounded-[12px]   hover:bg-white   sm:w-[214px] sm:h-[268px] max-w-full  ">
          <h1 className="text-[24px] flex justify-center text-[black] font-bold mt-[31px]">
            Design
          </h1>
          <div className="w-[98px] h-[98px] bg-[#ffffff] drop-shadow-lg rounded-full ml-auto mr-auto flex justify-center items-center my-[34px] ">
            <img src="./images/si.svg" alt=" " className=" " />
          </div>
          <p className="flex justify-center">View More</p>
        </div>
        <div className=" flex-col active:bg-white hover:bg-white rounded-[12px]  sm:w-[214px] sm:h-[268px] max-w-full  ">
          <h1 className="text-[24px] flex justify-center text-[black] font-bold mt-[31px]">
            Finance
          </h1>
          <div className="w-[98px] h-[98px] bg-[#ffffff] drop-shadow-lg rounded-full ml-auto mr-auto flex justify-center items-center my-[34px] ">
            <img src="./images/si2.svg" alt=" " className=" " />
          </div>
          <p className="flex justify-center">View More</p>
        </div>
        <div className=" flex-col active:bg-white hover:bg-white rounded-[12px]  sm:w-[214px] sm:h-[268px] max-w-full ">
          <h1 className="text-[24px] flex justify-center text-[black] font-bold mt-[31px]">
            Photography
          </h1>
          <div className="w-[98px] h-[98px] bg-[#ffffff] drop-shadow-lg rounded-full ml-auto mr-auto flex justify-center items-center my-[34px] ">
            <img src="./images/si3.svg" alt=" " className=" " />
          </div>
          <p className="flex justify-center">View More</p>
        </div>
        <div className=" flex-col active:bg-white hover:bg-white rounded-[12px]  sm:w-[214px] sm:h-[268px] max-w-full ">
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
