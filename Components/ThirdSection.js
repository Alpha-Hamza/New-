/* eslint-disable @next/next/no-img-element */

export default function ThirdSection() {
  return (
    <div className="mx-auto container 2xl:mt-[335px] xl:mt-[300px]  lg:mt-[200px] md:mt-[150px] sm:mt-[120px] mt-[0px] flex justify-between items-center  ">
      <div className="absolute left-0 xl:max-w-full md:max-w-[50%] sm:max-w-[55%] max-w-[45%]">
        <img src="./images/Aim.png" alt=" " className=" sm:h-auto h-[300px]" />
        <div className="absolute top-[10%] left-[10%] ">
          <img
            src="./images/hi1.svg"
            alt=" "
            className=" md:max-w-full sm:max-w-[70%] max-w-[50%]   "
          />
        </div>
        <div className="absolute left-[5%] mt-[5%] xl:w-auto lg:max-w-[30%] md:w-auto sm:max-w-[50%] max-w-[60%] ">
          <img src="./images/fri2.svg" alt=" " className="    " />
        </div>
      </div>
      <div className=" ml-auto  lg:mr-20 sm:mr-0 mr-2 sm:mt-0 mt-[25%]    flex-col 2xl:w-[27%] xl:w-[31%] lg:w-[35%]   sm:max-w-[40%] max-w-[50%]  ">
        <img src="./images/ti2.svg" alt=" " className=" mb-[5%] sm:w-auto max-w-[25%]   " />

        <h1 className="font-extrabold xl:text-[36px] lg:text-[32px] sm:text-[24px]  text-[#111827]">
          How to Explore the Best Opportunites for Yourself?
        </h1>
        <p className="font-normal xl:text-[18px] lg:text-[16px] md:text-[16px] sm:text-auto text-[14px]  leading-[28px] text-[#374151] mt-[20px] ">
          Finding a Job that matches your skills & interest is a lot easier now,
          You can browse the Jobs & apply whenever & wherever you want.
        </p>
        <div className="grid grid-rows-2 grid-flow-col ">
          <div className="flex  items-center">
            <img
              src="./images/ti3.svg"
              alt=" "
              className="sm:w-auto max-w-[30%] "
            />

            <div className="flex-col mt-[25px] ml-[12px] ">
              <h1 className="font-extrabold xl:text-[36px] lg:text-[32px] sm:text-auto text-[14px]  text-[#374151]">
                5000+
              </h1>

              <p className="font-normal xl:text-[18px] lg:text-[16px] sm:text-auto text-[12px]   text-[#374151]">
                Total Jobs
              </p>
            </div>
          </div>
          <div className="flex  items-center">
            <img
              src="./images/ti4.svg"
              alt=" "
              className=" sm:w-auto max-w-[30%]  "
            />

            <div className="flex-col mt-[25px] ml-[12px] ">
              <h1 className="font-extrabold xl:text-[36px] lg:text-[32px] sm:text-auto text-[14px]   text-[#374151]">
                2000+
              </h1>

              <p className="font-normal xl:text-[18px] lg:text-[16px] sm:text-auto text-[12px]   text-[#374151]">
                Total Seekers
              </p>
            </div>
          </div>
          <div className="flex  items-center">
            <img
              src="./images/Frame.svg"
              alt=" "
              className=" sm:w-auto max-w-[30%]  "
            />

            <div className="flex-col mt-[25px] ml-[12px]">
              <h1 className="font-extrabold xl:text-[36px] lg:text-[32px] sm:text-auto text-[14px]   text-[#374151]">
                80+
              </h1>

              <p className="font-normal xl:text-[18px] lg:text-[16px]  sm:text-auto text-[12px]   text-[#374151]">
                Total Employees
              </p>
            </div>
          </div>
          <div className="flex  items-center">
            <img
              src="./images/ti5.svg"
              alt=" "
              className=" sm:w-auto max-w-[30%]  "
            />

            <div className="flex-col mt-[25px] ml-[12px] ">
              <h1 className="font-extrabold xl:text-[36px] lg:text-[32px] sm:text-auto text-[14px]   text-[#374151]">
                5 years
              </h1>

              <p className="font-normal xl:text-[18px] lg:text-[16px]  sm:text-auto text-[12px]  text-[#374151]">
                Total Experience
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute 2xl:right-[10%] right-[5%] 2xl:mb-[40%] xl:mb-[50%] lg:mb-[57%] md:mb-[66%] sm:mb-[82%] mb-[106%] md:w-auto sm:max-w-[15%]  max-w-[15%]   ">
        <img src="./images/ti1.svg" alt=" " className="    " />
      </div>
    </div>
  );
}
