import React, { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { FaDollarSign } from "react-icons/fa";
import { toast } from "react-toastify";
import Loader from "../../Components/Loader";
const AddIssues = () => {
  const { user} = useContext(AuthContext);
  const today = new Date().toISOString().split("T")[0];
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

  const handelAddIssues = (e) =>{
    const addIssuesData = {
      title:  e.target.title.value,
      category: e.target.category.value,
      location: e.target.location.value,
      description: e.target.description.value,
      image: e.target.image.value,
      amount: e.target.amount.value,
      email: e.target.email.value,
      status: e.target.status.value, 
      date: e.target.date.value,
    }
    fetch("http://localhost:3000/issues",{
      method:"POST",
      headers:{
        "content-type":"application/json"
    },
      body:JSON.stringify(addIssuesData)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      toast.success("Issues Added Successfully")
      e.target.reset();
    }).catch(err=>console.log(err));
    
  }
  return (
    <div>
      <form className="flex flex-col items-center text-sm mt-8 mb-8 " onSubmit={handelAddIssues}>
        <h1 className="text-4xl font-bold text-green-500 pb-4">
          Add New Community Issue
        </h1>
        <p className="text-sm text-gray-500 text-center pb-10">
          Fill out the details below to help us identify and resolve the
          problem.
        </p>
        <div className="mt-6 w-[350px] md:w-[700px] mb-5">
          <label className="text-black/70 font-semibold">Issues Title</label>
          <input
            placeholder="Enter Your Issues Title"
            name="title"
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
                value={selectedCategory}
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
          <div className="w-full">
            <label className="text-black/70 font-semibold">Location</label>
            <input
              placeholder="Enter the Location"
              className="h-12 p-2 mt-2 w-full border border-green-500/30 rounded outline-none focus:border-green-500"
              type="text"
              name="location"
              required
            />
          </div>
        </div>

        <div className="mt-6 w-[350px] md:w-[700px]">
          <label className="text-black/70 font-semibold">Description</label>
          <textarea
            placeholder="Write Your Issues in Details..."
            name="description"
            className="w-full mt-2 p-2 h-40 border border-green-500/30 rounded resize-none outline-none focus:border-green-500"
            required></textarea>
        </div>
        <div className="mt-6 w-[350px] md:w-[700px] mb-5">
          <label className="text-black/70 font-semibold">
            Issues Image Link
          </label>

          <input
            placeholder="Enter Your Issues Image Link"
            className="   h-12 p-2 mt-2 border border-green-500/30 rounded outline-none focus:border-green-500 w-full"
            type="text"
            name="image"
            required
          />
        </div>
        <div className="flex flex-col md:flex-row items-center gap-8 w-[350px] md:w-[700px] mb-5">
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
                required
              />
            </div>
          </div>
          <div className="w-full">
            <label className="text-black/70 font-semibold">Your Email</label>
            <input
              value={user?.email || user?.reloadUserInfo?.email}
              className="h-12 p-2 mt-2 w-full border border-green-500/30 rounded outline-none focus:border-green-500"
              type="email"
              readOnly
              name="email"
              required
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-8 w-[350px] md:w-[700px]">
          <div className="w-full">
            <label className="text-black/70 font-semibold">Status</label>
            <input
              value="Ongoing"
              readOnly
              className="h-12 p-2 mt-2 w-full border border-green-500/30 rounded outline-none focus:border-green-500"
              type="text"
              name="status"
              required
            />
          </div>
          <div className="w-full">
            <label className="text-black/70 font-semibold">Date</label>
            <input
              value={today}
              readOnly
              name="date"
              className="h-12 p-2 mt-2 w-full border border-green-500/30 rounded outline-none focus:border-green-500"
              type="text"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="mt-5 bg-green-500 text-white h-12 w-56 px-4 rounded active:scale-95 transition font-bold">
          Submit Issues
        </button>
      </form>
    </div>
  );
};

export default AddIssues;
