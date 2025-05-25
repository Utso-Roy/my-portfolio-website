import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import img from '../assets/images (3).png';
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
  draggable: true
});
        },
        (error) => {
			



			Swal.fire({
  icon: {error},
  title: "Oops...",
  text: "Failed to send message.",
});
        }
      );
      
    e.target.reset(); 
  };

  return (
    <div className="py-20 space-y-3">
      <div>
        <h2 className="font-semibold text-[20px]">Contact with me</h2>
        <p className="text-[14px]">
          Here I am waiting for your mail. Feel free to start conversation with me.
        </p>
      </div>

      <div className="border-1 border-dashed p-4">
        <div className="grid max-w-screen-4xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-100 dark:text-gray-800">
          <div>
            <div className="space-y-2">
              <h2 className="text-4xl font-bold lg:text-5xl">
                Let's <span className="text-[#016742]">talk!</span>
              </h2>
            </div>
            <img
              src={img}
              alt="Contact illustration"
              className="p-2 my-8 w-full object-contain h-48"
            />
          </div>

          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div>
              <label htmlFor="name" className="text-sm">Full name</label>
              <input
                id="name"
                name="from_name" 
                type="text"
                required
                className="w-full input p-3 rounded dark:bg-gray-100"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm">Email</label>
              <input
                id="email"
                name="from_email" 
                type="email"
                required
                className="w-full p-3 input rounded dark:bg-gray-100"
              />
            </div>
            <div>
              <label htmlFor="message" className="text-sm">Message</label>
              <textarea
                id="message"
                name="message" 
                rows="3"
                required
                className="w-full textarea p-3 rounded dark:bg-gray-100"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-[40%] btn btn-primary text-sm font-bold"
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
