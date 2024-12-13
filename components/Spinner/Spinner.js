// "use server";

import spinner from "@/public/assets/images/spinner.gif";
import Image from "next/image";

const Spinner = () => {
  return (
    <div className=" flex items-center justify-center pt-20">
      <Image className=" w-[200px] h-[200px]" src={spinner} alt="" />
    </div>
  );
};

export default Spinner;
