import { Icon } from '@iconify/react';
import React from "react";

function CartWidget(){
    return(
        <div>
            <div className='carrito'><Icon icon="el:shopping-cart-sign" color="#220" height="30"/>1</div>
            
        </div>
    )
}

export default CartWidget;