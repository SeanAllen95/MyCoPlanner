import NewProjectForm from '../components/ProjectForm';
import React, {Component, useState, useEffect} from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';



const ProjectInfoContainer = ({handleCategoryChange, handleEntry1Change, handleEntry2Change, handleEntry3Change, handleEntry4Change, handleEntry5Change, handleEntry6Change, handleEntry7Change, handleEntry8Change, handleEntryNotesChange, allEntries,  handleProjectSubmit}) =>{

    const currentPage = useLocation()
    const currentPageCategory = currentPage.pathname.slice(1)
    console.log(currentPageCategory)

return (
    <>
    <h1>Start a new project!</h1>
    <h3>Begin by answering the questions below!</h3>
    <h3>Answers can be left blank if needed</h3>
    <NewProjectForm currentPageCategory={currentPageCategory} handleCategoryChange = {handleCategoryChange} handleEntry1Change={handleEntry1Change} handleEntry2Change={handleEntry2Change} handleEntry3Change={handleEntry3Change} handleEntry4Change={handleEntry4Change} handleEntry5Change={handleEntry5Change} handleEntry6Change={handleEntry6Change} handleEntry7Change={handleEntry7Change} handleEntry8Change={handleEntry8Change} handleEntryNotesChange = {handleEntryNotesChange} handleProjectSubmit = {handleProjectSubmit} />
    </>
)
}

export default ProjectInfoContainer;