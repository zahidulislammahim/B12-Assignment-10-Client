
import { toast } from "react-toastify";
import { FaDollarSign } from "react-icons/fa";

const EditIssues = ({ open, onClose, data }) => {
  if (!open || !data) return null;

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

  const statusList = ["Ongoing", "Ended"];

  const handleUpdate = (e) => {
    e.preventDefault();

    const updatedIssue = {
      title: e.target.title.value,
      category: e.target.category.value,
      description: e.target.description.value,
      amount: e.target.amount.value,
      status: e.target.status.value,
    };

    fetch(`http://localhost:3000/issues/${data._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedIssue),
    })
      .then((res) => res.json())
      .then(() => {
        window.location.reload();
        toast.success("Issue Updated Successfully!");
        onClose();
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-[90%] md:w-[600px] relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 py-2 px-3 rounded-full text-gray-600 hover:text-black hover:bg-gray-200">
          ✕
        </button>

        <div className="mt-5">
          <h1 className="text-4xl font-bold text-green-500 pb-4 text-center">
            Update Your Community Issue
          </h1>
          <p className="text-sm text-gray-500 text-center pb-10">
            Edit and update details of your reported community issue to keep
            information accurate and up-to-date.
          </p>
        </div>

        <form onSubmit={handleUpdate} className="space-y-4 -mt-5">
          <div>
            <label className="font-medium">Title</label>
            <input
              name="title"
              defaultValue={data.title}
              required
              className="w-full  rounded p-2 mt-1 border border-green-500/30 focus:border-green-500 outline-none"
            />
          </div>

          <div>
            <label className="font-medium">Category</label>
            <select
              name="category"
              defaultValue={data.category}
              className="w-full border border-green-500/30 rounded p-2 mt-1 focus:border-green-500 outline-none">
              <option value="">Select Category</option>
              {categories.map((cat, i) => (
                <option key={i} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="font-medium">Amount</label>
            <div className="flex items-center border border-green-500/30 rounded p-2 mt-1">
              <FaDollarSign className="text-gray-400" />
              <input
                type="number"
                name="amount"
                defaultValue={data.amount}
                required
                className="ml-2 w-full outline-none "
              />
            </div>
          </div>

          <div>
            <label className="font-medium">Status</label>
            <select
              name="status"
              defaultValue={data.status}
              className="w-full border border-green-500/30 rounded p-2 mt-1 focus:border-green-500 outline-none">
              <option value="">Select Status</option>
              {statusList.map((s, i) => (
                <option key={i} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="font-medium">Description</label>
            <textarea
              name="description"
              defaultValue={data.description}
              rows="8"
              className="w-full  rounded p-2 mt-1 border border-green-500/30 focus:border-green-500 outline-none resize-none"
              required></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 text-white font-bold py-2 rounded hover:bg-green-400">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditIssues;
