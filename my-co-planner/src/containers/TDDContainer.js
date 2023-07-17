import TDDForm from "../components/TDDForm";
import TDDInformation from "../components/TDDInformation";
import { Link } from "react-router-dom";


const TDDContainer = ({deleteTDDEntry, allTDDInformation, handleTestNameChange, handleTestCodeChange, handleTestStatusChange, handleTDDSubmit}) => {

    const tddInformation = allTDDInformation?.map((entry) => {
        return (
          <li key={entry.id}>{entry.testName} {entry.testCode} {entry.testStatus} <Link to={`/MyCollection/TDDInformation/edit/${entry.id}`}>Edit Test details</Link><button onClick={deleteTDDEntry}>Delete test</button></li>
        );
      });

    return(
        <>
        

        <h1>This is the TDD container</h1>
        <TDDForm handleTestNameChange={handleTestNameChange} handleTestCodeChange={handleTestCodeChange} handleTestStatusChange={handleTestStatusChange} handleTDDSubmit={handleTDDSubmit}/>
        <article className="TDDContainer">
        <TDDInformation allProjectInformation={allTDDInformation} tddInformation={tddInformation} />
        </article>
        </>

    )


}

export default TDDContainer;