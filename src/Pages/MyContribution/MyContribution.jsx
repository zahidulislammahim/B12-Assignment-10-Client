import React, { useContext } from "react";
import { FaFileDownload } from "react-icons/fa";
import { Link } from "react-router";
import { AuthContext } from "../../Context/AuthContext";

const TABLE_HEAD = [
  "Issues Title",
  "Category",
  "Paid Amount",
  "Date",
  "Action",
];

const MyContribution = () => {
  const { contributionData } = useContext(AuthContext);

  return (
    <div className="mt-8 w-11/12 mx-auto mb-8">
      <h1 className="text-4xl text-center font-bold text-green-500 pb-6">
        My Contributions
      </h1>
      <p className="text-sm text-gray-500 text-center pb-10">
        A record of all your payments towards community cleanups.
      </p>

      <div className="overflow-x-auto rounded-lg shadow-md">
        {contributionData.length === 0 ? (
          <h1 className=" text-center text-gray-500 py-30 font-bold text-3xl ">
            No Contributions Found
          </h1>
        ) : (
          <table className="w-full min-w-max table-auto text-left border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="px-4 py-3 text-sm font-semibold text-gray-600 border-b border-gray-200">
                    {head}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {contributionData.map(
                ({ image, title, amount, date, category }, index) => {
                  const isLast = index === contributionData.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-gray-200";

                  return (
                    <tr
                      key={index}
                      className="hover:bg-gray-50 transition items-center bg-green-100/50">
                      <td className={classes}>
                        <div className="flex items-center gap-3">
                          <img
                            src={image}
                            alt={title}
                            className="w-14 h-10 rounded-md object-cover"
                          />
                          <span className="font-semibold text-gray-800">
                            {title}
                          </span>
                        </div>
                      </td>
                      <td className={classes}>
                        <div className="flex items-center gap-3">
                          <div className="w-12  p-1 ">{category}</div>
                        </div>
                      </td>

                      <td className={`${classes} pl-10`}>
                        <span className="text-gray-700 ">${amount}</span>
                      </td>

                      <td className={classes}>
                        <span className="text-gray-700">{date}</span>
                      </td>
                      <td className={classes}>
                        <button
                          className="p-2 rounded-md hover:bg-green-100 text-green-600 transition"
                          title="Downlode Receipt">
                          <FaFileDownload />
                        </button>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default MyContribution;
