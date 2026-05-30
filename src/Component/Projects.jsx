import React, { useRef } from "react";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";

const Projects = () => {
  const slider = useRef(null);

  const nextSlider = () => {
    slider.current.scrollLeft += 350;
  };

  const prevSlider = () => {
    slider.current.scrollLeft -= 350;
  };

  return (
    <section
      id="Projects"
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
      <div className="text-center">
        <h1
          className="
            text-3xl
            sm:text-4xl
            md:text-5xl
            font-extrabold
          "
        >
          Projects{" "}
          <span className="underline text-zinc-700 font-light">
            Completed
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
          Explore our recently completed real estate projects.
        </p>
      </div>

      {/* Navigation Buttons */}
      <div
        className="
          flex
          justify-end
          gap-4
          mt-10
        "
      >
        <button
          onClick={prevSlider}
          className="
            bg-gray-200
            p-3
            rounded-full
            hover:bg-blue-500
            hover:text-white
            transition-all
            active:scale-90
          "
        >
          <GrLinkPrevious size={18} />
        </button>

        <button
          onClick={nextSlider}
          className="
            bg-gray-200
            p-3
            rounded-full
            hover:bg-blue-500
            hover:text-white
            transition-all
            active:scale-90
          "
        >
          <GrLinkNext size={18} />
        </button>
      </div>

      {/* Slider */}
      <div className="mt-10">
        <div
          ref={slider}
          className="
            flex
            gap-6
            overflow-x-auto
            scroll-smooth
            scrollbar-hide
            pb-4
          "
        >
          {Propertiesdata.map((elem) => (
            <div
              key={elem.id}
              className="
                min-w-[280px]
                sm:min-w-[320px]
                md:min-w-[350px]
                bg-white
                rounded-2xl
                overflow-hidden
                shadow-lg
                hover:shadow-2xl
                transition-all
              "
            >
              {/* Image */}
              <img
                src={elem.img}
                alt={elem.title}
                className="
                  h-[220px]
                  sm:h-[260px]
                  md:h-[300px]
                  w-full
                  object-cover
                "
              />

              {/* Content */}
              <div className="p-5">
                <h2 className="text-xl font-bold">
                  {elem.title}
                </h2>

                <div className="flex justify-between mt-3">
                  <span className="text-blue-600 font-semibold">
                    {elem.price}
                  </span>

                  <span className="text-zinc-500 text-sm">
                    {elem.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

const Propertiesdata = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg",
    title: "Modern Villa",
    price: "$250,000",
    location: "New York",
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
    title: "Luxury Apartment",
    price: "$180,000",
    location: "California",
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg",
    title: "Beach House",
    price: "$320,000",
    location: "Miami",
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg",
    title: "Family Home",
    price: "$150,000",
    location: "Texas",
  },
  {
    id: 5,
    img: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg",
    title: "Luxury Penthouse",
    price: "$450,000",
    location: "Chicago",
  },
  {
    id: 6,
    img: "https://images.pexels.com/photos/280221/pexels-photo-280221.jpeg",
    title: "Classic Mansion",
    price: "$600,000",
    location: "Los Angeles",
  },
  {
    id: 7,
    img: "https://images.pexels.com/photos/462235/pexels-photo-462235.jpeg",
    title: "Smart Home",
    price: "$270,000",
    location: "Seattle",
  },
  {
    id: 8,
    img: "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg",
    title: "Countryside House",
    price: "$130,000",
    location: "Colorado",
  },
];