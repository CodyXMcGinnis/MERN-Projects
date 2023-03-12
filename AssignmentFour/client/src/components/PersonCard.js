import React, { useState } from "react";

const PersonCard = (props) => {

    const { item:{firstName, lastName, age, hair}} = props;
    const [state,setState]=useState(age)

    const clickButton=(e)=>{

        setState(state+1)

    }

    return (

    <div className="person_display">
        <h2>
        {lastName}, {firstName}
        </h2>
        <p>Age: {state}</p>
        <p>Hair Color: {hair}</p>
        <button onClick={clickButton}>Birthday Button for {firstName}</button>
    </div>
    );
}

export default PersonCard;