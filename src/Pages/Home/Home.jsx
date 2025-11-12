import React, { useContext } from "react";
import HeroSlider from "./HeroSlider";
import { Construction, Pickaxe, SignpostBig, Trash2 } from "lucide-react";
import { AuthContext } from "../../Context/AuthContext";
import { GrMapLocation } from "react-icons/gr";
import { FaSackDollar } from "react-icons/fa6";
import { Link } from "react-router";
import bgImage from "../../assets/callToAction.jpg";

const Home = () => {
  const { Data } = useContext(AuthContext);

  const sortedData = [...Data]
    .sort((a, b) => new Date(b.createdTime) - new Date(a.createdTime))
    .slice(0, 6);

  console.log(sortedData);

  return (
    <div>
      <title>Community Cleanliness - Home</title>
      <HeroSlider></HeroSlider>
      <div className="bg-gray-50 w-full">
        <div className="max-w-6xl mx-auto py-10 px-5 bg-gray-50">
          <h2 className="text-4xl font-bold text-green-500 pb-4 text-center mb-5">
            Report an Issue
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 *:transition-shadow *:duration-300 *:hover:shadow-lg *:hover:shadow-gray-300">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trash2 />
              </div>
              <h3 className="text-gray-900 font-semibold mb-2 text-sm">
                Garbage
              </h3>
              <p className="text-gray-600 text-xs">
                Report unattended waste or illegal dumping.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Construction />
              </div>
              <h3 className="text-gray-900 font-semibold mb-2 text-sm">
                Illegal Construction
              </h3>
              <p className="text-gray-600 text-xs">
                Report unauthorized building activities.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Pickaxe />
              </div>
              <h3 className="text-gray-900 font-semibold mb-2 text-sm">
                Broken Public Property
              </h3>
              <p className="text-gray-600 text-xs">
                Report damaged benches, lights, or signs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <SignpostBig />
              </div>
              <h3 className="text-gray-900 font-semibold mb-2 text-sm">
                Road Damage
              </h3>
              <p className="text-gray-600 text-xs">
                Report potholes and other road hazards.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 py-8 ">
        <div className="max-w-5xl mx-auto  justify-around text-center px-4 grid grid-cols-1 md:grid-cols-3 ">
          <div>
            <p className="text-green-600 font-bold text-6xl">12,500+</p>
            <p className="text-gray-700 text-lg mt-1">Registered Users</p>
          </div>

          <div>
            <p className="text-green-600 font-bold text-6xl">8,230</p>
            <p className="text-gray-700 text-lg mt-1">Issues Resolved</p>
          </div>

          <div>
            <p className="text-orange-500 font-bold text-6xl">1,105</p>
            <p className="text-gray-700 text-lg mt-1">Issues Pending</p>
          </div>
        </div>
      </div>
      <div className=" py-10 px-5 bg-gray-50">
        <h2 className="text-4xl font-bold text-green-500 pb-4 text-center mb-5">
          Recent Complaints
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-11/12 mx-auto">
          {sortedData.map((card, index) => (
            <div
              className="card bg-base-100 shadow-sm issues-card h-full transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-300"
              key={index}>
              <div className="card-body p-4 flex flex-col justify-between h-full">
                <div>
                  <p className="text-green-600 bg-green-100 w-fit px-2 py-1 rounded-md text-sm font-semibold">
                    {card.category}
                  </p>

                  <h2 className="card-title mt-2">{card.title}</h2>
                  <div className="flex items-center gap-2 text-green-700 mt-2 mb-3">
                    <GrMapLocation />
                    <p>{card.location}</p>
                  </div>

                  <div className="flex items-center gap-2 text-gray-400">
                    <p>
                      {card.description.length > 200
                        ? card.description.slice(0, 200) + "..."
                        : card.description}
                    </p>
                  </div>
                </div>

                <div className="card-actions justify-center mt-auto pt-4">
                  <Link
                    to={`/issues/${card._id}`}
                    className="btn bg-green-500 text-white rounded-2xl w-full">
                    See Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        className="relative bg-cover bg-center h-120 flex items-center justify-center "
        style={{
          backgroundImage: `url(${bgImage})`,
        }}>
        <div className="absolute inset-0 bg-black/50 bg-opacity-60"></div>

        <div className="relative text-center max-w-5xl mx-auto px-4">
          <h1 className="text-white font-bold text-4xl md:text-5xl  lg:md:text-6xl mb-4">
            Be the Change in Your Community
          </h1>
          <p className="text-white mb-6 text-sm md:text-base max-w-3xl mx-auto">
            Join hands with your neighbors to create a cleaner, safer, and more
            beautiful environment for everyone. Volunteer for our next clean
            drive event.
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-5 rounded shadow-md transition-colors duration-300">
            Join a Clean Drive
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
