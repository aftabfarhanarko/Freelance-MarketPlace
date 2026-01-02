import Navbar from "../components/Navbar";
import { Outlet, useLocation } from "react-router";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";
// import { Toaster, toast } from 'sonner'


const MainLayout = () => {
  const location = useLocation();
  const isDashboard = location.pathname === "/dashbord";

  return (
    <div>
      <nav>
        <Navbar></Navbar>
      </nav>
      {/* Spacer for fixed navbar */}
      <div className="h-16"></div>
      <main className={`${isDashboard ? '' : 'pb-20'} min-h-[calc(100vh-300px)]`}>
        <Outlet></Outlet>
      </main>

      {!isDashboard && (
        <footer>
          <Footer></Footer>
        </footer>
      )}
      {/* <Toaster position="top-center" /> */}
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={12}
        containerStyle={{
          top: 30,
          right: 20,
        }}
        toastOptions={{
          // Default style for all toasts
          style: {
            background: "white",
            color: "#333",
            borderRadius: "12px",
            padding: "12px 35px",
            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
            border: "1px solid #e0e0e0",
            fontSize: "15px",
            fontWeight: "500",
          },
          duration: 500,

          // Success toast
          success: {
            duration: 3000,
            style: {
              color: "#d97706", // Amber-600
            },
            iconTheme: {
              primary: "#f59e0b", // Amber-500
              secondary: "white",
            },
          },

          // Error toast
          error: {
            duration: 3000,
            style: {
              color: "#ea580c", // Orange-600
            },
            iconTheme: {
              primary: "#f97316", // Orange-500
              secondary: "white",
            },
          },

          // Loading toast
          loading: {
            duration: 10000,
            style: {
              border: "2px solid #F97316", // Orange-500
              color: "#EA580C", // Orange-600
            },
            iconTheme: {
              primary: "#F97316",
              secondary: "white",
            },
          },

          // Custom default (info) toast
          default: {
            style: {
              border: "2px solid #95a5a6",
              color: "#2c3e50",
            },
          },
        }}
      />
    </div>
  );
};

export default MainLayout;
