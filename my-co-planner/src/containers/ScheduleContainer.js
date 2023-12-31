import ScheduleForm from "../components/ScheduleForm";
import ScheduleInformation from "../components/ScheduleInformation";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";


const ScheduleContainer = ({setEntryId, setCurrentPage, handleCategoryChange, handleEntry1Change, handleEntry2Change, handleEntry3Change, handleEntry4Change, handleEntry5Change, handleEntry6Change, handleEntry7Change, handleEntry8Change, handleEntryNotesChange, allProjectInformation,  handleProjectSubmit}) => {

    const scheduleInformation = allProjectInformation?.map((entry) => {

        if (entry.category === "ScheduleInformation?submit=Save" || entry.category === "ScheduleInformation"){
        return (
          <li key={entry.id}>Task - {entry.entry1} <br/> Deadline - {entry.entry2} <br/> Extra Notes - {entry.entryNotes} <br/> <Link to={`/MyCollection/ScheduleInformation/edit/${entry.id}`}>Edit Deadlines</Link></li>
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
        <h1>Schedule Page</h1>
        <ScheduleForm currentPage={currentPage} handleCategoryChange = {handleCategoryChange} handleEntry1Change={handleEntry1Change} handleEntry2Change={handleEntry2Change} handleEntry3Change={handleEntry3Change} handleEntry4Change={handleEntry4Change} handleEntry5Change={handleEntry5Change} handleEntry6Change={handleEntry6Change} handleEntry7Change={handleEntry7Change} handleEntry8Change={handleEntry8Change} handleEntryNotesChange = {handleEntryNotesChange} handleProjectSubmit = {handleProjectSubmit}/>
        <ScheduleInformation scheduleInformation={scheduleInformation} />
        </div>
        </>
    )
}

export default ScheduleContainer;