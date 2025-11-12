import React, { useEffect, useRef, useState } from "react";
import { useAxiosData } from "../Hooks/DataFetch";
import LodingSpinner from "../components/LodingSpinner";
import Card1 from "../components/Cart/Card1";
import JobNotFound from "../components/JobNotFound";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const categories = [
  "All",
  "Web Development",
  "Mobile App Development",
  "Graphics Designing",
  "Digital Marketing",
  "Content Writing",
  "Video Editing",
  "UI/UX Design",
];

const Alljobs = () => {
  const [alljob, setAlljob] = useState([]);
  const [loding, setLoding] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [value, setValue] = useState("");
  const apiData = useAxiosData();
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    setLoding(true);
    apiData.get("jobs").then((result) => {
      setAlljob(result.data);
      setLoding(false);
    });
  }, [apiData]);

  const handleSelect = (cat) => {
    if (cat === "All") {
      setLoding(true);
      apiData.get("jobs").then((result) => {
        setAlljob(result.data);
        setLoding(false);
      });
    }

    setLoding(true);
    setSelectedCategory(cat);
    apiData.get(`filtersOn?filter=${cat}`).then((result) => {
      console.log("respon for server", result.data);
      setAlljob(result.data);
      setLoding(false);
    });
  };

  const haldelSort = () => {
    if (value === "Sort ascending") {
      apiData.get("sorting").then((result) => {
        // console.log("Sorting data", result.data);
        setAlljob(result.data);
      });
      console.log("Data");
    } else if (value === "Sort descending") {
      apiData.get("sorting2").then((result) => {
        // console.log("Sorting data", result.data);
        setAlljob(result.data);
      });
      console.log(value);
    }
  };

  if (loding) {
    return <LodingSpinner></LodingSpinner>;
  }

  return (
    <div className=" bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="w-11/12 mx-auto mb-25 ">
        <div className="pt-5">

      <div className="bg-gray-100 dark:bg-gray-900 p-5 py-7 rounded-lg">
  <h3 className="text-xl font-semibold">
    Chougs Your <span className="text-orange-400">Favorite Jobs</span>
  </h3>

  <div className="flex flex-col mt-3.5 gap-3">
    {/* Swiper with Arrows Inside */}
    <div className="relative ">
      {/* Swiper Container */}
      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        spaceBetween={12}
        slidesPerView="auto"
        grabCursor={true}
        className="py-5"
      >
        {/* Left Arrow (inside Swiper) */}
        <div className="absolute left-2 top-1/2 -translate-y-1/2 z-10">
          <button
            ref={prevRef}
            className="p-2 bg-white dark:bg-gray-800 shadow-lg rounded-full hover:scale-110 transition transform"
          >
            ◀
          </button>
        </div>

        {/* Category Buttons */}
        {categories.map((cat) => (
          <SwiperSlide key={cat} className="!w-auto">
            <button
              onClick={() => handleSelect(cat)}
              className={`px-5 py-2 border-orange-400 whitespace-nowrap rounded-full text-sm font-medium border transition
                ${
                  selectedCategory === cat
                    ? "bg-orange-500 text-white border-orange-600"
                    : "bg-gray-100 border-gray-300 hover:bg-gray-200 dark:text-black"
                }`}
            >
              {cat}
            </button>
          </SwiperSlide>
        ))}

        {/* Right Arrow (inside Swiper) */}
        <div className="absolute right-2 top-1/2 -translate-y-1/2 z-10">
          <button
            ref={nextRef}
            className="p-2 bg-white dark:bg-gray-800 shadow-lg rounded-full hover:scale-110 transition transform"
          >
            ▶
          </button>
        </div>
      </Swiper>
    </div>

    {/* Sorting Section */}
    {selectedCategory === "All" && (
      <div>
        <div onClick={haldelSort}>
          <select
            onChange={(e) => setValue(e.target.value)}
            defaultValue="Sort Now Any Type"
            className="dark:bg-white select mt-2 w-full max-w-xs focus:outline-none rounded-xl backdrop-blur shadow-lg border border-gray-200 
              focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition text-black/86"
          >
            <option>Sort Now Any Type</option>
            <option>Sort ascending</option>
            <option>Sort descending</option>
          </select>
        </div>
      </div>
    )}
  </div>
</div>

        </div>
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-7 mt-10 ">
          {alljob.length === 0 ? (
            <JobNotFound></JobNotFound>
          ) : (
            alljob.map((job) => <Card1 job={job} key={job._id}></Card1>)
          )}
        </div>
      </div>
    </div>
  );
};

export default Alljobs;
