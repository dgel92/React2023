import CatalogoArray from "../Data/Catalogo"
import React from "react"

function Item({catalogo}){
    return(
        <div>
            <h2>{catalogo.nombre}</h2>
            <h4>{catalogo.precio}</h4>
            <h4>{catalogo.descripcion}</h4>
            <br/>
            <hr/>
        </div>
    )
}

export default Item