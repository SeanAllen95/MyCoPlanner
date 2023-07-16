import NewProjectForm from '../components/NewProjectForm';
import React, {Component, useState, useEffect} from 'react';
import { Link } from 'react-router-dom';



const ProjectInfoContainer = ({handleNewProjectSubmit, handleProjectNameChange, handleProjectDescriptionChange, handleProjectAim1Change, handleProjectAim2Change, handleProjectAim3Change, handleProjectNotesChange, allEntries }) =>{


return (
    <>
    <h1>Start a new project!</h1>
    <h3>Begin by answering the questions below!</h3>
    <h3>Answers can be left blank if needed</h3>
    <NewProjectForm handleProjectNameChange = {handleProjectNameChange} handleDescriptionChange = {handleProjectDescriptionChange} allEntries = {allEntries} handleProjectAim1Change={handleProjectAim1Change} handleProjectAim2Change={handleProjectAim2Change} handleProjectAim3Change={handleProjectAim3Change} handleProjectNotesChange = {handleProjectNotesChange} handleNewProjectSubmit = {handleNewProjectSubmit} />

  
  
    </>
)
}

export default ProjectInfoContainer;