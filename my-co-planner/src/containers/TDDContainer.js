import TDDForm from "../components/TDDForm";
import TDDInformation from "../components/TDDInformation";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";


const TDDContainer = ({setCurrentPage, handleCurrentPageChange, handleCategoryChange, handleEntry1Change, handleEntry2Change, handleEntry3Change, handleEntry4Change, handleEntry5Change, handleEntry6Change, handleEntry7Change, handleEntry8Change, handleEntryNotesChange, allProjectInformation,  handleProjectSubmit}) => {

    const tddInformation = allProjectInformation?.map((entry) => {

        if (entry.category == "TDDInformation?submit=Save" || entry.category == "TDDInformation"){
        return (
          <li key={entry.id}>{entry.entry1} {entry.entry2} <Link to={`/MyCollection/TDDInformation/edit/${entry.id}`}>Edit Test details</Link></li>
        );
        }});

    const theCurrentPage = useLocation()
    const currentPage = theCurrentPage.pathname.slice(14)
    console.log(currentPage)

    useEffect(() => {
        setCurrentPage(currentPage);
        }, []);

    return(
        <>
        <h1>This is the TDD container</h1>
        <TDDForm handleEntry1Change={handleEntry1Change} handleEntry2Change={handleEntry2Change} handleEntry3Change={handleEntry3Change} handleEntry4Change={handleEntry4Change} handleEntry5Change={handleEntry5Change} handleEntry6Change={handleEntry6Change} handleEntry7Change={handleEntry7Change} handleEntry8Change={handleEntry8Change} handleEntryNotesChange = {handleEntryNotesChange} handleProjectSubmit = {handleProjectSubmit}/>
        <TDDInformation tddInformation={tddInformation} />
        </>
    )
}

export default TDDContainer;