import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router";

const TABLE_HEAD = [
  "Issues Title",
  "Amount",
  "Date",
  "Status",
  "Catagory",
  "Actions",
];

const TABLE_ROWS = [
  {
    title: "Overflowing garbage on Road 21",
    category: "Garbage",
    location: "Mohakhali, Dhaka",
    description:
      "For the past five consecutive days, the municipal waste collection ser…",
    image:
      "https://thumbs.dreamstime.com/b/compelling-image-starkly-portrays-consequences-inadequate-waste-management-overflowing-garbage-bin-situated-dirty-382132815.jpg",
    amount: 200,
    email: "resident.mohakhali@mail.com",
    date: "2025-10-26",
    status: "paid",
  },
  {
    title: "Overflowing garbage on Road 21",
    category: "Garbage",
    location: "Mohakhali, Dhaka",
    description:
      "For the past five consecutive days, the municipal waste collection ser…",
    image:
      "https://thumbs.dreamstime.com/b/compelling-image-starkly-portrays-consequences-inadequate-waste-management-overflowing-garbage-bin-situated-dirty-382132815.jpg",
    amount: 200,
    email: "resident.mohakhali@mail.com",
    date: "2025-10-26",
    status: "paid",
  },
  {
    title: "Overflowing garbage on Road 21",
    category: "Garbage",
    location: "Mohakhali, Dhaka",
    description:
      "For the past five consecutive days, the municipal waste collection ser…",
    image:
      "https://thumbs.dreamstime.com/b/compelling-image-starkly-portrays-consequences-inadequate-waste-management-overflowing-garbage-bin-situated-dirty-382132815.jpg",
    amount: 200,
    email: "resident.mohakhali@mail.com",
    date: "2025-10-26",
    status: "OnGoing",
  },
];

const MyIssues = () => {
  return (
    <div className="mt-8 w-11/12 mx-auto">
      <h1 className="text-4xl text-center font-bold text-green-500 pb-6">
        My Submitted Issues
      </h1>

      <div className="overflow-x-auto rounded-lg shadow-md">
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
            {TABLE_ROWS.map(
              ({ image, title, amount, date, status, category }, index) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast ? "p-4" : "p-4 border-b border-gray-200";

                return (
                  <tr
                    key={title}
                    className="hover:bg-gray-50 transition items-center">
                    <td className={classes}>
                      <Link to="/" className="flex items-center gap-3">
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
                        <div className="h-9 w-12  p-1 ">{category}</div>
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
      </div>
    </div>
  );
};

export default MyIssues;
