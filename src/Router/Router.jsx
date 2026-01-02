import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import ErrorPages from "../error/ErrorPages";
import PrivetRouter from "./PrivetRouter";
import Alljobs from "../pages/Alljobs";
import MyAddedJobs from "../pages/MyAddedJobs";
import MyAcceptedTasks from "../pages/MyAcceptedTasks";
import AddJod from "../pages/AddJod";
import JobDetails from "../pages/JobDetails";
import UpdateJob from "../pages/UpdateJob";
import Pricing from "../pages/Pricing";



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
       path:"/alljob",
       element: <Alljobs></Alljobs>
      },
      {
       path:"/creatJob",
       element:<AddJod></AddJod>
      },
      {
       path:"/myAddjobs",
       element: <MyAddedJobs></MyAddedJobs>
      },
      {
       path:"/pricing",
       element: <Pricing />
      },
      {
       path:"/accecptjob",
       element: <MyAcceptedTasks></MyAcceptedTasks>
      },
      {
       path:"/detlise/:id",
       element: <JobDetails></JobDetails>
      },
      {
        path:"/edit/:id",
        element:<UpdateJob></UpdateJob>
      },
      {
        path:"*",
        element:<ErrorPages></ErrorPages>
      }
    ],
  },
]);
