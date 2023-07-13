import NewProjectForm from '../components/NewProjectForm';
import React, {Component, useState, useEffect} from 'react';



const MVPContainer = ({handleMvpProjectAimChange, handleEntry2Change, MvpProjectAim, userEntry2, handleSubmit, allEntries}) =>{

    
    const allMongoEntries = allEntries?.map((entry) => {
        return (
          <li key={entry.id}>{entry.entry}</li>
        );
      });


return (
    <>
    <NewProjectForm handleMvpProjectAimChange = {handleMvpProjectAimChange} handleEntry2Change = {handleEntry2Change} MvpProjectAim = {MvpProjectAim} userEntry2 = {userEntry2} handleSubmit={handleSubmit}/>
    <h3>all plans</h3>
    <h3>{allMongoEntries}</h3>

    </>
)
}

export default MVPContainer;