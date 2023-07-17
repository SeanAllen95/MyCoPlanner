import React, {Component, useState, useEffect} from 'react';


const ExtensionForm = ({currentPage, category, handleCategoryChange, entry1,handleEntry1Change, entry2,  handleEntry2Change, entry3, handleEntry3Change, entry4, handleEntry4Change, entry5, handleEntry5Change, entry6, handleEntry6Change, entry7, handleEntry7Change, entry8, handleEntry8Change, entryNotes, handleEntryNotesChange, handleProjectSubmit}) => {
      

    return (
        <>
        <h1>Add extensions!</h1>
        <form onSubmit={handleProjectSubmit}>

            <label htmlFor={currentPage}>Category</label>
            <input type='hidden' id={currentPage} value={category} /><br/>

            <label htmlFor="entry1">Entry1</label>
            <input type='text' id="entry1" value={entry1} onChange={handleEntry1Change} onClick={handleCategoryChange}/><br/>

            <label htmlFor="entry2">Entry2</label>
            <input type='text' id="entry2" value={entry2} onChange={handleEntry2Change}/><br/>

            <label htmlFor="entry3">Entry3</label>
            <input type='text' id="entry3" value={entry3} onChange={handleEntry3Change}/><br/>

            <label htmlFor="entry4">Entry4</label>
            <input type='text' id="entry4" value={entry4} onChange={handleEntry4Change}/><br/>

            <label htmlFor="entry5">Entry5</label>
            <input type='text' id="entry5" value={entry5} onChange={handleEntry5Change}/><br/>

            <label htmlFor="entry6">Entry6</label>
            <input type='text' id="entry6" value={entry6} onChange={handleEntry6Change}/><br/>

            <label htmlFor="entry7">Entry7</label>
            <input type='text' id="entry7" value={entry7} onChange={handleEntry7Change}/><br/>

            <label htmlFor="entry8">Entry8</label>
            <input type='text' id="entry8" value={entry8} onChange={handleEntry8Change}/><br/>

            <label htmlFor="entryNotes">Add extra notes here</label>
            <input type='text' id="entryNotes" value={entryNotes} onChange={handleEntryNotesChange}/><br/>

            <input type="submit" name="submit" value="Save" />
        </form>

        </>
        )
}

export default ExtensionForm;