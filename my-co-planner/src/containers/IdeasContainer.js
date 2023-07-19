import IdeasForm from "../components/IdeasForm";
import IdeasInformation from "../components/IdeasInformation";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";


const IdeasContainer = ({setCurrentPage, handleCurrentPageChange, handleCategoryChange, handleEntry1Change, handleEntry2Change, handleEntry3Change, handleEntry4Change, handleEntry5Change, handleEntry6Change, handleEntry7Change, handleEntry8Change, handleEntryNotesChange, allProjectInformation,  handleProjectSubmit}) => {

    const ideasInformation = allProjectInformation?.map((entry) => {

        if (entry.category === "IdeasInformation?submit=Save" || entry.category === "Ideas"){
        return (
          <li className='test-item' key={entry.id}>{entry.entry1} {entry.entry2} {entry.entry3} {entry.entryNotes}<Link to={`/MyCollection/IdeasInformation/edit/${entry.id}`}>Edit Idea details</Link></li>
        );
        }});

    const theCurrentPage = useLocation()
    const currentPage = theCurrentPage.pathname.slice(14)

    useEffect(() => {
        setCurrentPage(currentPage);
        }, []);

    return(
        <>
        <h1>Ideas Page</h1>
        <h2>Use this page to add any Ideas you have</h2>
        <IdeasForm currentPage={currentPage} handleEntry1Change={handleEntry1Change} handleEntry2Change={handleEntry2Change} handleEntry3Change={handleEntry3Change} handleEntry4Change={handleEntry4Change} handleEntry5Change={handleEntry5Change} handleEntry6Change={handleEntry6Change} handleEntry7Change={handleEntry7Change} handleEntry8Change={handleEntry8Change} handleEntryNotesChange = {handleEntryNotesChange} handleProjectSubmit = {handleProjectSubmit}/>
        <IdeasInformation ideasInformation={ideasInformation} />
        </>
    )
}

export default IdeasContainer;