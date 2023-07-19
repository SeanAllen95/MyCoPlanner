import React, {Component, useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';


const EditTechStackForm = ({setCurrentPage, setEntryId, allProjectInformation, category, entry1, handleCategoryChange, handleEntry1Change, entry2,  handleEntry2Change, entry3, handleEntry3Change, entry4, handleEntry4Change, entry5, handleEntry5Change, entry6, handleEntry6Change, entry7, handleEntry7Change, entry8, handleEntry8Change, entryNotes, handleEntryNotesChange, handleEditProjectSubmit, deleteProjectEntry}) => {
      

    const pageId = useLocation()
    const entryId = pageId.pathname.slice(29)

    useEffect(() => {
        setEntryId(entryId);
        }, []);

    const theCurrentPage = useLocation()
    const currentPage = theCurrentPage.pathname.slice(14, 23)

    useEffect(() => {
        setCurrentPage(currentPage);
        }, []);

    const techStackInformation = allProjectInformation?.map((entry) => {

        if (entry.id == entryId){
        return (
            <li className='edit-page-link' key={entry.id}>Item - {entry.entry1} <br/> Use - {entry.entry2} <br/> Research - {entry.entry3} <br/> Extra Notes - {entry.entryNotes} </li>
        );
        }});

    return (
        <>
        <div className="submission-container">
        <h1>Edit Tech Stack</h1>

        <p>{techStackInformation}</p>
        <form onSubmit={handleEditProjectSubmit}>

            <label htmlFor={currentPage}></label>
            <input type='hidden' id={currentPage} value={category} /><br/>

            <label htmlFor="entry1">Tech Stack Item:</label><br/>
            <input type='text' id="entry1" value={entry1} onChange={handleEntry1Change} onClick={handleCategoryChange}/><br/>

            <label htmlFor="entry2">What will this be used for?</label><br/>
            <input type='text' id="entry2" value={entry2} onChange={handleEntry2Change}/><br/>

            <label htmlFor="entry3">Is further research needed to learn how to use this?</label><br/>
            <input type='text' id="entry3" value={entry3} onChange={handleEntry3Change}/><br/>

            {/* <label htmlFor="entry4">Entry4</label>
            <input type='text' id="entry4" value={entry4} onChange={handleEntry4Change}/><br/>

            <label htmlFor="entry5">Entry5</label>
            <input type='text' id="entry5" value={entry5} onChange={handleEntry5Change}/><br/>

            <label htmlFor="entry6">Entry6</label>
            <input type='text' id="entry6" value={entry6} onChange={handleEntry6Change}/><br/>

            <label htmlFor="entry7">Entry7</label>
            <input type='text' id="entry7" value={entry7} onChange={handleEntry7Change}/><br/>

            <label htmlFor="entry8">Entry8</label>
            <input type='text' id="entry8" value={entry8} onChange={handleEntry8Change}/><br/> */}

            <label htmlFor="entryNotes">Add extra notes here</label><br/>
            <input type='text' id="entryNotes" value={entryNotes} onChange={handleEntryNotesChange}/><br/>

            <input type="submit" name="submit" value="Save" />
            </form>

        <button onClick={deleteProjectEntry}>Delete Item</button>
        </div>
        </>
        )

}

export default EditTechStackForm;