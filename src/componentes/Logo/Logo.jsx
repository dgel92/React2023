import "../sass/main.css"

import Brand from"../../multimedia/logo.jpg"
import React from "react";

function Logo(){
    return(
    <div className="brand">
        <img src={Brand} style={{width:"20vh"}}alt="logo tienda" ></img>
        <ul>
					<li><h4>hola</h4></li>
				</ul>
    </div>
    )
}

export default Logo;