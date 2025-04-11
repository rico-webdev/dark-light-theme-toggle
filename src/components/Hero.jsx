import { useState, useEffect } from "react";

const Hero = () => {
  const [userData, setUserData] = useState([]);

  // Fetching user images from the API
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=3")
      .then((response) => response.json())
      .then((data) => {
        try {
          if (!data) {
            throw new Error("Invalid data format");
          } else {
            setUserData(data.results);
          }
        } catch (error) {
          console.error("Error fetching data:", error);
          return;
        }
      });
  }, []);

  // utility function to render stars based on rating
  const rating = 4.8;
  function renderStars(rating) {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<i key={i} className="bx bxs-star text-amber-500 mr-1"></i>);
      } else if (i > rating && i < rating + 1) {
        stars.push(
          <i key={i} className="bx bxs-star-half text-amber-500 mr-1"></i>
        );
      } else {
        stars.push(<i key={i} className="bx bx-star text-amber-500 mr-1"></i>);
      }
    }

    return stars;
  }

  return (
    <div className="isolate">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-amber-400 dark:bg-amber500 rounded-full blur-3xl opacity-20 "></div>
      </div>
      <div className="container mx-auto px-6 py-20 md:py-24 lg:py-28 xl-py-32">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 xl:gap-16">
          <div className="flex-1 space-y-6 lg:space-y-7">
            <div className="space-y-4 lg:space-y-5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-indigo-900 text-amber-400">
                  NEW
                </span>
                <p className="inline-block px-3 py-1.5 lg:px-4 lg:py-2 rounded-full bg-neutral-900 text-amber-400 font-medium text-sm backdrop-blur-sm border border-neutral-800/50 text-center">
                  <i className="bx bx-trending-up mr-1"></i>
                  Next Generation Design System
                </p>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
                <span className="block mb-1">Design</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600">
                  Without Limits
                </span>
              </h1>
              <p className="text-base lg:text-lg text-neutral-700 dark:text-neutral-300 max-w-2xl font-light">
                Elevate your web projects with our streamlined design system
                powerd by the latest Tailwind CSS v4. Create stunning user
                experiences with state-of-the-art theme switching.
              </p>
              <div className="flex gap-3 items-center">
                <div className="h-px bg-neutral-300 dark:bg-neutral-700 w-12"></div>
                <p className="uppercase text-xs tracking-widest text-neutral-500 dark:text-neutral-400 font-medium">
                  Transition seamlessly
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 lg:gap-4">
              <button className="px-6 py-3 lg:px-7 lg:py-3.5 rounded-lg bg-neutral-900 hover:bg-black text-white dark:bg-amber-500 dark:hover:bg-amber-600 dark:text-neutral-900 font-medium shadow-lg hover:shadow-neutral-900/20 dark:hover:shadow-amber-500/20 flex items-center transition group cursor-pointer">
                <i className="bx bx-code-alt mr-2 lg:mr-3 text-lg lg:text-xl group-hover:rotate-12 transition-transform"></i>
                <span>Start Coding</span>
              </button>
              <button className="px-6 py-3 lg:px-7 lg:py-3.5 rounded-lg bg-neutral-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-900 dark:text-white font-medium shadow-lg flex items-center transition group cursor-pointer border border-neutral-300 dark:border-neutral-700">
                <i className="bx bx-book-open mr-2 lg:mr-3 text-lg lg:text-xl opacity-70 group-hover:opacity-100 transition-opacity"></i>
                <span>Documentation</span>
              </button>
            </div>
            <div className="flex flex-col sm:flex-row gap-5 sm:items-center pt-6 lg:pt-7 border-t border-neutral-200 dark:border-neutral-800">
              <div className="flex -space-x-3">
                {userData &&
                  userData.map((user, index) => (
                    <img
                      key={index}
                      src={user.picture.large}
                      alt={`User ${user.name.first} ${user.name.last}`}
                      className="w-12 h-12 lg:w-15 lg:h-15 rounded-full border-2 border-white dark:border-neutral-900 objecfit-cover shadow-lg"
                    />
                  ))}
                <span className="flex items-center justify-center w-12 h-12 lg:w-15 lg:h-15 rounded-full border-2 border-white dark:border-neutral-900 text-xs font-medium bg-neutral-900 dark:bg-amber-500 text-white dark:text-neutral-900">
                  +5k
                </span>
              </div>
              <div className="space-y-1">
                <div className="flex items-center">
                  {renderStars(rating)}
                  <span className="text-neutral-600 dark:text-neutral-400 text-sm ml-1">
                    {rating}/5
                  </span>
                </div>
                <p className="text-neutral-500 dark:text-neutral-400 text-sm">
                  Trusted by{" "}
                  <span className="font-bold text-neutral-900 dark:text-white">
                    5,000+
                  </span>{" "}
                  developers worldwide
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
