//rafce is the shorthand to push the below data

import React, {useState} from 'react'

const PersonCard = (person) => {
    const {firstName, lastName, age, hairColor} = person;
    const [birthday, setBirthday] = useState(age);

    return (
        <div>
            <h1>{lastName}, {firstName}</h1>
            <p>Age: {birthday}</p>
            <p>Hair Color: {hairColor}</p>
            <button onClick = {eventSetter => setBirthday(birthday+1)}>Increase Age</button>
        </div>
    );

}

export default PersonCard;