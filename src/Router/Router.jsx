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
       element:<PrivetRouter><AddJod></AddJod></PrivetRouter>
      },
      {
       path:"/myAddjobs",
       element: <PrivetRouter><MyAddedJobs></MyAddedJobs></PrivetRouter>
      },
      {
       path:"/accecptjob",
       element: <PrivetRouter><MyAcceptedTasks></MyAcceptedTasks></PrivetRouter>
      },
      {
       path:"/detlise/:id",
       element: <PrivetRouter><JobDetails></JobDetails></PrivetRouter>
      },
      {
        path:"/edit/:id",
        element:<PrivetRouter><UpdateJob></UpdateJob></PrivetRouter>
      },
      {
        path:"*",
        element:<ErrorPages></ErrorPages>
      }
    ],
  },
]);
