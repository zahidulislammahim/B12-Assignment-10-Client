import { createBrowserRouter } from "react-router";
import RootLayout from "../Pages/RootLayout";
import Home from "../Pages/Home/Home";
import SignUp from "../Pages/SignUp";
import Login from "../Pages/Login";
import AddIssues from "../Pages/AddIssues/AddIssues";
import AllIssues from "../Pages/AllIssues/AllIssues";
import MyContribution from "../Pages/MyContribution/MyContribution";
import MyIssues from "../Pages/MyIssues/MyIssues";
import PrivateRoute from "./PrivateRoute";
import Loader from "../Components/Loader";
import IssueDetails from "../Components/IssueDetails";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    hydrateFallbackElement: <Loader></Loader>,
    errorElement: <h1>404 not found</h1>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/sign-up",
        element: <SignUp></SignUp>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/all-issues",
        element: <AllIssues></AllIssues>,
      },
      {
        path: "/add-issues",
        element: <PrivateRoute><AddIssues></AddIssues></PrivateRoute>,
      },
      {
        path: "/my-contribution",
        element: <PrivateRoute><MyContribution></MyContribution></PrivateRoute>,
      },
      {
        path: "/my-issues",
        element: <PrivateRoute><MyIssues></MyIssues></PrivateRoute>,
      },
      {
        path: "/issues-details/:id",
        element: <PrivateRoute><IssueDetails></IssueDetails></PrivateRoute>,
      },
     
    ],
  },
]);
