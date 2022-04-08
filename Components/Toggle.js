export default function Toggle() {
  return (
    <div className="relative justify-between  text-xl w-[50px] h-[24px] flex items-center     pl-[2px] bg-[#FFFFFF] rounded-full">
      <input
        type="checkbox"
        className="absolute left-1/2 -translate-x-1/2 w-full h-full peer appearance-none  peer-checked:bg-green-400 cursor-pointer    "
      />
      <span className="   w-[20px] h-[20px] bg-[#6B7280] peer-checked:bg-[#10B981] rounded-full shadow-md duration-200  peer-checked:translate-x-6 ease-in-out cursor-pointer  "></span>
    </div>
  );
}
