import React, { useState, useEffect } from 'react';

function EditProjectForm({ProjectForm, handleNewProjectFormChange, ProjectDescription, handleDescriptionChange, ProjectName, handleProjectNameChange, Aim1, handleProjectAim1Change, Aim2, handleProjectAim2Change, Aim3, handleProjectAim3Change, handleProjectNotesChange, notes, handleEditProjectSubmit}) {

  return (
    <>
      <form onSubmit={handleEditProjectSubmit}>

        <label htmlFor="ProjectForm">EditProjectForm</label>
        <input type='hidden' id="ProjectForm" value={ProjectForm} onChange={handleNewProjectFormChange} /><br/>

        <label htmlFor="ProjectName">Name of the project</label>
        <input type='text' id="ProjectName" value={ProjectName} onChange={handleProjectNameChange}/><br/>

        <label htmlFor="ProjectDescription">Description of the project</label>
        <input type='text' id="ProjectDescription" value={ProjectDescription} onChange={handleDescriptionChange}/><br/>

        <label htmlFor="Aim1">First aim of the project</label>
        <input type='text' id="Aim1" value={Aim1} onChange={handleProjectAim1Change}/><br/>

        <label htmlFor="Aim2">Second aim of the project</label>
        <input type='text' id="Aim2" value={Aim2} onChange={handleProjectAim2Change}/><br/>

        <label htmlFor="Aim3">Third aim of the Project</label>
        <input type='text' id="Aim3" value={Aim3} onChange={handleProjectAim3Change}/><br/>

        <label htmlFor="notes">Add extra notes here</label>
        <input type='text' id="notes" value={notes} onChange={handleProjectNotesChange}/><br/>

        <input type="submit" name="submit" value="Update Project" />
        </form>
    </>
  );
}

export default EditProjectForm;
