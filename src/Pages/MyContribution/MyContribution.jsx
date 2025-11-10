import React from "react";
import { FaFileDownload } from "react-icons/fa";
import { Link } from "react-router";


const TABLE_HEAD = [
  "Issues Title",
  "Category",
  "Paid Amount",
  "Date",
  "Action",
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

const MyContribution = () => {
  return (
    <div className="mt-8 w-11/12 mx-auto">
      <h1 className="text-4xl text-center font-bold text-green-500 pb-6">
        My Contributions
      </h1>
      <p className="text-sm text-gray-500 text-center pb-10">
        A record of all your payments towards community cleanups.
      </p>

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
              ({ image, title, amount, date, category }, index) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast ? "p-4" : "p-4 border-b border-gray-200";

                return (
                  <tr
                    key={title}
                    className="hover:bg-gray-50 transition items-center bg-green-100/50">
                    <td className={classes}>
                      <Link to='/' className="flex items-center gap-3">
                        <img
                          src={image}
                          alt={title}
                          className="w-14 h-10 rounded-md object-cover"
                        />
                        <span className="font-semibold text-gray-800">
                          {title}
                        </span>
                      </Link>
                    </td>
                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        <div className="h-9 w-12  p-1 ">{category}</div>
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
      </div>
    </div>
  );
};

export default MyContribution;
