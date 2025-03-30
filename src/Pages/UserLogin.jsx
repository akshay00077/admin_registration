import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "../Components/Login";
import { useNavigate } from "react-router-dom";


function UserLogin() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const navigate = useNavigate(); 

  const handleLogin = async (data) => {
    const {email,password,role} = data || {}
    try {
      const res = await axios.post("http://localhost:5000/login", { email, password ,role});
      localStorage.setItem("token", res.data.token);
      alert("Login successful");
      navigate("/dashboard"); 
    } catch (error) {
      alert(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <Login role="user" handleLogin={(data)=>handleLogin(data)} />
  );
}

export default UserLogin;
