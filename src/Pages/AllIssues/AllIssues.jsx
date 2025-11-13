import React, { useContext, useMemo, useState } from "react";

import { AuthContext } from "../../Context/AuthContext";
import Card from "../../Components/Card";
import Loader from "../../Components/Loader";

const AllIssues = () => {
  const { Data } = useContext(AuthContext);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = useMemo(() => {
    const unique = [...new Set(Data.map((item) => item.category))];
    return ["All", ...unique];
  }, [Data]);
  const filteredData =
    selectedCategory === "All"
      ? Data
      : Data.filter((item) => item.category === selectedCategory);

  if (!Data || Data.length === 0) {
    return <Loader></Loader>;
  }
  return (
    <div className="bg-gray-50 dark:bg-gray-800">
      <div className="w-11/12 mx-auto pt-8 pb-15 bg-">
        <title>All Issues</title>
        <h1 className="text-4xl font-bold text-green-500 pb-4 text-center">
          All Reported Issues{" "}
          <span className="text-lg text-gray-500 text-center pb-10">
            ({filteredData.length})
          </span>
        </h1>
        <p className="text-sm text-gray-500 text-center pb-10">
          Browse and discover all reported cleanliness and community issues.
        </p>
        {/* 🔽 Category Filter Dropdown */}
        <div className="flex justify-center mb-8">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border border-green-400 rounded-lg px-4 py-2 text-green-600 dark:bg-gray-900 dark:text-green-400 focus:outline-none focus:ring-2 focus:ring-green-500/50">
            {categories.map((cat, index) => (
              <option key={index} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
          {filteredData.map((card) => (
            <Card card={card} key={card._id}></Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllIssues;
