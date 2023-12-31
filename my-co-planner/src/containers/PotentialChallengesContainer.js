import PotentialChallengesForm from "../components/PotentialChallengesForm";
import PotentialChallengesInformation from "../components/PotentialChallengesInformation";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";


const PotentialChallengesContainer = ({setCurrentPage, handleCategoryChange, handleEntry1Change, handleEntry2Change, handleEntry3Change, handleEntry4Change, handleEntry5Change, handleEntry6Change, handleEntry7Change, handleEntry8Change, handleEntryNotesChange, allProjectInformation,  handleProjectSubmit}) => {

    const potentialChallengesInformation = allProjectInformation?.map((entry) => {

        if (entry.category === "PotentialChallenges?submit=Save" || entry.category === "PotentialChallenges"){
        return (
          <li key={entry.id}>{entry.entry1} {entry.entry2} {entry.entry3} {entry.entryNotes} <Link to={`/MyCollection/PotentialChallenges/edit/${entry.id}`}>Edit Challenges</Link></li>
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
        <h1>Potential Challenges Page</h1>
        <PotentialChallengesForm currentPage={currentPage} handleCategoryChange = {handleCategoryChange} handleEntry1Change={handleEntry1Change} handleEntry2Change={handleEntry2Change} handleEntry3Change={handleEntry3Change} handleEntry4Change={handleEntry4Change} handleEntry5Change={handleEntry5Change} handleEntry6Change={handleEntry6Change} handleEntry7Change={handleEntry7Change} handleEntry8Change={handleEntry8Change} handleEntryNotesChange = {handleEntryNotesChange} handleProjectSubmit = {handleProjectSubmit}/>
        <PotentialChallengesInformation potentialChallengesInformation={potentialChallengesInformation} />
        </div>
        </>
    )
}

export default PotentialChallengesContainer;