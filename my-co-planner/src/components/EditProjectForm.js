import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function EditProjectForm({setEntryId, allProjectInformation, setCurrentPage, category, entry1,handleEntry1Change, entry2,  handleEntry2Change, entry3, handleEntry3Change, entry4, handleEntry4Change, entry5, handleEntry5Change, entry6, handleEntry6Change, entry7, handleEntry7Change, entry8, handleEntry8Change, entryNotes, handleEntryNotesChange, handleEditProjectSubmit}) {

  const pageId = useLocation()
    const entryId = pageId.pathname.slice(39)
    console.log(entryId)

    useEffect(() => {
        setEntryId(entryId);
        }, []);

    const theCurrentPage = useLocation()
    const currentPage = theCurrentPage.pathname.slice(14, 32)
    console.log(currentPage)

    useEffect(() => {
        setCurrentPage(currentPage);
        }, []);

    const projectInformation = allProjectInformation?.map((entry) => {

        if (entry.id == entryId){
        return (
            <li key={entry.id}>{entry.entry1} {entry.entry2} {entry.entry3}</li>
        );
        }});

  return (
    <>
    <h1>Edit Project Details</h1>
    <h2>{projectInformation}</h2>
      <form onSubmit={handleEditProjectSubmit}>

        <label htmlFor={currentPage}>Category</label>
        <input type='hidden' id={currentPage} value={category} /><br/>

        <label htmlFor="entry1">What is the name of the Project?</label>
        <input type='text' id="entry1" value={entry1} onChange={handleEntry1Change}/><br/>

        <label htmlFor="entry2">Give a Description of the project</label>
        <input type='text' id="entry2" value={entry2} onChange={handleEntry2Change}/><br/>

        <label htmlFor="entry3">What is the reason for doing the project?</label>
        <input type='text' id="entry3" value={entry3} onChange={handleEntry3Change}/><br/>

        <p>List the main aims of the project below</p>

        <label htmlFor="entry4">Aim</label>
        <input type='text' id="entry4" value={entry4} onChange={handleEntry4Change}/><br/>

        <label htmlFor="entry5">Aim</label>
        <input type='text' id="entry5" value={entry5} onChange={handleEntry5Change}/><br/>

        <label htmlFor="entry6">Aim</label>
        <input type='text' id="entry6" value={entry6} onChange={handleEntry6Change}/><br/>

        <label htmlFor="entry7">Aim</label>
        <input type='text' id="entry7" value={entry7} onChange={handleEntry7Change}/><br/>

        <label htmlFor="entry8">Aim</label>
        <input type='text' id="entry8" value={entry8} onChange={handleEntry8Change}/><br/>

        <label htmlFor="entryNotes">Any extra notes about the project can be added here</label>
        <input type='text' id="entryNotes" value={entryNotes} onChange={handleEntryNotesChange}/><br/>

        <input type="submit" name="submit" value="Save" />
        </form>
    </>
  );
}

export default EditProjectForm;
