import NewProjectForm from '../components/NewProjectForm';
import React, {Component, useState, useEffect} from 'react';



const MVPContainer = () =>{

    const [userEntry, setUserEntry] = useState("Entry Here");
    const [userEntry2, setUserEntry2] = useState("Entry 2 Here");

    const handleEntryChange = (ev) => setUserEntry(ev.target.value);
    const handleEntry2Change = (ev) => setUserEntry2(ev.target.value);

    const handleSubmit = () => {
        const data = {entry: userEntry, completed: userEntry2}; // Replace with your form data
        
        fetch('http://localhost:8080/mvp', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => {
            if (response.ok) {
                console.log('Data submitted successfully');
            } else {
                console.error('Failed to submit data:', response.status);
            }
            })
            .catch(error => {
            console.error('An error occurred:', error);
            });
        };



return (
    <>
    <h1>New project page</h1>
    <NewProjectForm handleEntryChange = {handleEntryChange} handleEntry2Change = {handleEntry2Change} userEntry = {userEntry} userEntry2 = {userEntry2} handleSubmit={handleSubmit}/>
    </>
)
}

export default MVPContainer;