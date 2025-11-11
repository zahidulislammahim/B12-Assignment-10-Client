import React, { useContext } from "react";

import { AuthContext } from "../../Context/AuthContext";
import Card from "../../Components/Card";
import Loader from "../../Components/Loader";

const AllIssues = () => {
  const { Data } = useContext(AuthContext);

  if (!Data || Data.length === 0) {
    return <Loader></Loader>;
  }
  return (
    <div className="w-11/12 mx-auto mt-8 mb-15">
      <h1 className="text-4xl font-bold text-green-500 pb-4 text-center">
        All Reported Issues
      </h1>
      <p className="text-sm text-gray-500 text-center pb-10">
        Browse and discover all reported cleanliness and community issues.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {
        Data.map((card) => (
          <Card card={card} key={card._id}></Card>
        ))
        }
      </div>
    </div>
  );
};

export default AllIssues;
