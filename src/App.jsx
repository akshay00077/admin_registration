
import './App.css'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserLogin from "./Pages/UserLogin";
import UserRegister from "./Pages/UserRegister";
import AdminLogin from "./Pages/AdminLogin";
import AdminRegister from "./pages/AdminRegister";
import Dashboard from "./Pages/Dashboard";
import PrivateRoute from "./Pages/PrivateRoute";

function App() {

  return (
    <>
   <Router>
   <Routes>
        {/* User Routes */}
        <Route path="/user/login" element={<UserLogin />} />
        <Route path="/user/register" element={<UserRegister />} />

        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/register" element={<AdminRegister />} />

        {/* Protected Route */}
        <Route path="/dashboard" element={<PrivateRoute>
              <Dashboard />
            </PrivateRoute>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
