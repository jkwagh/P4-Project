import React from 'react';
import "./Order.css";
import "./OrderFood.css";
import "./OrderFood";

function OrderHeader({showing}) {
    const [show, setShow] = React.useState(false);
    return (
        <div>
            <div className="d">
                <h1 className="header"> Welcome TO FlatIron Eats</h1>
                    <button href= "/cart" className="cart-btn" onClick={() => {setShow(!show)
                    showing(!show)
                    }}>
                        {show? "close" : "View Cart"}
                    </button>
                </div>
            </div>
        );
}
            


export default OrderHeader;