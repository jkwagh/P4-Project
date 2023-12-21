import {NavLink, useNavigate} from 'react-router-dom';
import  './NavBar.css';
import Login from './Login';
import Signup from './Signup';
import Admin from './Admin';


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

  // const onAdminClick = () => {
  //   // Use the navigate function to navigate to the Login page
  //   navigate("/Admin");
  // };


    return (
        <div>
          
             <nav className="nav"> 
             <NavLink to="/">Home</NavLink>
             <NavLink to="/Order">Order</NavLink>
             <NavLink to="/checkout">Checkout</NavLink>
             <NavLink to="/Login" className="Login">Login</NavLink>
             <NavLink to="/Signup" className="Signup">Signup</NavLink>
             {/* <NavLink to="/Admin" className={Admin}>Signup</NavLink> */}
        </nav>
        </div>
       
    );
}



export default NavBar;