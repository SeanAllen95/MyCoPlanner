import React, {Component, useState, useEffect} from 'react';


const NewProjectForm = ({category, handleEntryChange, handleEntry2Change, entry, entry2, handleSubmit, handleNotesChange, notes, handleAddField, handleChange}) => {




    return(
        <>
        <h1>Start a new project</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="category">Category</label>
            <input type='text' id="category" value={category} /><br/>

            <label htmlFor="entry">What is the main aim of the project?</label>
            <input type='text' id="entry" value={entry} onChange={handleEntryChange}/><br/>

            <label htmlFor="entry2">What is the name of the project?</label>
            <input type='text' id="entry2" value={entry2} onChange={handleEntry2Change}/><br/>

            {/* {entry?.map((input, index) => (
                <input key={index} value={input.value} onChange={event => handleChange(index, event)}/>
            ))}

            <button onClick={handleAddField}>Add Field</button> */}

            <label htmlFor="notes">Notes</label>
            <input type='text' id="notes" value={notes} onChange={handleNotesChange}/><br/>


            <input type="submit" name="submit" value="Save" />
        </form>
    
        </>
        )

}

export default NewProjectForm;