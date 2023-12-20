import {NavLink} from 'react-router-dom';
import  './NavBar.css';
import Login from './Login';
import Signup from './Signup';


const NavBar = () => {

    return (
        <nav> 
             <NavLink to="/">Home</NavLink>
             <NavLink to="/Order">Order</NavLink>
             <NavLink to="/checkout">Checkout</NavLink>
             {/* <NavLink to="/Login" className={Login}>Login</NavLink>
             <NavLink to="/Signup" className={Signup}>Signup</NavLink> */}+
        </nav>
    );
}



export default NavBar;