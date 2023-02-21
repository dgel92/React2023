import React, { useEffect, useState } from "react";

import CatalogoArray from "../Data/Catalogo";
import ItemList from "../ItemList/ItemList";

function getCatalogo(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(CatalogoArray);
        },500);
    })
}

function ItemListContainer(){
    const [catalogo, setCatalogo] = useState([]);

        useEffect(()=>{
            getCatalogo().then(respuestaPromise =>{
                setCatalogo(respuestaPromise);
            });
        },[]);
        
    return(
        <ItemList catalogo={catalogo}/>
    )
}

export default ItemListContainer;