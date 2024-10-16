import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import React from "react";
import User from "./Pages/User";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import AdminDashboard from "./Pages/AdminDashboard";
import VerifierDashboard from "./Pages/VerifierDashboard";

// Add type for children
type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  const location = useLocation();


  const hideNavbarSidebar = location.pathname === "/user";

  return (
    <div className="app min-h-screen flex flex-col">

      {!hideNavbarSidebar && (
        <div className="w-full fixed top-0 z-[100]">
          <Navbar />
        </div>
      )}

 
      <div className="flex flex-1 mt-[4rem]"> 
        {!hideNavbarSidebar && (
          <div className="w-64">
            <Sidebar />
          </div>
        )}
        <div className="flex-1 p-6">{children}</div> 
      </div>
    </div>
  );
}


function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/user" element={<User />} />
		      <Route path="/admin" element={<AdminDashboard/>} />
          <Route path="/verifier" element={<VerifierDashboard/>}/>
        </Routes>
      </Layout>
    </Router>
  );
}
export let api_link = "https://credit-sea-backend.vercel.app";
export default App;
