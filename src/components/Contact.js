import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="bg-[#0a192f] w-full h-screen flex justify-center items-center"
    >
      <form
        method="POST"
        action="https://getform.io/f/293aab48-7802-40be-9f61-d3e2bcba185d"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8 sm:text-center mt-10">
          <p className="text-4xl border-b-2 border-pink-600 inline font-bold text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 p-4">Get in Touch</p>
        </div>
        <input
          type="text"
          placeholder="Name"
          name="name"
          className="bg-[#ccd6f6] p-2 rounded-sm"
        />
        <input
          type="email"
          placeholder="Email"
          name="name"
          className="my-4 p-2 bg-[#ccd6f6] rounded-sm"
        />
        <textarea
          name="message"
          rows="10"
          className="bg-[#ccd6f6] p-2 rounded-sm"
          placeholder="Type your message..."
        ></textarea>
        <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 mx-auto flex items-center my-8 rounded-md">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
