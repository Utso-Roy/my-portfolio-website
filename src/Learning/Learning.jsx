import React from "react";
import { FaNodeJs } from "react-icons/fa";

const Learning = () => {
  return (
    <div className="py-20 bg-base-300 dark:bg-gray-800 my-5 p-5">
      <div className="  py-3">
        <h2 className="text-[22px] text-[#257DC8] font-semibold">
          {" "}
          <span className="font-bold text-2xl">Notes </span>- I am learning day
          by day
        </h2>
        <p>A learnings collections of short notes</p>
      </div>

      <div className=" border-b-1 border-t-1 py-5 border-dashed  flex gap-4 my-5">
        <div
          data-aos="fade-right"
          data-aos-duration="3000"
          className=" p-3 w-[50%] space-y-3  bg-green-500 text-base-100  font-semibold rounded-[10px]"
        >
          <h3 className="text-[20px]">
            {" "}
            Advanced Javascript functions to improve <br /> code quality
          </h3>

          <FaNodeJs size={25} />

          <p className=" text-[14px] ">
            "Leveraging advanced JavaScript techniques such as debouncing,
            currying, and modularization not only enhances code efficiency but
            also significantly improves readability and maintainability. These
            strategies streamline the development process, promoting clean,
            modular, and scalable architecture, which is essential for long-term
            project success."
          </p>
        </div>

        <div
          data-aos="fade-left"
          data-aos-duration="3000"
          className=" p-3 w-[50%] bg-[#862adb] text-base-100  space-y-3 font-semibold rounded-[10px]"
        >
          <h3 className="text-[20px]">
            RTK query and custom data fetching <br /> system
          </h3>
          <FaNodeJs size={25} />

          <p className=" text-[14px]">
            {" "}
            "Using RTK Query in conjunction with a custom data fetching system
            allows developers to manage complex state transitions with ease. RTK
            Query simplifies the process by providing built-in caching,
            automatic refetching, and seamless Redux integration, making state
            management more efficient, scalable, and maintainable."
          </p>
        </div>
      </div>
    </div>
  );
};

export default Learning;
