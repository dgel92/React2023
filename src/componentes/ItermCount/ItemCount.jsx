import React,{useState} from "react"

function ItemCount(props){

    const [count, setCount] = useState(props.inicial);

    const suma = ()=>{
        if (count < props.stock){
            return setCount(count + 1);
        }
    };
    
    const resta = () => {
        if (count > props.inicial){
            return setCount(count - 1);
        }
    };

    return(

        <div>
            <div>
                <h1>
                    Compra tus items
                </h1>
                <div>
                    <button onClick={resta}>-</button>
                    <button>{count}</button>
                    <button onClick={suma}>+</button>
                </div>
                <div>Agregar al carrito</div>
            </div>
        </div>
    )
}

export default ItemCount