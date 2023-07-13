import React, {Component, useState, useEffect} from 'react';


const NewProjectForm = ({category, handleEntry1Change, handleEntry2Change, entry1, entry2, handleSubmit, handleNotesChange, notes}) => {



    return(
        <>
        <h1>Start a new project</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="category">Category</label>
            <input type='text' id="category" value={category} /><br/>

            <label htmlFor="entry1">What is the main aim of the project?</label>
            <input type='text' id="entry1" value={entry1} onChange={handleEntry1Change}/><br/>

            <label htmlFor="entry2">What is the name of the project?</label>
            <input type='text' id="entry2" value={entry2} onChange={handleEntry2Change}/><br/>

            <label htmlFor="notes">Notes</label>
            <input type='text' id="notes" value={notes} onChange={handleNotesChange}/><br/>

            <input type="submit" name="submit" value="Save" />
        </form>
    
        </>
        )

}

export default NewProjectForm;