import React, { useEffect, useRef, useState } from "react";
import { useAxiosData } from "../Hooks/DataFetch";
import LodingSpinner from "../components/LodingSpinner";
import Card1 from "../components/Cart/Card1";
import JobNotFound from "../components/JobNotFound";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";
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
    setSelectedCategory(cat);
    setLoding(true);

    if (cat === "All") {
      apiData.get("jobs").then((res) => {
        setAlljob(res.data);
        setLoding(false);
      });
    } else {
      apiData.get(`filtersOn?filter=${cat}`).then((res) => {
        setAlljob(res.data);
        setLoding(false);
      });
    }
  };

  const haldelSort = () => {
    if (value === "Sort ascending") {
      apiData.get("sorting").then((res) => setAlljob(res.data));
    } else if (value === "Sort descending") {
      apiData.get("sorting2").then((res) => setAlljob(res.data));
    }
  };

  if (loding) return <LodingSpinner />;

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="w-11/12 mx-auto py-14">

        {/* ===== HERO SECTION ===== */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Find Your Next
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              {" "}Dream Job
            </span>
          </h1>
          <p className="mt-4 text-gray-500 text-base">
            Browse verified freelance & remote jobs tailored for your skills
          </p>

          {/* Search UI */}
          <div className="mt-8 flex items-center bg-white dark:bg-gray-900 rounded-full shadow-lg px-4 py-2">
            <Search className="text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search jobs, skills, categories..."
              className="w-full px-3 py-2 bg-transparent focus:outline-none"
            />
          </div>
        </div>

        {/* ===== STATS ===== */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {[
            { title: "Total Jobs", value: alljob.length + "+" },
            { title: "Categories", value: categories.length },
            { title: "Verified Clients", value: "100%" },
            { title: "Remote Friendly", value: "Yes" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition"
            >
              <h3 className="text-2xl font-bold text-orange-500">
                {item.value}
              </h3>
              <p className="text-sm text-gray-500 mt-1">{item.title}</p>
            </div>
          ))}
        </div>

        {/* ===== FILTER SECTION ===== */}
        <div className="bg-white/70 dark:bg-gray-900/60 backdrop-blur-xl border border-base-300 rounded-2xl p-6 shadow-xl">
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
            grabCursor
          >
            <button
              ref={prevRef}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow hover:scale-110 transition"
            >
              <ChevronLeft size={20} />
            </button>

            {categories.map((cat) => (
              <SwiperSlide key={cat} className="!w-auto">
                <button
                  onClick={() => handleSelect(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all
                  ${
                    selectedCategory === cat
                      ? "bg-gradient-to-r from-orange-400 to-orange-600 text-white shadow-lg scale-105"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  {cat}
                </button>
              </SwiperSlide>
            ))}

            <button
              ref={nextRef}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow hover:scale-110 transition"
            >
              <ChevronRight size={20} />
            </button>
          </Swiper>

          {selectedCategory === "All" && (
            <div className="mt-6">
              <select
                onClick={haldelSort}
                onChange={(e) => setValue(e.target.value)}
                className="px-4 select py-2 rounded-xl border shadow focus:ring-2 focus:ring-orange-500"
              >
                <option>Sort Now Any Type</option>
                <option>Sort ascending</option>
                <option>Sort descending</option>
              </select>
            </div>
          )}
        </div>

        {/* ===== JOB GRID ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {alljob.length === 0 ? (
            <JobNotFound />
          ) : (
            alljob.map((job) => (
              <div
                key={job._id}
                className="transition transform hover:-translate-y-2 hover:shadow-2xl"
              >
                <Card1 job={job} />
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Alljobs;
