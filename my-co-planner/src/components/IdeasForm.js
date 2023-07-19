import React, {Component, useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';


const IdeasForm = ({ category, currentPage, handleCurrentPageChange, entry1,handleEntry1Change, entry2,  handleEntry2Change, entry3, handleEntry3Change, entry4, handleEntry4Change, entry5, handleEntry5Change, entry6, handleEntry6Change, entry7, handleEntry7Change, entry8, handleEntry8Change, entryNotes, handleEntryNotesChange, handleProjectSubmit}) => {



    return (
        <>
        <h2>Add Ideas here</h2>
        <form onSubmit={handleProjectSubmit}>

            <label htmlFor={category}></label>
            <input type='hidden' id={category} value={currentPage} /><br/>

            <label htmlFor="entry1">Name your idea:</label><br/>
            <input type='text' id="entry1" value={entry1} onChange={handleEntry1Change}/><br/>

            <label htmlFor="entry2">Describe the Idea</label><br/>
            <input type='text' id="entry2" value={entry2} onChange={handleEntry2Change}/><br/>

            <label htmlFor="entry3">How will this idea be implemented?</label><br/>
            <input type='text' id="entry3" value={entry3} onChange={handleEntry3Change}/><br/>

            <label htmlFor="entry4">What other apsects of the plan will this have an effect on?</label><br/>
            <input type='text' id="entry4" value={entry4} onChange={handleEntry4Change}/><br/>
           
            {/* <label htmlFor="entry5">Entry5</label><br/>
            <input type='text' id="entry5" value={entry5} onChange={handleEntry5Change}/><br/>

            <label htmlFor="entry6">Entry6</label><br/>
            <input type='text' id="entry6" value={entry6} onChange={handleEntry6Change}/><br/>

            <label htmlFor="entry7">Entry7</label><br/>
            <input type='text' id="entry7" value={entry7} onChange={handleEntry7Change}/><br/>

            <label htmlFor="entry8">Entry8</label><br/>
            <input type='text' id="entry8" value={entry8} onChange={handleEntry8Change}/><br/> */}

            <label htmlFor="entryNotes">Add extra notes here</label><br/>
            <input type='text' id="entryNotes" value={entryNotes} onChange={handleEntryNotesChange}/><br/>

            <input type="submit" name="submit" value="Save" />
        </form>
        </>
        )

}

export default IdeasForm;