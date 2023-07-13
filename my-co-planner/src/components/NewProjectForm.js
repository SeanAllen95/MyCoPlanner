import React, {Component, useState, useEffect} from 'react';


const NewProjectForm = ({handleMvpProjectAimChange, handleEntry2Change, MvpProjectAim, userEntry2, handleSubmit}) => {

    return(
        <>
        <h1>Start a new project</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="MvpProjectAim">What is the main aim of the project?</label>
            <input type='text' id="MvpProjectAim" value={MvpProjectAim} onChange={handleMvpProjectAimChange}/><br/>
            <label htmlFor="userEntry2">What is the name of the project?</label>
            <input type='text' id="userEntry2" value={userEntry2} onChange={handleEntry2Change}/><br/>
            <input type="submit" name="submit" value="Save" />
        </form>
    
        </>
        )

}

export default NewProjectForm;