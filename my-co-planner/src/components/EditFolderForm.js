import React, {Component, useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';


const EditFoldersForm = ({setCurrentPage, setEntryId, allProjectInformation, category, entry1, handleCategoryChange, handleEntry1Change, entry2,  handleEntry2Change, entry3, handleEntry3Change, entry4, handleEntry4Change, entry5, handleEntry5Change, entry6, handleEntry6Change, entry7, handleEntry7Change, entry8, handleEntry8Change, entryNotes, handleEntryNotesChange, handleEditProjectSubmit, deleteProjectEntry}) => {
      

    const pageId = useLocation()
    const entryId = pageId.pathname.slice(42)

    useEffect(() => {
        setEntryId(entryId);
        }, []);

    const theCurrentPage = useLocation()
    const currentPage = theCurrentPage.pathname.slice(14, 36)

    useEffect(() => {
        setCurrentPage(currentPage);
        }, []);

    const folderInformation = allProjectInformation?.map((entry) => {

        if (entry.id == entryId){
        return (
            <li className='edit-page-link' key={entry.id}>Name - {entry.entry1} <br/> Description - {entry.entry2} <br/> Function - {entry.entry3} <br/> Files - {entry.entry4} <br/> Extra Notes -  {entry.entryNotes}</li>
        );
        }});

    return (
        <>
        <h1>Edit Folder</h1>
        <p>{folderInformation}</p>

        <form onSubmit={handleEditProjectSubmit}>

        <label htmlFor={currentPage}></label>
            <input type='hidden' id={currentPage} value={category} /><br/>

            <label htmlFor="entry1">Name/Description of the folder:</label><br/>
            <input type='text' id="entry1" value={entry1} onChange={handleEntry1Change} onClick={handleCategoryChange}/><br/>

            <label htmlFor="entry2">Where in the app will this folder be located?</label><br/>
            <input type='text' id="entry2" value={entry2} onChange={handleEntry2Change}/><br/>

            <label htmlFor="entry3">What is the function of the folder?</label><br/>
            <input type='text' id="entry3" value={entry3} onChange={handleEntry3Change}/><br/>

            <label htmlFor="entry4">What files will be located in this folder?</label><br/>
            <input type='text' id="entry4" value={entry4} onChange={handleEntry4Change}/><br/>

            {/* <label htmlFor="entry5">Entry5</label>
            <input type='text' id="entry5" value={entry5} onChange={handleEntry5Change}/><br/>

            <label htmlFor="entry6">Entry6</label>
            <input type='text' id="entry6" value={entry6} onChange={handleEntry6Change}/><br/>

            <label htmlFor="entry7">Entry7</label>
            <input type='text' id="entry7" value={entry7} onChange={handleEntry7Change}/><br/>

            <label htmlFor="entry8">Entry8</label>
            <input type='text' id="entry8" value={entry8} onChange={handleEntry8Change}/><br/>  */}

            <label htmlFor="entryNotes">Add extra notes here</label><br/>
            <input type='text' id="entryNotes" value={entryNotes} onChange={handleEntryNotesChange}/><br/>

            <input type="submit" name="submit" value="Edit Folder" />
            </form>
        <button onClick={deleteProjectEntry}>Delete folder and files</button>
        </>
        )

}

export default EditFoldersForm;