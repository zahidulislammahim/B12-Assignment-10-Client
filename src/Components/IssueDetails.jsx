import { CalendarDays, ChartColumnStacked, MapPinned } from "lucide-react";
import React, { useState } from "react";
import { Link, useLoaderData } from "react-router";
import Modal from "./Modal";

const IssueDetails = () => {
  const data = useLoaderData();
  const [openModal, setOpenModal] = useState(false);

  return (
    <main className="flex container mx-auto px-4 py-8">
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
          <span className="text-text-light dark:text-text-dark font-medium">
            {data.title}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="text-4xl font-black leading-tight tracking-tight ">
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
                    <p className=" font-medium">Category</p>
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

            <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-2">Description</h3>
              <p className="text-base leading-relaxed text-gray-600 ">
                {data.description}
              </p>
            </div>
          </div>

          <div className="lg:col-span-1 space-y-6">
            <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-lg shadow-sm sticky top-65">
              <h3 className="text-xl font-bold mb-4">Community Contribution</h3>

              <div className="space-y-4">
                <div className="flex justify-between items-baseline">
                  <span className="text-gray-600 ">Suggested Budget</span>
                  <span className="text-2xl font-bold text-text-light dark:text-text-dark">
                    ${data.amount}
                  </span>
                </div>

                <div className="flex justify-between items-baseline">
                  <span className="text-gray-600 ">Collected</span>
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
                  onClose={() => setOpenModal(false)}></Modal>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 mb-5">
          <h3 className="text-2xl font-bold mb-4">Community Contributors</h3>
          <div className="bg-surface-light dark:bg-surface-dark rounded-lg  overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="bg-green-100  text-xs uppercase text-green-500">
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
                  <tr className="border-b border-green-500">
                    <th
                      className="px-6 py-4 font-medium whitespace-nowrap"
                      scope="row">
                      <div className="flex items-center gap-3">
                        <img
                          className="w-10 h-10 rounded-full"
                          alt="Avatar of Jane Doe"
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCinus9gOY_960gvsqYONMzs0PcW-7S-NNGLNt2XVm8E23xZR_miPzOvHd4cWDPqjxvpcU3dTnFJSH8yfD0KwgrmjQZeVx1ed0yB3Jj68o6CawtIJIfJSkzZwK3uGLQH5Y_2WxwmlVfnYWyRlaXWcm6NhM5g2ftNJdF-UfI5lHFoyEExD4rQYyXIct1p7tUa3DRseugtqzj_LCH8EPRZli1_0GP_FO4hwJs6_vy52PHx9X1jMMHCHx_Rqj-DoM6eSgubdZDoeayt72X"
                        />
                        <span>Jane Doe</span>
                      </div>
                    </th>
                    <td className="px-6 py-4 text-right font-semibold">
                      $50.00
                    </td>
                  </tr>

                  <tr className="border-b border-green-500">
                    <th
                      className="px-6 py-4 font-medium whitespace-nowrap"
                      scope="row">
                      <div className="flex items-center gap-3">
                        <img
                          className="w-10 h-10 rounded-full"
                          alt="Avatar of John Smith"
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuALbg6E8rrpyL6QaFzToKSTq3QNUzl1j-HkKf9SFR8_-_7axXvaunBKD5jANDo4y8ygcQP-Lm4jPCIPh_05qJMQIRaIWOGzTsV-Ylp5qNXSYzmi3dwNOw-GJB3OUGX2UNyyQHELPAe24CoM5cESxT5VJjeAs3q_UjrqObyrQ9iZU2GIkmMZVsDpMX8ZSaGJPSkbeuSe0tLxXmVoEBcwu-ErTUx4GoEoYFmVaK7JqbrXILgVah3d14KiSjSAgW3QDE3f7bCe47IfSRWV"
                        />
                        <span>John Smith</span>
                      </div>
                    </th>
                    <td className="px-6 py-4 text-right font-semibold">
                      $100.00
                    </td>
                  </tr>

                  <tr className="border-b border-green-500">
                    <th
                      className="px-6 py-4 font-medium whitespace-nowrap"
                      scope="row">
                      <div className="flex items-center gap-3">
                        <img
                          className="w-10 h-10 rounded-full"
                          alt="Avatar of Samantha Lee"
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9LL884qj0IOS_XC94-IrOiL1iE89bDsGb_W1EvPIJySEjBrjuNR6r7d2_Puh2YrLdyqAJ8_eIIODsAlpstDAIjONWp9s0dl_dvZi3KHc20MmdEprm5DxQ4E-EWJmEQvalJ5OuGkJXeTNSqJIju85_-c9Q5ZzM5Fu-oBVMqZmwSJuNz0B7FJNaLzFCOvFYlDwrPui490cL215HuH6BL5mFS-k9ylwYxUzqV34IW41k1WVk0V_bKm1RDtrcVB5oUbx8jPLTBkaXPbzG"
                        />
                        <span>Samantha Lee</span>
                      </div>
                    </th>
                    <td className="px-6 py-4 text-right font-semibold">
                      $25.00
                    </td>
                  </tr>

                  <tr className="border-b border-green-500">
                    <th
                      className="px-6 py-4 font-medium whitespace-nowrap"
                      scope="row">
                      <div className="flex items-center gap-3">
                        <img
                          className="w-10 h-10 rounded-full"
                          alt="Avatar of Michael Chen"
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0JExp9z1TIilm4XRxIb-dtrUZRhT3a86y4ssQECYzFQpEEGxb0dSbNUGe9FD6QeR1gszBlFIcmJLJNHiqPL3Dbq-v7nXLLWOYjANQmdFofMWuVC3Js5GlUVdGQUS_2TWzzBuxJYMKOvw1G6UYxjE2z2wBbTuke6oQoDL-j5RfO8zZihdYv0dv21T0H2oAh-m76F8P7McFmsk3WVahbT-Xhq_bGIMb3IpeBG3r_SatZS-3H2fxOKz1GJZx0Euo0KheoUUKt8Vu9oGD"
                        />
                        <span>Michael Chen</span>
                      </div>
                    </th>
                    <td className="px-6 py-4 text-right font-semibold">
                      $175.00
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default IssueDetails;
