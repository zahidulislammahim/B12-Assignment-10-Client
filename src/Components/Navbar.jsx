import { Link, NavLink } from "react-router";
import logo from "../assets/logo.png";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";
import { useContext } from "react";
import Switch from "./Switch";
import { LogOut } from "lucide-react";

const Navbar = () => {
  const { signOutFunc, setUser, user } = useContext(AuthContext);

  const handelSignOut = () => {
    signOutFunc()
      .then(() => {
        toast.success("sign out successfully");
        setUser(null);
      })
      .catch((error) => {
        console.error("SignOut error:", error.message);
      });
  };

  const links = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `btn font-bold transition-all duration-300 border-0 focus:outline-none focus:ring-0 ${
            isActive
              ? "btn btn-success font-bold"
              : "bg-[#f1fcf6] text-[#02d391] hover:bg-[#00d390] hover:text-green-900 dark:bg-[#202f32] dark:text-[#00d390] dark:hover:bg-[#00d390] inset-shadow-sm"
          }`
        }>
        Home
      </NavLink>
      <NavLink
        to="/all-issues"
        className={({ isActive }) =>
          `btn font-bold transition-all duration-300 border-0 focus:outline-none focus:ring-0 ${
            isActive
              ? "btn btn-success font-bold"
              : "bg-[#f1fcf6] text-[#02d391] hover:bg-[#00d390] hover:text-green-900 dark:bg-[#202f32] dark:text-[#00d390] dark:hover:bg-[#00d390] inset-shadow-sm"
          }`
        }>
        All Issues
      </NavLink>
      {user ? (
        <>
          <NavLink
            to="/add-issues"
            className={({ isActive }) =>
              `btn font-bold transition-all duration-300 border-0 focus:outline-none focus:ring-0 ${
                isActive
                  ? "btn btn-success font-bold"
                  : "bg-[#f1fcf6] text-[#02d391] hover:bg-[#00d390] hover:text-green-900 dark:bg-[#202f32] dark:text-[#00d390] dark:hover:bg-[#00d390] inset-shadow-sm"
              }`
            }>
            Add Issues
          </NavLink>

          <NavLink
            to="/my-issues"
            className={({ isActive }) =>
              `btn font-bold transition-all duration-300 border-0 focus:outline-none focus:ring-0 ${
                isActive
                  ? "btn btn-success font-bold"
                  : "bg-[#f1fcf6] text-[#02d391] hover:bg-[#00d390] hover:text-green-900 dark:bg-[#202f32] dark:text-[#00d390] dark:hover:bg-[#00d390] inset-shadow-sm"
              }`
            }>
            My Issues
          </NavLink>
          <NavLink
            to="/my-contribution"
            className={({ isActive }) =>
              `btn font-bold transition-all duration-300 border-0 focus:outline-none focus:ring-0 ${
                isActive
                  ? "btn btn-success font-bold"
                  : "bg-[#f1fcf6] text-[#02d391] hover:bg-[#00d390] hover:text-green-900 dark:bg-[#202f32] dark:text-[#00d390] dark:hover:bg-[#00d390] inset-shadow-sm"
              }`
            }>
            My Contribution
          </NavLink>
        </>
      ) : (
        <>
          <NavLink to="/login" className="btn btn-success font-bold">
            Log in
          </NavLink>
          <NavLink
            to="/sign-up"
            className={({ isActive }) =>
              `btn font-bold transition-all duration-300 border-0 focus:outline-none focus:ring-0 ${
                isActive
                  ? "btn btn-success font-bold"
                  : "bg-[#f1fcf6] text-[#02d391] hover:bg-[#00d390] hover:text-green-900 dark:bg-[#202f32] dark:text-[#00d390] dark:hover:bg-[#00d390] inset-shadow-sm"
              }`
            }>
            Sign Up
          </NavLink>
        </>
      )}
    </>
  );

  return (
    <div className="w-full shadow-sm  sticky top-0 bg-white dark:bg-gray-900 z-50 ">
      <div className="navbar  w-11/12 mx-auto  ">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-success lg:hidden mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <div
              tabIndex="-1"
              className="menu menu-sm gap-2 dropdown-content bg-white dark:bg-gray-900 rounded-box z-1 mt-3 w-52 p-2 shadow ">
              {links}
            </div>
          </div>
          <div className="hover:text-green-500">
            <Link
              to="/"
              className="flex items-center gap-2 text-2xl font-bold ">
              <img src={logo} className="w-10 " />
              <h1 className="text-black dark:text-white hover:text-green-500">
                Community <span className="text-green-500">Cleanliness</span>
              </h1>
            </Link>
          </div>
        </div>

        <div className="navbar-end">
          <div className=" hidden lg:flex">
            <div className="menu menu-horizontal px-1 gap-2">{links}</div>
          </div>
          {user && (
            <div className="dropdown dropdown-end ml-5">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img
                    title={
                      user?.displayName || user?.reloadUserInfo?.displayName
                    }
                    alt="Tailwind CSS Navbar component"
                    src={
                      user?.photoURL ||
                      user?.reloadUserInfo?.photoUrl ||
                      "https://lh3.googleusercontent.com/aida-public/AB6AXuBW_t8z3WUNYCV9hhFRtH1_CMeFwGz2xXD_Det8_bkJsSPkEt4VqHC9uNdK8q9Lq-9oraZ-EEP-ONYJvx8HMgO8GJ8qIgh0FCQYiCmXGqXWcsmm43ZQvYqUG3H0v67ta-lswXhTJDDeG5yBPsGY4ZDGDhoOUpU4Hk5OicJmaGPg9IgDbbS3rV3aoDjZxQDOHb43fXFC-4Y9j3wRIKDFtw6fQx6o4ByVoU-g3jENNjxE0szSqSfdXdBsyiVgoxuJkjB7mM2F7eIox-Y"
                    }
                  />
                </div>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content  rounded-box z-1 mt-3 w-fit p-2 shadow bg-white dark:bg-gray-900">
                <div className="items-center flex flex-col">
                  <div className="text-center ">
                    <h3 className="font-bold mb-1 text-sm text-gray-700 dark:text-gray-100">
                      {user?.displayName || user?.reloadUserInfo?.displayName}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-100 mb-2">
                      {user?.email || user?.reloadUserInfo?.email}
                    </p>
                  </div>
                  <div className="w-full m-2 p-2 flex justify-center bg-blue-100 rounded dark:bg-gray-600 hover:bg-blue-400">
                    <Switch></Switch>
                  </div>
                  <button
                    className="btn btn-soft btn-error font-bold w-full bg-red-100 border-0 hover:bg-red-400"
                    onClick={handelSignOut}>
                    <LogOut />
                    Logout
                  </button>
                </div>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
