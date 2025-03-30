import axios from "axios";
import Register from "../Components/Register/Register";

function AdminRegister() {

    // ✅ Register Function
    const handleRegister = async (data) => {
        const { email, password, role, firstName, lastName, } = data || {}

        let params = {
            email,
            password,
            role,
            firstname : firstName,
            lastname : lastName
        }
        try {
            const res = await axios.post("http://localhost:5000/register", params);
            alert(res.data.message || "Registration successful");
        } catch (error) {
            alert(error.response?.data?.message || "Registration failed");
        }
    };



    return (
        <Register role="Admiregister" handleRegister={(data) => handleRegister(data)} />
    );
}

export default AdminRegister;
