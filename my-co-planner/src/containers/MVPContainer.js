import NewProjectForm from '../components/NewProjectForm';
import React, {Component, useState, useEffect} from 'react';



const MVPContainer = ({category, handleEntryChange, handleEntry2Change, MvpProjectAim, userEntry2, handleSubmit, allEntries, handleNotesChange, handleAddField}) =>{

    
    const allMongoEntries = allEntries?.map((entry) => {
        return (
          <li key={entry.id}>{entry.entry1} {entry.completed1}</li>
        );
      });


return (
    <>
    <NewProjectForm category = {category} handleEntryChange = {handleEntryChange} handleEntry2Change = {handleEntry2Change} MvpProjectAim = {MvpProjectAim} userEntry2 = {userEntry2} handleSubmit={handleSubmit} handleNotesChange={handleNotesChange} handleAddField={handleAddField}/>
    <h3>all plans</h3>
    <h3>{allMongoEntries}</h3>

    </>
)
}

export default MVPContainer;