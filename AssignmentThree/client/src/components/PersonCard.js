import React from "react";

const PersonCard = (props) => {

    const { firstName, lastName, age, hair } = props;

    return (

    <div className="person_display">
        <h2>
        {lastName}, {firstName}
        </h2>
        <p>Age: {age}</p>
        <p>Hair Color: {hair}</p>
    </div>
    );
}

export default PersonCard;