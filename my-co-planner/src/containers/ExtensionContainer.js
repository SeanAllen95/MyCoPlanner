import ExtensionForm from "../components/ExtensionForm";
import ExtensionInformation from "../components/ExtensionInformation";
import TDDForm from "../components/TDDForm";
import TDDInformation from "../components/TDDInformation";
import { Link } from "react-router-dom";


const ExtensionContainer = ({currentPage, handleCategoryChange, handleEntry1Change, handleEntry2Change, handleEntry3Change, handleEntry4Change, handleEntry5Change, handleEntry6Change, handleEntry7Change, handleEntry8Change, handleEntryNotesChange, allProjectInformation,  handleProjectSubmit}) => {

    const extensionInformation = allProjectInformation?.map((entry) => {

        if (entry.category == "ExtensionInformation?submit=Save" || entry.category == "ExtensionInformation"){
        return (
          <li key={entry.id}>{entry.entry1} {entry.entry2} <Link to={`/MyCollection/ExtensionInformation/edit/${entry.id}`}>Edit Extension details</Link></li>
        );
}});

    return(
        <>
        <h1>This is the Extension container</h1>
        <ExtensionForm currentPage={currentPage} handleCategoryChange = {handleCategoryChange} handleEntry1Change={handleEntry1Change} handleEntry2Change={handleEntry2Change} handleEntry3Change={handleEntry3Change} handleEntry4Change={handleEntry4Change} handleEntry5Change={handleEntry5Change} handleEntry6Change={handleEntry6Change} handleEntry7Change={handleEntry7Change} handleEntry8Change={handleEntry8Change} handleEntryNotesChange = {handleEntryNotesChange} handleProjectSubmit = {handleProjectSubmit}/>
        <ExtensionInformation extensionInformation={extensionInformation} />
        </>
    )
}

export default ExtensionContainer;