import React from 'react'

const sayName = (yourName = prompt("What's your name?")) => {
    if (yourName) {
        return `Hello, ${yourName}! Warm greetings from your friendly desktop robot!`;
    }
    else {
        prompt("I can't greet you if I don't know your name! What's your name?");
    }
}

const AlertButton = () => {
    return(
        <div>
            <button onClick = { () => alert(sayName()) }>Click here for a warm greeting</button>
        </div>
    )
}
export default AlertButton