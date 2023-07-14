import NewProjectForm from '../components/NewProjectForm';
import React, {Component, useState, useEffect} from 'react';



const MVPContainer = ({category, handleEntryChange, handleCompleteChange, complete, handleSubmit, allEntries, handleNotesChange}) =>{

    
    const allMongoEntries = allEntries?.map((entry) => {
        return (
          <li key={entry.id}>{entry.entry} {entry.completed}</li>
        );
      });


return (
    <>
    <NewProjectForm category = {category} handleEntryChange = {handleEntryChange} handleCompleteChange = {handleCompleteChange} complete = {complete} handleSubmit={handleSubmit} handleNotesChange={handleNotesChange} notes={notes}/>
    <h3>all plans</h3>
    <h3>{allMongoEntries}</h3>

    </>
)
}

export default MVPContainer;