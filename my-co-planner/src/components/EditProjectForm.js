import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function EditProjectForm({setEntryId, allProjectInformation, setCurrentPage, category, entry1,handleEntry1Change, entry2,  handleEntry2Change, entry3, handleEntry3Change, entry4, handleEntry4Change, entry5, handleEntry5Change, entry6, handleEntry6Change, entry7, handleEntry7Change, entry8, handleEntry8Change, entryNotes, handleEntryNotesChange, handleEditProjectSubmit}) {

  const pageId = useLocation()
    const entryId = pageId.pathname.slice(38)
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
            <li className='edit-page-link' id="project-information-list-item" key={entry.id}>
            
            What is the name of the Project? - {entry.entry1} <br/>
            Give a Description of the project - {entry.entry2} <br/>
            What is the reason for doing the project? - {entry.entry3} <br/>
            List the main aims of the project below<br/>
            Aim - {entry.entry4} <br/>
            Aim - {entry.entry5} <br/> 
            Aim - {entry.entry6} <br/>
            Aim - {entry.entry7} <br/> 
            Aim - {entry.entry8} <br/> 
            Extra Notes about the project - {entry.entryNotes} <br/>
            </li>
        );
        }});

  return (
    <>
    <div className="submission-container">
    <h1>Edit Project Details</h1>
    <p>{projectInformation}</p>
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

        <input type="submit" name="submit" value="Update Project details" />
        </form>
      </div>
    </>
  );
}

export default EditProjectForm;
