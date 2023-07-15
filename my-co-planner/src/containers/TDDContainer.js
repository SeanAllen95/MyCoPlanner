import TDDForm from "../components/TDDForm";


const TDDContainer = ({handleTestNameChange, handleTestCodeChange, handleTestStatusChange, handleTDDSubmit}) => {

    return(
        <>

    <h1>This is the TDD container</h1>
    <TDDForm handleTestNameChange={handleTestNameChange} handleTestCodeChange={handleTestCodeChange} handleTestStatusChange={handleTestStatusChange} handleTDDSubmit={handleTDDSubmit}/>
    </>

    )


}

export default TDDContainer;