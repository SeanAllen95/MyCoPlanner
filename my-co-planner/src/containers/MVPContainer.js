import NewProjectForm from '../components/NewProjectForm';
import React, {Component, useState, useEffect} from 'react';
import { Link } from 'react-router-dom';



const MVPContainer = ({deleteEntry, category, handleCategoryChange, handleEntryChange, handleCompleteChange, complete, handleSubmit, allEntries, handleNotesChange, notes}) =>{

    
    const allMongoEntries = allEntries?.map((entry) => {
        return (
          <li key={entry.id}>{entry.category} {entry.entry} {entry.complete} {entry.notes} <Link to={`/edit/${entry.id}`}>Edit Form</Link><span onClick={deleteEntry}>Delete Form</span></li>
        );
      });
    
      const allMongoCategories = allEntries?.map((entry) => {
        if (entry.category == "MVP") {
          return (
            <li key = {entry.id}>{entry.category} {entry.notes} {entry.entry}</li>
          )
        };
      });




return (
    <>
    <h1>Start a new project!</h1>
    <h3>What is the name of the project? This can be changed later</h3>
    <NewProjectForm category = {category} handleCategoryChange={handleCategoryChange} handleEntryChange = {handleEntryChange} handleCompleteChange = {handleCompleteChange} complete = {complete} handleSubmit={handleSubmit} handleNotesChange={handleNotesChange} notes={notes}/>
    <h3>{allMongoEntries}</h3>
    <h3>{allMongoCategories}</h3>
    </>
)
}

export default MVPContainer;