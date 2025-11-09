import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
  return (
    <div>
      <nav>
        <Navbar></Navbar>
      </nav>
      <div className="h-[89px]"></div>
      <main>
        <Outlet></Outlet>
      </main>

      <footer>
        <Footer></Footer>
      </footer>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={12}
        containerStyle={{
          top: 20,
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
              color: "#2e8b57", // গাঢ় সবুজ টেক্সট
            },
            iconTheme: {
              primary: "#4aed88",
              secondary: "white",
            },
          },

          // Error toast
          error: {
            duration: 3000,
            style: {
              color: "#c0392b", // গাঢ় লাল টেক্সট
            },
            iconTheme: {
              primary: "#ff6b6b",
              secondary: "white",
            },
          },

          // Loading toast
          loading: {
            duration: 10000,
            style: {
              border: "2px solid #3498db",
              color: "#2980b9",
            },
            iconTheme: {
              primary: "#3498db",
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
