import {NavLink, useNavigate} from 'react-router-dom';
import  './NavBar.css';
import Login from './Login';
import Signup from './Signup';


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
             <NavLink to="/">Home</NavLink>
             <NavLink to="/Order">Order</NavLink>
             <NavLink to="/checkout">Checkout</NavLink>
             {/* <NavLink to="/Login" className= "Login">Login</NavLink>
             <NavLink to="/Signup" className="Signup">Signup</NavLink>  */}
             <NavLink to="/About">About</NavLink>
             
        <input
          className={"inputButton"}
          type="button"
          onClick={onLoginClick}
          value={loggedIn ? "Log out" : "Log in"}
        />
        {loggedIn ? <div>Your email address is {email}</div> : <div />}
        <input
          className={"inputButton-signup"}
          type="button"
          onClick={onSignupClick}
          value="Signup"
        />
        
             
        </nav>
        </div>
       
    );
}



export default NavBar;