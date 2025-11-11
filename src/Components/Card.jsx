import React from "react";
import { GrMapLocation } from "react-icons/gr";
import { FaSackDollar } from "react-icons/fa6";
import { Link } from "react-router";

const Card = ({ card }) => {
  return (
    <div className="card bg-base-100  shadow-sm">
      <figure>
        <img src={card.image} alt={card.title} className="h-80 w-full" />
      </figure>
      <div className="card-body p-4">
        <h2 className="card-title md:hidden lg:block block">
          {/* {card.title} */}
          {card.title.length > 55
            ? card.title.slice(0, 55) + "..."
            : card.title}
        </h2>
        <h2 className="card-title hidden md:block lg:hidden">
          {card.title.length > 45
            ? card.title.slice(0, 40) + "..."
            : card.title}
        </h2>
        <p className="text-green-600 bg-green-100 w-fit px-2 py-1 rounded-md text-sm font-semibold">
          {card.category}
        </p>
        <div className="flex items-center gap-2 text-gray-500">
          <GrMapLocation />
          <p>{card.location}</p>
        </div>
        <div className="flex items-center gap-2 text-gray-500">
          <FaSackDollar />
          <p>${card.amount}</p>
        </div>
        <div className="card-actions  justify-center ">
          <Link
            to={`/issues/${card._id}`}
            className="btn bg-green-500 text-white rounded-2xl w-full">
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
