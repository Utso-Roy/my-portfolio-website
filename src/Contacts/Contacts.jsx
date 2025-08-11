import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import img from "../assets/images (3).png";
import Swal from "sweetalert2";

const Contacts = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_j3ch9pm', 'template_g3gu8nf', form.current, {
        publicKey: 'LusYBcSZEa1SxHcQN',
      })
      .then(
        () => {
          Swal.fire({
            title: "Message sent successfully!",
            icon: "success",
            draggable: true,
          });
        },
        (error) => {
          console.log(error)
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Failed to send message.",
          });
        }
      );

    e.target.reset();
  };

  return (
    <div className="py-20 bg-base-200 dark:bg-gray-800 my-2 space-y-6">
      <div className="text-center">
        <h2 className="text-xl md:text-2xl font-semibold text-[#257DC8]">
          Contact With Me
        </h2>
        <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
          I'm waiting for your mail. Feel free to start a conversation.
        </p>
      </div>

      <div className="border border-dashed border-gray-300 dark:border-gray-600 p-4 rounded-lg">
        <div className="grid max-w-6xl grid-cols-1 gap-8 px-4 py-12 mx-auto rounded-lg md:grid-cols-2 md:px-10 lg:px-20 dark:bg-gray-900 bg-white text-gray-900 dark:text-white shadow-lg">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Let’s <span className="text-[#257DC8]">Talk!</span>
            </h2>
            <img
              src={img}
              alt="Contact illustration"
              className="w-full h-56 object-contain rounded"
            />
          </div>

          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div>
              <label htmlFor="name" className="text-sm">Full Name</label>
              <input
                id="name"
                name="from_name"
                type="text"
                required
                className="w-full p-3 rounded input input-bordered bg-base-100"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm">Email</label>
              <input
                id="email"
                name="from_email"
                type="email"
                required
                className="w-full p-3 rounded input input-bordered bg-base-100"
              />
            </div>
            <div>
              <label htmlFor="message" className="text-sm">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                className="w-full p-3 rounded textarea textarea-bordered bg-base-100"
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn btn-outline text-[#0267af] hover:bg-[#0267af] hover:text-white  w-[50%]"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
