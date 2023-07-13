import React, {Component, useState, useEffect} from 'react';


const NewProjectForm = ({handleEntryChange, handleEntry2Change, userEntry, userEntry2, handleSubmit}) => {

    return(
        <>
        <h1>Start a new project</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="userEntry">MVP Entry</label>
            <input type='text' id="userEntry" value={userEntry} onChange={handleEntryChange}/>
            <label htmlFor="userEntry2">MVP Entry 2</label>
            <input type='text' id="userEntry2" value={userEntry2} onChange={handleEntry2Change}/>
            <input type="submit" name="submit" value="Save" />
        </form>
    
        </>
        )

}

export default NewProjectForm;