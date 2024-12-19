import React from "react";

import logo from "@/public/assets/images/logo-login.png";
import Image from "next/image";
import Link from "next/link";

const LoginForm = () => {
  return (
    <div className=" border rounded-xl w-[600px] mx-auto bg-gray-50">
      <div className=" w-[200px] h-[60px] relative mx-auto my-4">
        <Image src={logo} alt="logo" fill />
      </div>
      <p className=" text-center text-3xl font-semibold">ورود</p>
      <form className="my-3 w-[500px] mx-auto block">
        <p className=" mt-7">ایمیل</p>
        <input
          className=" border-2 bg-transparent border-peach outline-none focus:outline-none placeholder:text-slate-800 mt-4 px-4 block py-3 w-full rounded-lg"
          type="email"
          id="email"
          placeholder="ایمیل خود را وارد کنید ..."
        />
        <p className=" mt-7">رمز عبور</p>
        <input
          className=" border-2 bg-transparent border-peach outline-none focus:outline-none placeholder:text-slate-800 mt-4 px-4 block py-3 w-full rounded-lg"
          type="password"
          id="password"
          placeholder="رمز عبور خود را وارد کنید ..."
        />

        <button
          className="bg-peach block w-[200px] text-center mx-auto mt-8 py-2 rounded-xl"
          type="submit"
        >
          ورود
        </button>
      </form>
      <div className=" flex items-center justify-start gap-2 text-sm mb-4">
        <p>ثبت نام نکرده اید ؟ </p>
        <Link className=" text-peach" href="/signup">
          ثبت نام
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
