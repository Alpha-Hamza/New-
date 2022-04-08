/* eslint-disable @next/next/no-img-element */

export default function Header() {
  return (
    <div className="  relative flex justify-between 2xl:left-0 xl:left-[0%] 2xl:w-[100%] sm:w-full   mt-[34px] 2xl:ml-0 lg:ml-20 md:ml-10 sm:ml-0 ml-[5%]">
      <img src="./images/Logo.svg" alt=" " className="sm:w-auto max-w-[50%] " />
      <div className="  sm:flex hidden  justify-center 2xl:space-x-[40px] xl:space-x-[56px] lg:space-x-[36px] md:space-x-[16px] sm:space-x-[12px] ">
        <button className="cursor-pointer font-inter font-semibold  leading-[20px] text-[#ffffff]">
          Product
        </button>
        <img src="./images/dots.svg" alt=" " className="w-[4%] " />

        <button className="cursor-pointer   leading-[20px] font-semibold text-[#ffffff]">
          Performance
        </button>
        <img src="./images/dots.svg" alt=" " className=" w-[4%] " />

        <button className="cursor-pointer   leading-[20px] font-medium text-[#ffffff]">
          Dashboard
        </button>
      </div>
      <button className="  cursor-pointer text-[#34D399] 2xl:ml-0 xl:-ml-10 md:ml-0 sm:mr-3 -mr-[40%]  leading-[20px] font-semibold ">
        Login
      </button>
    </div>
  );
}
