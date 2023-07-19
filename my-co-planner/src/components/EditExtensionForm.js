import React, {Component, useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';


const EditExtensionForm = ({setEntryId, allProjectInformation, setCurrentPage, category, entry1, handleCategoryChange, handleEntry1Change, entry2,  handleEntry2Change, entry3, handleEntry3Change, entry4, handleEntry4Change, entry5, handleEntry5Change, entry6, handleEntry6Change, entry7, handleEntry7Change, entry8, handleEntry8Change, entryNotes, handleEntryNotesChange, handleEditProjectSubmit, deleteProjectEntry}) => {
      
    const pageId = useLocation()
    const entryId = pageId.pathname.slice(40)

    useEffect(() => {
        setEntryId(entryId);
        }, []);

    const theCurrentPage = useLocation()
    const currentPage = theCurrentPage.pathname.slice(14, 34)

    useEffect(() => {
        setCurrentPage(currentPage);
        }, []);

    const extensionInformation = allProjectInformation?.map((entry) => {

        if (entry.id == entryId){
        return (
            <li key={entry.id}>{entry.entry1} {entry.entry2} </li>
        );
        }});

    return (
        <>
        <h1>Edit Extension</h1>

        <h3>{extensionInformation}</h3>
        <form onSubmit={handleEditProjectSubmit}>

            <label htmlFor={currentPage}></label>
            <input type='hidden' id={currentPage} value={category} /><br/>

            <label htmlFor="entry1">What extension is to be built into the App?</label>
            <input type='text' id="entry1" value={entry1} onChange={handleEntry1Change} onClick={handleCategoryChange}/><br/>

            <label htmlFor="entry2">Give a description of the extension:</label>
            <input type='text' id="entry2" value={entry2} onChange={handleEntry2Change}/><br/>

            <label htmlFor="entry3">Will this extension affect the tech stack?</label>
            <input type='text' id="entry3" value={entry3} onChange={handleEntry3Change}/><br/>

            <label htmlFor="entry4">Will this extension affect TDD?</label>
            <input type='text' id="entry4" value={entry4} onChange={handleEntry4Change}/><br/>

            <label htmlFor="entry5">Will this extension affect the Schedule?</label>
            <input type='text' id="entry5" value={entry5} onChange={handleEntry5Change}/><br/>

            <label htmlFor="entry6">Will this extension have new potential challenges?</label>
            <input type='text' id="entry6" value={entry6} onChange={handleEntry6Change}/><br/>

            {/* <label htmlFor="entry7">Entry7</label>
            <input type='text' id="entry7" value={entry7} onChange={handleEntry7Change}/><br/>

            <label htmlFor="entry8">Entry8</label>
            <input type='text' id="entry8" value={entry8} onChange={handleEntry8Change}/><br/> */}

            <label htmlFor="entryNotes">Add extra notes here</label><br/>
            <input type='text' id="entryNotes" value={entryNotes} onChange={handleEntryNotesChange}/><br/>

            <input type="submit" name="submit" value="Edit Extension" />
            </form>
        <button onClick={deleteProjectEntry}>Delete extension</button>
        </>
        )

}

export default EditExtensionForm;