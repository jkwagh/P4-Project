import { NavLink, useNavigate } from "react-router-dom";
import "./NavBar.css";
import Login from "./Login";
import Signup from "./Signup";
import About from "./About";

const NavBar = (props) => {
  const { loggedIn, email } = props;
  const navigate = useNavigate();

  const onLoginClick = () => {
    // Use the navigate function to navigate to the Login page
    navigate("/login");
  };

  const onSignupClick = () => {
    // Use the navigate function to navigate to the Login page
    navigate("/Signup");
  };

  return (
    <div>
      <nav className="nav">
        <h1 className="logo">FlatIron Eats</h1>
        
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about" className={About}>
          About
        </NavLink>
        {/* <NavLink to="/Order">Order</NavLink>
        <NavLink to="/checkout">Checkout</NavLink> */}
        <NavLink to="/Login" className="Login">
          Login
        </NavLink>
        <NavLink to="/Signup" className="Signup">
          Signup
        </NavLink>
      </nav>
    </div>
  );
};

export default NavBar;
