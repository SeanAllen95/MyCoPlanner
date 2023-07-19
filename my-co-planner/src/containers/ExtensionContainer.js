import ExtensionForm from "../components/ExtensionForm";
import ExtensionInformation from "../components/ExtensionInformation";
import TDDForm from "../components/TDDForm";
import TDDInformation from "../components/TDDInformation";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";


const ExtensionContainer = ({setCurrentPage, handleCategoryChange, handleEntry1Change, handleEntry2Change, handleEntry3Change, handleEntry4Change, handleEntry5Change, handleEntry6Change, handleEntry7Change, handleEntry8Change, handleEntryNotesChange, allProjectInformation,  handleProjectSubmit}) => {

    const extensionInformation = allProjectInformation?.map((entry) => {

        if (entry.category === "ExtensionInformation?submit=Save" || entry.category === "ExtensionInformation"){
        return (
          <li key={entry.id}>Extension - {entry.entry1} <br/> Description - {entry.entry2} <br/> Other affects -  {entry.entry3} <br/> TDD - {entry.entry4} <br/> Schedule - {entry.entry5} <br/> Challenges - {entry.entry6} <br/> Extra Notes - {entry.entryNoes} <br/> <Link to={`/MyCollection/ExtensionInformation/edit/${entry.id}`}>Edit Extension details</Link></li>
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
        <h1>Extension Page</h1>
        <ExtensionForm currentPage={currentPage} handleCategoryChange = {handleCategoryChange} handleEntry1Change={handleEntry1Change} handleEntry2Change={handleEntry2Change} handleEntry3Change={handleEntry3Change} handleEntry4Change={handleEntry4Change} handleEntry5Change={handleEntry5Change} handleEntry6Change={handleEntry6Change} handleEntry7Change={handleEntry7Change} handleEntry8Change={handleEntry8Change} handleEntryNotesChange = {handleEntryNotesChange} handleProjectSubmit = {handleProjectSubmit}/>
        <ExtensionInformation extensionInformation={extensionInformation} />
        </div>
        </>
    )
}

export default ExtensionContainer;