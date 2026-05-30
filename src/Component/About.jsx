import React from "react";

const arr = [
  {
    num: "10+",
    Title: "Years Experience",
  },
  {
    num: "12+",
    Title: "Projects Completed",
  },
  {
    num: "200+",
    Title: "Happy Clients",
  },
  {
    num: "25+",
    Title: "Projects On-going",
  },
];

const About = () => {
  return (
    <section
      id="About"
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
      <div className="text-center mb-16">
        <h1
          className="
            text-3xl
            sm:text-4xl
            md:text-5xl
            font-extrabold
          "
        >
          About{" "}
          <span className="underline text-zinc-700 font-light">
            OurBrand
          </span>
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

      {/* Main Content */}
      <div
        className="
          flex
          flex-col
          lg:flex-row
          items-center
          gap-10
        "
      >
        {/* Image */}
        <div className="w-full lg:w-1/2">
          <img
            src="https://i.pinimg.com/736x/a8/97/90/a8979013f0c3fcd7e65aee39008242e3.jpg"
            alt="About"
            className="
              w-full
              h-[350px]
              sm:h-[450px]
              lg:h-[550px]
              object-cover
              rounded-2xl
              shadow-lg
            "
          />
        </div>

        {/* Content */}
        <div className="w-full lg:w-1/2">
          {/* Stats */}
          <div
            className="
              grid
              grid-cols-2
              gap-6
              mb-8
            "
          >
            {arr.map((elem) => (
              <div
                key={elem.num}
                className="
                  bg-gray-100
                  rounded-xl
                  p-5
                  text-center
                  shadow-sm
                "
              >
                <h2
                  className="
                    text-3xl
                    sm:text-4xl
                    font-bold
                    text-blue-600
                  "
                >
                  {elem.num}
                </h2>

                <p
                  className="
                    text-sm
                    sm:text-base
                    text-gray-700
                    mt-2
                  "
                >
                  {elem.Title}
                </p>
              </div>
            ))}
          </div>

          {/* Description */}
          <p
            className="
              text-gray-600
              leading-7
              text-sm
              sm:text-base
            "
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Odit dignissimos corrupti ullam cumque doloremque expedita
            alias eaque. Voluptatem officiis natus, cum itaque
            reprehenderit distinctio expedita animi exercitationem.
            Nisi, explicabo consequatur.
          </p>

          {/* Button */}
          <button
            className="
              mt-6
              bg-blue-500
              text-white
              px-6
              py-3
              rounded-lg
              hover:bg-blue-600
              active:scale-95
              transition-all
            "
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;