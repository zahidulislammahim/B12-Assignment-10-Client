import React, { useContext } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router";
import { AuthContext } from "../Context/AuthContext";

const Footer = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="bg-green-50/50">
      <footer className="w-11/12 mx-auto px-2  pt-8  text-gray-500 ">
      <div className="flex flex-col md:flex-row justify-between w-full gap-1 border-b border-green-500/30 pb-6">
        <div className="md:max-w-96">
          <div className="hover:text-green-500">
            <Link
              to="/"
              className="flex items-center gap-2 text-2xl font-bold ">
              <img src={logo} className="w-10 " />
              <h1 className="text-black hover:text-green-500">
                Community <span className="text-green-500">Cleanliness</span>
              </h1>
            </Link>
          </div>
          <p className="mt-6 text-sm">
            The Community Cleanliness & Issue Reporting Portal empowers users to
            report, track, and resolve local environmental issues with real-time
            updates, secure Firebase authentication, and a modern, responsive
            design.
          </p>
        </div>
        <div className="flex-1 flex items-start md:justify-end gap-20">
          <div>
            <h2 className="font-semibold mb-5 text-gray-800">Comunity</h2>
            <ul className="text-sm space-y-2 w-30">
              <li>
                <Link to="/" className="hover:text-green-500 hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link to="" className="hover:text-green-500 hover:underline">
                  All Issues
                </Link>
              </li>
              {user ? (
                <>
                  <li>
                    <Link
                      to="/add-issues"
                      className="hover:text-green-500 hover:underline">
                      Add Issues
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/my-issues"
                      className="hover:text-green-500 hover:underline">
                      My Issues
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/my-contribution"
                      className="hover:text-green-500 hover:underline">
                      My Contribution
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link
                      to="/login"
                      className="hover:text-green-500 hover:underline">
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/sign-up"
                      className="hover:text-green-500 hover:underline">
                      Sign Up
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
          <div>
            <h2 className="font-semibold text-gray-800 mb-5">
              Subscribe to our newsletter
            </h2>
            <div className="text-sm space-y-2">
              <p>
                The latest news, articles, and resources, sent to your inbox
                weekly.
              </p>
              <div className="flex items-center gap-2 pt-4">
                <input
                  className="border border-green-500/30 placeholder-gray-500 focus:ring-2 ring-green-500 outline-none w-full max-w-64 h-9 rounded px-2"
                  type="email"
                  placeholder="Enter your email"
                />
                <button className="bg-green-500 w-30 h-9 text-white rounded">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="pt-4 text-center text-xs md:text-sm pb-5">
        Copyright {new Date().getFullYear()} ©{" "}
        <a
          href="https://github.com/zahidulislammahim"
          className="hover:underline text-green-500">
          Zahidul Islam Mahim
        </a>
        . All Right Reserved.
      </p>
    </footer>
    </div>
  );
};

export default Footer;
