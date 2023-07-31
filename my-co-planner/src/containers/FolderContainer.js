import FolderForm from "../components/FolderForm";
import FolderInformation from "../components/FolderInformation";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";


const FolderContainer = ({setCurrentPage, handleCategoryChange, handleEntry1Change, handleEntry2Change, handleEntry3Change, handleEntry4Change, handleEntry5Change, handleEntry6Change, handleEntry7Change, handleEntry8Change, handleEntryNotesChange, allProjectInformation,  handleProjectSubmit}) => {

    const folderInformation = allProjectInformation?.map((entry) => {

        if (entry.category === "FolderAndFileStructure?submit=Save" || entry.category === "FolderAndFileStructure"){
        return (
          <li key={entry.id}>Name - {entry.entry1} <br/> Description - {entry.entry2} <br/> Function - {entry.entry3} <br/> Files - {entry.entry4} <br/> Extra Notes -  {entry.entryNotes}  <br/> <Link to={`/MyCollection/FolderAndFileStructure/edit/${entry.id}`}>Edit Folders</Link></li>
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
        <h1>Folder and File page</h1>
        <FolderForm currentPage={currentPage} handleCategoryChange = {handleCategoryChange} handleEntry1Change={handleEntry1Change} handleEntry2Change={handleEntry2Change} handleEntry3Change={handleEntry3Change} handleEntry4Change={handleEntry4Change} handleEntry5Change={handleEntry5Change} handleEntry6Change={handleEntry6Change} handleEntry7Change={handleEntry7Change} handleEntry8Change={handleEntry8Change} handleEntryNotesChange = {handleEntryNotesChange} handleProjectSubmit = {handleProjectSubmit}/>
        <FolderInformation folderInformation={folderInformation} />
        </div>
        </>
    )
}

export default FolderContainer;