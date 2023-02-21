import Item from "../Item/Item"
import React from "react"

function ItemList({catalogo}){
    return(
        <>
        {catalogo.map(thisCatalogo=>{
            return(
                <Item catalogo={thisCatalogo} key={thisCatalogo.id}/>
            )
        })}
        </>        
    )
}

export default ItemList