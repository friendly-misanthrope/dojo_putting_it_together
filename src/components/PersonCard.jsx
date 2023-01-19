import React, {useState} from 'react';

const PersonCard = (props) => {

    const [state, setState] = useState(props.age);

    const weGonnaPartyLikeItsYourBirthday = () => {
        setState(state + 1)
    }

    return(
        <div>
            <h1>{props.lastName}, {props.firstName}</h1>
            <p>Age: {state}</p>
            <p>Hair Color: {props.hairColor}</p>
            <button onClick={weGonnaPartyLikeItsYourBirthday}>Click here if it's your birthday</button>
        </div>
    )
}

export default PersonCard;