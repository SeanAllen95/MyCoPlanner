import ToolsAndLanguagesForm from "../components/ToolsAndLanguagesForm";
import ToolsAndLanguagesInformation from "../components/ToolsAndLanguagesInformation";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";


const ToolsAndLanguagesContainer = ({setCurrentPage, handleCategoryChange, handleEntry1Change, handleEntry2Change, handleEntry3Change, handleEntry4Change, handleEntry5Change, handleEntry6Change, handleEntry7Change, handleEntry8Change, handleEntryNotesChange, allProjectInformation,  handleProjectSubmit}) => {

    const toolsAndLanguagesInformation = allProjectInformation?.map((entry) => {

        if (entry.category == "ToolsAndLanguages?submit=Save" || entry.category == "ToolsAndLanguages"){
        return (
          <li key={entry.id}>{entry.entry1} {entry.entry2} <Link to={`/MyCollection/ToolsAndLanguages/edit/${entry.id}`}>Edit Tools and Languages</Link></li>
        );
        }});    
        
    const theCurrentPage = useLocation()
    const currentPage = theCurrentPage.pathname.slice(14)

    useEffect(() => {
        setCurrentPage(currentPage);
        }, []);

    return(
        <>
        <h1>This is the Tools and Languages container</h1>
        <ToolsAndLanguagesForm currentPage={currentPage} handleCategoryChange = {handleCategoryChange} handleEntry1Change={handleEntry1Change} handleEntry2Change={handleEntry2Change} handleEntry3Change={handleEntry3Change} handleEntry4Change={handleEntry4Change} handleEntry5Change={handleEntry5Change} handleEntry6Change={handleEntry6Change} handleEntry7Change={handleEntry7Change} handleEntry8Change={handleEntry8Change} handleEntryNotesChange = {handleEntryNotesChange} handleProjectSubmit = {handleProjectSubmit}/>
        <ToolsAndLanguagesInformation toolsAndLanguagesInformation={toolsAndLanguagesInformation} />
        </>
    )
}

export default ToolsAndLanguagesContainer;