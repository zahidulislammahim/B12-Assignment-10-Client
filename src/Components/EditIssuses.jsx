import React, { useState } from "react";
import { useLoaderData, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { FaDollarSign } from "react-icons/fa";

const EditIssuses = () => {
  const data = useLoaderData();
  const navegate = useNavigate();
  const categories = [
    "Garbage Management",
    "Roads & Transport",
    "Water & Drainage",
    "Electricity",
    "Environment",
    "Traffic & Signals",
    "Public Safety",
    "Education & Health",
    "Business & Commerce",
    "Parks & Recreation",
    "Infrastructure Development",
  ];
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedstatus, setSelectedStatus] = useState("");
  const status = ["Ongoing", "Ended"];

  const handelAddIssues = (e) => {
    e.preventDefault();
    const updateIssuesData = {
      title: e.target.title.value,
      category: e.target.category.value,
      description: e.target.description.value,
      amount: e.target.amount.value,
      status: e.target.status.value,
    };
    console.log(updateIssuesData);

    fetch(`http://localhost:3000/issues/${data._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateIssuesData),
    })
      .then((res) => res.json())
      .then(() => {
        toast.success("Issues Updated Successfully");
        e.target.reset();
        navegate("/all-issues");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form
        className="flex flex-col items-center text-sm mt-8 mb-8 "
        onSubmit={handelAddIssues}>
        <h1 className="text-4xl font-bold text-green-500 pb-4">
          Update Your Community Issue
        </h1>
        <p className="text-sm text-gray-500 text-center pb-10">
          Edit and update details of your reported community issue to keep
          information accurate and up-to-date.
        </p>
        <div className="mt-6 w-[350px] md:w-[700px] mb-5">
          <label className="text-black/70 font-semibold">Issues Title</label>
          <input
            placeholder="Enter Your Issues Title"
            name="title"
            defaultValue={data.title}
            className="h-12 p-2 mt-2 w-full border border-green-500/30 rounded outline-none focus:border-green-500"
            type="text"
            required
          />
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8 w-[350px] md:w-[700px]">
          <div className="w-full">
            <div className="flex flex-col gap-2 w-full">
              <label
                htmlFor="category"
                className="text-sm font-medium text-gray-700">
                Select Category
              </label>

              <select
                id="category"
                name="category"
                defaultValue={data.category}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="border border-green-500/30 rounded px-3 py-3 text-sm focus:outline-none  focus:border-green-500 ">
                <option value="">-- Choose a category --</option>
                {categories.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-3  md:flex-row items-center gap-8 w-[350px] md:w-[700px] mb-5">
          <div className="w-full">
            <label className="text-black/70 font-semibold">
              Suggested Fix Budget
            </label>
            <div className="h-12 p-2 mt-2 w-full border border-green-500/30 rounded flex items-center focus:border-green-500 gap-1">
              <FaDollarSign color="gray" />
              <input
                placeholder="00000"
                className="outline-none w-full "
                type="number"
                name="amount"
                defaultValue={data.amount}
                required
              />
            </div>
          </div>
          <div className="w-full">
            <div className="flex flex-col gap-2 w-full">
              <label
                htmlFor="category"
                className="text-sm font-medium text-gray-700">
                Status
              </label>

              <select
                name="status"
                defaultValue={data.status}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="border border-green-500/30 rounded px-3 py-3 text-sm focus:outline-none  focus:border-green-500 ">
                <option value="">-- Choose a Status --</option>
                {status.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className=" w-[350px] md:w-[700px]">
          <label className="text-black/70 font-semibold">Description</label>
          <textarea
            placeholder="Write Your Issues in Details..."
            name="description"
            defaultValue={data.description}
            className="w-full mt-2 p-2 h-40 border border-green-500/30 rounded resize-none outline-none focus:border-green-500"
            required></textarea>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-8 w-[350px] md:w-[700px]"></div>

        <button
          type="submit"
          className="mt-5 bg-green-500 text-white h-12 w-56 px-4 rounded active:scale-95 transition font-bold">
          Update Issues
        </button>
      </form>
    </div>
  );
};

export default EditIssuses;
