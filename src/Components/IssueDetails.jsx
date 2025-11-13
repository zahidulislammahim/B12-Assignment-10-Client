import { CalendarDays, ChartColumnStacked, MapPinned } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router";
import Modal from "./Modal";

const IssueDetails = () => {
  const data = useLoaderData();
  const [openModal, setOpenModal] = useState(false);
  const [contributors, SetContributors] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/contribution/${data._id}`)
      .then((res) => res.json())
      .then((Data) => {
        SetContributors(Data);
      });
  }, [data]);

  return (
    <div className="bg-gray-50 dark:bg-gray-900/10">
      <main className="flex container mx-auto px-4 py-8 bg-">
        <title>{data.title}</title>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-2 mb-6 text-sm">
            <Link to="/" className="text-green-500 hover:underline">
              Home
            </Link>
            <span className="text-gray-500 dark:text-gray-400">/</span>
            <Link
              to="/all-issues"
              className="text-green-500 hover:underline"
              href="#">
              All Issues
            </Link>
            <span className="text-gray-500 dark:text-gray-400">/</span>
            <span className="text-gray-700  dark:text-gray-200 font-medium">
              {data.title}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-4xl font-black leading-tight tracking-tight text-gray-800 dark:text-gray-200">
                  {data.title}
                </h2>

                <div className="flex gap-3 flex-wrap mt-4">
                  <div
                    className="flex h-14 items-center justify-center gap-x-2 rounded bg-green-300/10 px-4 text-green-700 hover:bg-green-100"
                    title="Category">
                    <span className="material-symbols-outlined text-base">
                      <ChartColumnStacked />
                    </span>
                    <div>
                      <p className=" font-medium ">Category</p>
                      <p className="text-sm font-medium text-green-500">
                        {data.category}
                      </p>
                    </div>
                  </div>

                  <div className="flex h-14 items-center justify-center gap-x-2 rounded bg-green-300/10 text-green-700 px-4 hover:bg-green-100">
                    <span className="material-symbols-outlined text-base">
                      <MapPinned />
                    </span>
                    <div>
                      <p className=" font-medium">Locaton</p>
                      <p className="text-sm font-medium text-green-500">
                        {data.location}
                      </p>
                    </div>
                  </div>

                  <div className="flex h-14 items-center justify-center gap-x-2 rounded bg-green-300/10 text-green-700 px-4 hover:bg-green-100">
                    <span className="material-symbols-outlined text-base">
                      <CalendarDays />
                    </span>
                    <div>
                      <p className=" font-medium">Date</p>
                      <p className="text-sm font-medium text-green-500">
                        {data.date}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden rounded-xl min-h-100"
                alt="Image of a broken street light at night on a quiet street"
                style={{
                  backgroundImage: `url(${data.image})`,
                }}></div>

              <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-lg shadow-sm dark:shadow-gray-50/40">
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-200">Description</h3>
                <p className="text-base leading-relaxed text-gray-600 dark:text-gray-500">
                  {data.description}
                </p>
              </div>
            </div>

            <div className="lg:col-span-1 space-y-6">
              <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-lg shadow-sm sticky top-65 dark:shadow-gray-50/40">
                <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">
                  Community Contribution
                </h3>

                <div className="space-y-4">
                  <div className="flex justify-between items-baseline">
                    <span className="text-gray-600 dark:text-gray-400">Suggested Budget</span>
                    <span className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                      ${data.amount}
                    </span>
                  </div>

                  <div className="flex justify-between items-baseline">
                    <span className="text-gray-600 dark:text-gray-400">Collected</span>
                    <span className="text-xl font-bold text-green-500">
                      $350.00
                    </span>
                  </div>

                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4">
                    <div
                      className="bg-green-500 h-4 rounded-full"
                      style={{ width: "70%" }}></div>
                  </div>
                  <div className="text-right text-sm text-gray-500 dark:text-gray-400">
                    70% funded
                  </div>

                  <button
                    onClick={() => setOpenModal(true)}
                    className="w-full bg-green-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-green-500/90 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500/50 dark:focus:ring-offset-background-dark">
                    Pay Clean-Up Contribution
                  </button>
                  <Modal
                    data={data}
                    open={openModal}
                    SetContributors={SetContributors}
                    onClose={() => setOpenModal(false)}></Modal>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 mb-5">
            <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">Community Contributors</h3>
            <div className="bg-surface-light dark:bg-surface-dark rounded-lg  overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="bg-green-100 dark:bg-gray-900   text-xs uppercase text-green-500">
                    <tr>
                      <th className="px-6 py-3" scope="col">
                        Contributor
                      </th>
                      <th className="px-6 py-3 text-right" scope="col">
                        Amount
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[...contributors]
                      .sort((a, b) => b.amount - a.amount)
                      .map((Contributor, index) => (
                        <tr className="border-b border-green-500" key={index}>
                          <th
                            className="px-6 py-4 font-medium whitespace-nowrap"
                            scope="row">
                            <div className="flex items-center gap-3">
                              <img
                                className="w-10 h-10 rounded-full"
                                alt="Avatar of Jane Doe"
                                src={Contributor.contributorImg}
                              />
                              <span className="text-gray-800 dark:text-gray-200">{Contributor.name}</span>
                            </div>
                          </th>
                          <td className="px-6 py-4 text-right font-semibold text-gray-800 dark:text-gray-200">
                            ${Contributor.amount}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default IssueDetails;
