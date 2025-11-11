import React, { useEffect, useState } from "react";
import { useAxiosData } from "../Hooks/DataFetch";
import LodingSpinner from "../components/LodingSpinner";
import Card1 from "../components/Cart/Card1";
import NotFound from "../assets/noJobFound.png";

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
  const apiData = useAxiosData();

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

  if (loding) {
    return <LodingSpinner></LodingSpinner>;
  }

  return (
    <div className=" bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="w-11/12 mx-auto mb-25 ">
        {/* Catagory Data Fetch */}
        <div>
          <div className="flex flex-wrap gap-3 py-5 bg-orange-100">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleSelect(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition
                  ${
                    selectedCategory === cat
                      ? "bg-orange-500 text-white border-orange-600"
                      : "bg-gray-100  border-gray-300 hover:bg-gray-200 dark:text-black"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-7 mt-10 ">
          {alljob.length === 0 ? (
            <div className="flex justify-center items-center min-h-screen">
              <img src={NotFound}></img>
            </div>
          ) : (
            alljob.map((job) => <Card1 job={job} key={job._id}></Card1>)
          )}
        </div>
      </div>
    </div>
  );
};

export default Alljobs;
