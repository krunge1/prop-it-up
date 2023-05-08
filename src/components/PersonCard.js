//rafce is the shorthand to push the below data

import React from 'react'

const PersonCard = (person) => {
    const {firstName, lastName, age, hairColor} = person;
    return (
        <div>
            <h1>{lastName}, {firstName}</h1>
            <p>Age: {age}</p>
            <p>Hair Color: {hairColor}</p>
        </div>
    );

}

export default PersonCard;