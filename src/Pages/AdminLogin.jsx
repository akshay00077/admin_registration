import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "../Components/Login";

function AdminLogin() {

  const handleLogin = async (data) => {
    const {email,password,role} = data || {}
    try {
      const res = await axios.post("http://localhost:5000/login", { email, password ,role});
      localStorage.setItem("token", res.data.token);
      alert("Login successful");
    } catch (error) {
      alert(error.response?.data?.message || "Login failed");
    }
  };

  return (
   <Login role="admin" handleLogin={(data)=>handleLogin(data)} />
  );
}

export default AdminLogin;
