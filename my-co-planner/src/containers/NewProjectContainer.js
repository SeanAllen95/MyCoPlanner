import ProjectForm from '../components/ProjectForm';
import React, { useEffect} from 'react';
import { Link, useLocation } from 'react-router-dom';



const ProjectInfoContainer = ({setCurrentPage, handleCategoryChange, handleEntry1Change, handleEntry2Change, handleEntry3Change, handleEntry4Change, handleEntry5Change, handleEntry6Change, handleEntry7Change, handleEntry8Change, handleEntryNotesChange, allEntries,  handleProjectSubmit}) =>{

    const theCurrentPage = useLocation()
    const currentPage = theCurrentPage.pathname.slice(1)
    console.log(currentPage)

    useEffect(() => {
        setCurrentPage(currentPage);
        }, []);

return (
    <>
    <div className='new-project-questions'>
    <h1>New Project Questionnaire!</h1>
    <h2>Begin by answering the questions below!</h2>
    <h3>Answers can be left blank if needed</h3>
    <ProjectForm currentPage={currentPage} handleCategoryChange = {handleCategoryChange} handleEntry1Change={handleEntry1Change} handleEntry2Change={handleEntry2Change} handleEntry3Change={handleEntry3Change} handleEntry4Change={handleEntry4Change} handleEntry5Change={handleEntry5Change} handleEntry6Change={handleEntry6Change} handleEntry7Change={handleEntry7Change} handleEntry8Change={handleEntry8Change} handleEntryNotesChange = {handleEntryNotesChange} handleProjectSubmit = {handleProjectSubmit} />
    </div>
    </>
)
}

export default ProjectInfoContainer;