import {NavLink} from 'react-router-dom';
import  './NavBar.css';


const NavBar = () => {

    return (
        <nav> 
             <NavLink to="/">Home</NavLink>
             <NavLink to="/Order">Order</NavLink>
             <NavLink to="/Cart">Cart</NavLink>
             
        </nav>
    );
}



export default NavBar;