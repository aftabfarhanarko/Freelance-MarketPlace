import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import ErrorPages from "../error/ErrorPages";
import Alljobs from "../pages/Alljobs";
import MyAddedJobs from "../pages/MyAddedJobs";
import MyAcceptedTasks from "../pages/MyAcceptedTasks";
import JobDetails from "../pages/JobDetails";
import UpdateJob from "../pages/UpdateJob";
import Pricing from "../pages/Pricing";
import Dashbord from "../pages/Dashbord/Dashbord";
import DashbordLayout from "../Layout/DashbordLayout";
import Contact from "../pages/Dashbord/Contact";
import Blog from "../pages/Dashbord/Blog";
import Support from "../pages/Dashbord/Support";
import Profile from "../pages/Profile";
import AddJob from "../pages/AddJob";
import TotalUser from "../pages/Dashbord/TotalUser";
import TotalAcceptsJobs from "../pages/Dashbord/TotalAcceptsJobs";
import AllJobs from "../pages/Dashbord/AllJobs";
import Setting from "../pages/Dashbord/Setting";
import YouAreNotAdmin from "../pages/YouAreNotAdmin";
import AdminRoute from "./AdminRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/alljob",
        element: <Alljobs></Alljobs>,
      },
      {
        path: "/creatJob",
        element: <AddJob></AddJob>,
      },
      {
        path: "/myAddjobs",
        element: <MyAddedJobs></MyAddedJobs>,
      },
      {
        path: "/pricing",
        element: <Pricing />,
      },
      {
        path: "/accecptjob",
        element: <MyAcceptedTasks></MyAcceptedTasks>,
      },
      {
        path: "/detlise/:id",
        element: <JobDetails></JobDetails>,
      },
      {
        path: "/edit/:id",
        element: <UpdateJob></UpdateJob>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/notadmin",
        element: <YouAreNotAdmin></YouAreNotAdmin>,
      },

      {
        path: "*",
        element: <ErrorPages></ErrorPages>,
      },
    ],
  },
  {
    path: "/dashbord",
    element: (
      <AdminRoute>
        <DashbordLayout></DashbordLayout>
      </AdminRoute>
    ),
    children: [
      {
        index: true,
        element: <Dashbord></Dashbord>,
      },
      {
        path: "/dashbord/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/dashbord/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/dashbord/alljob",
        element: <Alljobs></Alljobs>,
      },
      {
        path: "/dashbord/support",
        element: <Support></Support>,
      },
      {
        path: "/dashbord/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/dashbord/totalUser",
        element: <TotalUser></TotalUser>,
      },
      {
        path: "/dashbord/totalAcceptsJobs",
        element: <TotalAcceptsJobs></TotalAcceptsJobs>,
      },
      {
        path: "/dashbord/allJobs",
        element: <AllJobs></AllJobs>,
      },
      {
        path: "/dashbord/setting",
        element: <Setting></Setting>,
      },
    ],
  },
]);
