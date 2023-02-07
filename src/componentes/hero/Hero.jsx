import React from "react";
import heroimagen1 from "../../multimedia/heroImagen.jpg"
import main from "../../../src/componentes/sass/main.css"

function Hero(){
    return(
        <section className="hero">
            <img className="hero_bg" src={heroimagen1}></img>
            <div className="hero_content">
                <h1 className="hero_title">Aca va un logo <span>Impactante</span></h1>
            </div>
        </section>
    )
}

export default Hero;