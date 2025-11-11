import { FaDollarSign } from "react-icons/fa";
import { AuthContext } from "../Context/AuthContext";
import { useContext } from "react";
import { toast } from "react-toastify";

const Modal = ({ open, onClose, data }) => {
  const { user } = useContext(AuthContext);
  if (!open) return null;
  const today = new Date().toISOString().split("T")[0];
  const handelAddContribution = (e) => {
    e.preventDefault();
    const addContributionData = {
      title: e.target.title.value,
      image: data.image,
      category: data.category,
      amount: e.target.amount.value,
      name: e.target.name.value,
      email: e.target.email.value,
      number: e.target.number.value,
      address: e.target.address.value,
      date: e.target.date.value,
      issueId: data._id,
    };

    fetch("http://localhost:3000/contribution", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addContributionData),
    })
      .then((res) => res.json())
      .then(() => {
        onClose();
        toast.success("Thank you for your contribution");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <form
        onSubmit={handelAddContribution}
        className="bg-white rounded-lg shadow-lg w-full max-w-2xl p-6 relative">
        <h2 className="text-4xl font-semibold text-green-500 mb-3 text-center">
          Pay Clean-Up Contribution
        </h2>
        <p className="text-gray-500 text-sm text-center mb-4">
          Contribute to keeping our community clean and green by paying your
          clean-up fee easily and securely.
        </p>

        <div className="mb-3">
          <label className="block text-gray-700 text-sm mb-1">
            Issues Title
          </label>
          <input
            type="text"
            value={data.title}
            readOnly
            name="title"
            className="w-full border border-green-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-green-500 outline-none"
            placeholder=""
          />
        </div>
        <div className="mb-3">
          <label className="block text-gray-700 text-sm mb-1">Amount</label>
          <div className="w-full border border-green-300 rounded-md px-3 py-2 flex items-center gap-1 focus:ring-2 focus:ring-green-500 outline-none">
            <FaDollarSign color="gray" />
            <input
              type="number"
              name="amount"
              className="  outline-none w-full"
              placeholder="Enter your Contribution Amount"
              required
            />
          </div>
        </div>
        <div className="mb-3">
          <label className="block text-gray-700 text-sm mb-1">Name</label>
          <input
            type="text"
            name="name"
            readOnly
            value={user?.displayName || user?.reloadUserInfo?.displayName}
            className="w-full border border-green-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-green-500 outline-none"
            placeholder=""
          />
        </div>
        <div className="mb-3">
          <label className="block text-gray-700 text-sm mb-1">Email</label>
          <input
            type="email"
            name="email"
            readOnly
            value={user?.email || user?.reloadUserInfo?.email}
            className="w-full border border-green-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-green-500 outline-none"
            placeholder="exampal@gmail.com"
            required
          />
        </div>
        <div className="mb-3">
          <label className="block text-gray-700 text-sm mb-1">
            Phone Number
          </label>
          <input
            type="number"
            name="number"
            className="w-full border border-green-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-green-500 outline-none"
            placeholder="Enter your Phone Number"
            required
          />
        </div>
        <div className="mb-3">
          <label className="block text-gray-700 text-sm mb-1">Address</label>
          <input
            type="text"
            name="address"
            className="w-full border border-green-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-green-500 outline-none"
            placeholder="Enter your Address"
            required
          />
        </div>
        <div className="mb-3">
          <label className="block text-gray-700 text-sm mb-1">Date</label>
          <input
            type="text"
            name="date"
            readOnly
            value={today}
            className="w-full border border-green-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-green-500 outline-none"
            placeholder="Enter your email"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-400 transition">
          Pay
        </button>

        <button
          className="absolute top-3 right-4 py-2 px-3 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full"
          onClick={onClose}>
          ✕
        </button>
      </form>
    </div>
  );
};

export default Modal;
