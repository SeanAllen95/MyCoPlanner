import TechStackForm from "../components/TechStackForm";
import TechStackInformation from "../components/TechStackInformation";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";


const TechStackContainer = ({setCurrentPage, handleCategoryChange, handleEntry1Change, handleEntry2Change, handleEntry3Change, handleEntry4Change, handleEntry5Change, handleEntry6Change, handleEntry7Change, handleEntry8Change, handleEntryNotesChange, allProjectInformation,  handleProjectSubmit}) => {

    const techStackInformation = allProjectInformation?.map((entry) => {

        if (entry.category === "TechStack?submit=Save" || entry.category === "TechStack"){
        return (
          <li key={entry.id}> Item - {entry.entry1} <br/> Use - {entry.entry2} <br/> Research - {entry.entry3} <br/> Extra Notes - {entry.entryNotes} <br/> <Link to={`/MyCollection/TechStack/edit/${entry.id}`}>Edit Tech Stack</Link></li>
        );
        }});    
        
    const theCurrentPage = useLocation()
    const currentPage = theCurrentPage.pathname.slice(14)

    useEffect(() => {
        setCurrentPage(currentPage);
        }, []);

    return(
        <>
        <div className="submission-container">
        <h1>Tech Stack page</h1>
        <TechStackForm currentPage={currentPage} handleCategoryChange = {handleCategoryChange} handleEntry1Change={handleEntry1Change} handleEntry2Change={handleEntry2Change} handleEntry3Change={handleEntry3Change} handleEntry4Change={handleEntry4Change} handleEntry5Change={handleEntry5Change} handleEntry6Change={handleEntry6Change} handleEntry7Change={handleEntry7Change} handleEntry8Change={handleEntry8Change} handleEntryNotesChange = {handleEntryNotesChange} handleProjectSubmit = {handleProjectSubmit}/>
        <TechStackInformation techStackInformation={techStackInformation} />
        <Link to="/MyCollection/HiddenMushroom"><img id="hidden-mushroom" src="/Mushroom4.png" height='100px'></img></Link>
        </div>
        </>
    )
}

export default TechStackContainer;