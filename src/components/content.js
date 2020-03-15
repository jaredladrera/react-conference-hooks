import React, { useState, useContext } from 'react'

export default function Greeting(props){
    const [name, setName] = useState('lance');
    const [lastname, setLastname] = useState('cabiscuelas');

    function handleNameChannge(e){
        setName(e.target.value);
    }

    function handleLastnameChannge(e){
        setLastname(e.target.value)
        console.log(e.target.value);
    }

    return(
        <React.Fragment>
            <input value={name} onChange={handleNameChannge} placeholder="Name" />
            <input value={lastname} onChange={handleLastnameChannge} placeholder="lastname" />
        </React.Fragment>
    );
}
