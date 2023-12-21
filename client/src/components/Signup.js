import React, { useState } from "react"
import NavBar from "./NavBar"
import { useNavigate } from "react-router-dom";

const Signup = ({ addCustomer }) => {
    const [formData, setFormData] = useState({
    address: "",
    email: "",
    password: "",
    phone: "",
    username: ""
    });
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addCustomer(formData);
        navigate('/order')
      };

    return ( 
        <div>
            <NavBar />
            <h1>Signup</h1>
            <form onSubmit={handleSubmit}>
            <label>
                Username:
                <input type="text" name="username" value={formData.username} onChange={handleInputChange} />
            </label>
            <br />
            <label>
                Password:
                <input type="password" name="password" value={formData.password} onChange={handleInputChange} />
            </label>
            <br />
            <label>
                Address:
                <input type="text" name="address" value={formData.address} onChange={handleInputChange} />
            </label>
            <br />
            <label>
                Phone:
                <input type="text" name="phone" value={formData.phone} onChange={handleInputChange} />
            </label>
            <br />
            <label>
                E-mail:
                <input type="text" name="email" value={formData.email} onChange={handleInputChange} />
            </label>
            <br />
            <button type="submit">
                Submit
            </button>
            </form>
        </div>
        
    )
}

export default Signup