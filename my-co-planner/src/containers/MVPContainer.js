import NewProjectForm from '../components/NewProjectForm';
import React, {Component, useState, useEffect} from 'react';



const MVPContainer = ({category, handleEntry1Change, handleEntry2Change, MvpProjectAim, userEntry2, handleSubmit, allEntries, handleNotesChange}) =>{

    
    const allMongoEntries = allEntries?.map((entry) => {
        return (
          <li key={entry.id}>{entry.entry1} {entry.completed1}</li>
        );
      });


return (
    <>
    <NewProjectForm category = {category} handleEntry1Change = {handleEntry1Change} handleEntry2Change = {handleEntry2Change} MvpProjectAim = {MvpProjectAim} userEntry2 = {userEntry2} handleSubmit={handleSubmit} handleNotesChange={handleNotesChange}/>
    <h3>all plans</h3>
    <h3>{allMongoEntries}</h3>

    </>
)
}

export default MVPContainer;