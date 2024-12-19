import Image from "next/image";

const Signup = () => {
  return (
    <div>
      <div className="relative w-full h-[400px] bg-[#00000094] flex items-center justify-center">
        <Image
          className="object-cover -z-10"
          src="/assets/images/blog-5.jpg"
          fill
          alt=""
          quality={70}
        />
        <p className="text-white font-bold text-[55px] text-center">ثبت نام</p>
      </div>
      <div className="max-w-[1250px] mx-auto flex items-start justify-between gap-10 py-16"></div>
    </div>
  );
};

export default Signup;
