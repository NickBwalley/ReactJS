import React from 'react';

function Hello(){
    const sayHello = () => {
        console.log("Hello My People!")
    }
    return(
        <div>
            <h3>This is the Hello Component</h3>
            <button onClick={sayHello}>Hello</button>
        </div>
    )
}

export default Hello;