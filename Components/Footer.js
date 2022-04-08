/* eslint-disable @next/next/no-img-element */

export default function Footer() {
  return (
    <div className="relative bg-[#1F2937] mt-[159.74px]  ">
      <h1 className="text-[#FFFFFF] text-center sm:text-[36px] text-[24px]  pt-[128px] font-extrabold">
        Contact Us
      </h1>
      <div className="flex justify-center sm:my-[56px] my-[36px]">
        <p className=" font-normal text-[#FFFFFF] sm:text-[18px] text-[16px]  lg:w-[55%] sm:w-[90%] w-[80%] text-center">
          Finding a job that matches your skills & interest is a lot easier now,
          You can browse the jobs & apply whenever & wherever you want. Finding
          a Job that matches your skills & interest is a lot easier now, You can
          browse the jobs & apply whenever & wherever you want.
        </p>
      </div>

      <div className="flex justify-center space-x-[15.54px]">
        <div className="w-[49.46px] h-[49.46px] rounded-full bg-[#374151] flex justify-center items-center">
          <img src="./images/footer.svg" alt=" " className="cursor-pointer " />
        </div>
        <div className="w-[49.46px] h-[49.46px] rounded-full bg-[#374151] flex justify-center items-center">
          <img src="./images/fi2.svg" alt=" " className=" cursor-pointer" />
        </div>
        <div className="w-[49.46px] h-[49.46px] rounded-full bg-[#374151] flex justify-center items-center">
          <img src="./images/fi3.svg" alt=" " className=" cursor-pointer" />
        </div>
        <div className="w-[49.46px] h-[49.46px] rounded-full bg-[#374151] flex justify-center items-center">
          <img src="./images/fi4.svg" alt=" " className="cursor-pointer " />
        </div>
      </div>
      <div className=" mx-auto container flex justify-center 2xl:space-x-[220px] lg:space-x-[120px] md:space-x-[30px]   sm:space-x-[10px]  mt-[88.54px] pb-[88px] sm:w-auto max-w-[90%]">
        <div className="flex justify-center items-center lg:space-x-[20px]">
          <img
            src="./images/f.svg"
            alt=" "
            className="sm:w-auto max-w-[30%] "
          />
          <p className="font-normal text-[#FFFFFF] md:text-[16px] sm:text-[14px] text-[12px]  md:text-center">
            +92-340-7909920
          </p>
        </div>
        <div className="flex justify-center items-center lg:space-x-[20px]">
          <img
            src="./images/fi5.svg"
            alt=" "
            className="sm:w-auto max-w-[20%] "
          />
          <p className="font-normal text-[#FFFFFF] md:text-[16px] sm:text-[14px] text-[12px]  md:text-center">
            Somewhere in Islamabad, Pakistan
          </p>
        </div>
        <div className="flex justify-center items-center lg:space-x-[20px]">
          <img
            src="./images/fi6.svg"
            alt=" "
            className="sm:w-auto max-w-[20%] "
          />
          <p className="font-normal text-[#FFFFFF] md:text-[16px] sm:text-[14px] text-[12px]  md:text-center">
            Someone@here.com
          </p>
        </div>
      </div>
      <div className="absolute bg-[#1F2937] right-[3%] top-[7%] 2xl:block hidden">
        <img src="./images/fi.svg" alt=" " className="    " />
      </div>
    </div>
  );
}
