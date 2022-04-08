/* eslint-disable @next/next/no-img-element */
export default function Buttons() {
  return (
    <div className=" relative bg-[#FFFFFF] flex sm:w-[100%] w-[100%] h-[112px] rounded-[8px]">
      <div className="relative lg:w-[40%] w-[50%]    sm:flex justify-center items-center md:space-x-[18px]  grid grid-cols-2 grid-flow-row ">
        <img
          src="./images/Location.svg"
          alt=" "
          className=" pl-[10%] sm:w-auto max-w-[50%] sm:block hidden "
        />
        <h1 className="text-[#374151] sm:text-[18px] text-[14px] font-normal sm:block hidden ">
          Location{" "}
        </h1>
        <input
          type={"text"}
          placeholder="Enter Your Location Here!"
          className=" text-[#6B7280] sm:text-[14px] text-[12px] font-normal h-[50%] md:ml-0 sm:ml-2 sm:block hidden  "
        />

        <div className="sm:hidden flex-col ml-1 outline-none ">
          <h1 className="text-[#374151] sm:text-[18px] text-[14px] font-normal  ">
            Location{" "}
          </h1>
          <input
            className=" text-[#6B7280] sm:text-[14px] text-[12px] font-normal h-[50%] md:ml-0 sm:ml-2  border-transparent "
            type={"text"}
            placeholder="Enter Your Location Here!"
          />
        </div>
      </div>
      <div className="relative flex lg:w-[20%]  border-x-2 justify-center items-center">
        <select className="text-[#374151] sm:text-[18px] text-[14px] font-normal outline-none">
          <option>Category</option>
        </select>
      </div>
      <div className="relative flex lg:w-[20%] border-r-2 justify-center items-center ">
        <select className="text-[#374151] sm:text-[18px] text-[14px] font-normal outline-none">
          <option>Skills</option>
        </select>
      </div>
      <div className="flex lg:w-[20%] w-[25%] justify-center items-center">
        <button className=" relative  cursor-pointer bg-[#10B981] hover:border-[#585858] hover:border-b-4 sm:w-[129px] sm:h-[48px] w-[90%] h-[38px]  rounded-[8px]   leading-[20px] font-medium text-[#FFFFFF] ">
          Search
        </button>
      </div>
    </div>
  );
}
