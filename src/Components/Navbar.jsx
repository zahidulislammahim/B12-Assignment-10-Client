// import React, { use } from "react";
import { Link, NavLink } from "react-router";
import logo from "../assets/logo.png";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";
import { useContext } from "react";

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
      <NavLink to="/" className="btn btn-soft btn-success font-bold">
        Home
      </NavLink>
      <NavLink to="/all-issues" className="btn btn-soft btn-success font-bold">
        All Issues
      </NavLink>
      {user ? (
        <>
          <NavLink
            to="/add-issues"
            className="btn btn-soft btn-success font-bold">
            Add Issues
          </NavLink>
          <NavLink
            to="/my-issues"
            className="btn btn-soft btn-success font-bold">
            My Issues
          </NavLink>
          <NavLink
            to="/my-contribution"
            className="btn btn-soft btn-success font-bold">
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
            className="btn  btn-outline  btn-success font-bold">
            Sign Up
          </NavLink>
        </>
      )}
    </>
  );

  return (
    <div className="w-full shadow-sm  sticky top-0 bg-white z-50 ">
      <div className="navbar  w-11/12 mx-auto  ">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden mr-2">
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
              className="menu menu-sm gap-2 dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              {links}
            </div>
          </div>
          <div className="hover:text-green-500">
            <Link
              to="/"
              className="flex items-center gap-2 text-2xl font-bold ">
              <img src={logo} className="w-10 " />
              <h1>
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
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow ">
                <div>
                  <div className="text-center ">
                    <h3 className="font-bold mb-1 text-sm">
                      {user?.displayName || user?.reloadUserInfo?.displayName}
                    </h3>
                    <p className="text-gray-400 mb-2">
                      {user?.email || user?.reloadUserInfo?.email}
                    </p>
                  </div>
                  <button
                    className="btn btn-soft btn-error font-bold w-full"
                    onClick={handelSignOut}>
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
