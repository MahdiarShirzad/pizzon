import React from "react";

const ContactUsFrom = () => {
  return (
    <form>
      <input
        className="mt-16 border-gray-800 border w-4/5 px-6 py-4 placeholder:text-sm focus:outline-none focus:border-peach"
        type="email"
        name="email"
        placeholder="ایمیل"
      />
      <input
        className="mt-10 border-gray-800 border w-4/5 px-6 py-4 placeholder:text-sm focus:outline-none focus:border-peach"
        type="text"
        name="subject"
        placeholder="موضوع"
      />
      <input
        className="mt-10 border-gray-800 border w-4/5 px-6 py-4 placeholder:text-sm focus:outline-none focus:border-peach"
        type="text"
        name="phone"
        placeholder="تلفن"
      />
      <textarea
        className="mt-10 min-h-[180px] border-gray-800 border w-4/5 px-6 py-4 placeholder:text-sm focus:outline-none focus:border-peach"
        type="text"
        name="message"
        placeholder="پیام"
      ></textarea>
      <button
        type="submit"
        className="text-white w-4/5 mt-6 py-2 block text-center rounded-full bg-peach"
      >
        ارسال پیام
      </button>
    </form>
  );
};

export default ContactUsFrom;
