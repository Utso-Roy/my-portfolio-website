import React from "react";

const Blogs = () => {
  return (
    <div className="py-26  ">
      <div className=" border-t-1 border-b-1 border-dashed p-2 pb-4 pt-4">
        <div>
          <p className="text-[16px]">
            I started with simple HTML and CSS, then discovered the power of
            JavaScript. Learning React transformed how I build web apps,
            enabling me to create clean, scalable, and responsive projects. Now,
            I’m diving into full-stack development, sharpening my skills every
            day with backend technologies and problem-solving. <br /> <br />
            <span className="font-semibold">
              I’m excited to continue growing as a developer, embracing new
              challenges, and building meaningful applications that make a
              difference. This journey has only just begun!
            </span>
          </p>
        </div>

        <div>
          <img
            className="object-contain"
            src="https://i.ibb.co/Xk7qLK60/My-Journey-in-Web-Development-visual-selection-2.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
