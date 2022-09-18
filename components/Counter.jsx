import React, { useState } from 'react';

function Counter(){

    const [arr, setArr] = useState([])


    return (
        <div>
            <button onClick={addPlus}>+</button>
            <button onClick={addMinus}>-</button>
            {arr.concat("").sort()}
        </div>
    )
    
    function addPlus(){
        setArr(prevArr => [ ...prevArr, "+"])
    }

    function addMinus(){
        setArr(prevArr => [ ...prevArr, "-"])
    }





    const [cart, setCart] = useState({
        item: " Apple",
        quantity: 0,
    });

    function addApple(){
        //1. Use Callback to get the previous value
        //2. Spread out all the properties of the previous value (...)
        //3. Only change the property you to need to change
        setCart(prevCart => ({
            ...prevCart,
            quantity: prevCart.quantity + 1,
        }))
    }

    function subtractApple(){
        setCart(prevCart => ({
            ...prevCart,
            quantity: prevCart.quantity - 1,
        }))
    }

    return (
        <div>
            <button onClick={subtractApple}>-</button>
            {cart.quantity}
            {cart.item}
            <button onClick={addApple} >+</button>
        </div>
    )
}

export default Counter