import React, { useContext } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router";
import { AuthContext } from "../../Context/AuthContext";

const TABLE_HEAD = [
  "Issues Title",
  "Amount",
  "Date",
  "Status",
  "Catagory",
  "Actions",
];

const MyIssues = () => {
  const { Data } = useContext(AuthContext);

  return (
    <div className="mt-8 w-11/12 mx-auto mb-8">
      <h1 className="text-4xl text-center font-bold text-green-500 pb-6">
        My Submitted Issues
      </h1>
      <p className="text-sm text-gray-500 text-center pb-10">
        View all the reports you’ve submitted.
      </p>

      <div className="overflow-x-auto rounded-lg shadow-md">
        {Data.length === 0 ? (
          <h1 className="text-center text-gray-500 py-30 font-bold text-3xl">
            No Submitted Issue Found
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
              {Data.map(
                ({ image, title, amount, date, status, category , _id}, index) => {
                  const isLast = index === Data.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-gray-200";

                  return (
                    <tr
                      key={title}
                      className="hover:bg-gray-50 transition items-center">
                      <td className={classes}>
                        <Link 
                        to={`/issues/${_id}`}
                        className="flex items-center gap-3">
                          <img
                            src={image}
                            alt={title}
                            className="w-14 h-10 rounded-md  object-cover"
                          />
                          <span className="font-semibold text-gray-800">
                            {title}
                          </span>
                        </Link>
                      </td>

                      <td className={classes}>
                        <span className="text-gray-700">${amount}</span>
                      </td>

                      <td className={classes}>
                        <span className="text-gray-700">{date}</span>
                      </td>

                      <td className={classes}>
                        <span
                          className={`px-3 py-1 text-xs font-medium rounded-full ${
                            status === "Completed"
                              ? "bg-green-100 text-green-700"
                              : status === "OnGoing"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-red-100 text-red-700"
                          }`}>
                          {status}
                        </span>
                      </td>

                      <td className={classes}>
                        <div className="flex items-center gap-3">
                          <div className=" w-12 mr-4 ">{category}</div>
                        </div>
                      </td>

                      <td className={classes}>
                        <button
                          className="p-2 rounded-md hover:bg-green-100 text-green-600 transition"
                          title="Edit">
                          <FaEdit />
                        </button>
                        <button
                          className="p-2 rounded-md hover:bg-red-100 text-red-600 transition "
                          title="Delete">
                          <MdDeleteForever size="18" />
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

export default MyIssues;
