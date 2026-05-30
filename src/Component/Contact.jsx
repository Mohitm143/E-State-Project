import React from "react";

const Contact = () => {
  return (
    <section
      id="Contact"
      className="
        min-h-screen
        py-16
        px-4
        sm:px-6
        md:px-10
        lg:px-20
      "
    >
      {/* Heading */}
      <div className="text-center mb-12">
        <h1
          className="
            text-3xl
            sm:text-4xl
            md:text-5xl
            font-extrabold
          "
        >
          Contact Us
        </h1>

        <p
          className="
            text-zinc-500
            mt-3
            text-sm
            sm:text-base
          "
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>

      {/* Form */}
      <div
        className="
          max-w-4xl
          mx-auto
          bg-white
          shadow-lg
          rounded-2xl
          p-6
          sm:p-8
        "
      >
        {/* Name & Email */}
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-6
          "
        >
          {/* Name */}
          <div>
            <label className="block mb-2 font-semibold">
              Your Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              className="
                w-full
                border-2
                border-gray-300
                rounded-lg
                px-4
                py-3
                outline-none
                focus:border-blue-500
              "
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 font-semibold">
              Your Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="
                w-full
                border-2
                border-gray-300
                rounded-lg
                px-4
                py-3
                outline-none
                focus:border-blue-500
              "
            />
          </div>
        </div>

        {/* Message */}
        <div className="mt-6">
          <label className="block mb-2 font-semibold">
            Your Message
          </label>

          <textarea
            rows="6"
            placeholder="Write your message here..."
            className="
              w-full
              border-2
              border-gray-300
              rounded-lg
              px-4
              py-3
              outline-none
              resize-none
              focus:border-blue-500
            "
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center mt-8">
          <button
            className="
              bg-blue-500
              hover:bg-blue-600
              text-white
              px-8
              py-3
              rounded-xl
              font-semibold
              transition-all
              duration-300
              hover:scale-105
              active:scale-95
            "
          >
            Submit
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;