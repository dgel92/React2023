import CartWidget from './../../CartWidget/CartWidget';
import Logo from '../../../multimedia/logo-prueba.png';
import React from "react";
import main from "../../../componentes/sass/main.css";

function Header(){
    return(
        <header className='encabezado'>
			<a><img className="brand" src={Logo} alt=""></img></a>
				<svg height="32px" className="nav_btn nav_btn_open" id="navOpen" viewBox="0 0 32 32">
					<path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z" />
				</svg>
				<nav id="nav">
					<svg viewBox="0 0 24 24" className="nav_btn nav_btn-close" id="navClose">
					<path d="M14.8,12l3.6-3.6c0.8-0.8,0.8-2,0-2.8c-0.8-0.8-2-0.8-2.8,0L12,9.2L8.4,5.6c-0.8-0.8-2-0.8-2.8,0   c-0.8,0.8-0.8,2,0,2.8L9.2,12l-3.6,3.6c-0.8,0.8-0.8,2,0,2.8C6,18.8,6.5,19,7,19s1-0.2,1.4-0.6l3.6-3.6l3.6,3.6   C16,18.8,16.5,19,17,19s1-0.2,1.4-0.6c0.8-0.8,0.8-2,0-2.8L14.8,12z" />
				</svg>
				<ul className="menu">
					<li className="active"><a href="/">Inicio</a></li>
					<li className="active"><a href="/">Mujer</a></li>
					<li className="active"><a href="/">Hombre</a></li>
					<li className="active"><a href="/">Niños</a></li>
					<li className="active"><a href="/">+Info</a></li>
					<li><CartWidget/></li>
				</ul>
				
			</nav>
	    </header>
    )
}

export default Header;
