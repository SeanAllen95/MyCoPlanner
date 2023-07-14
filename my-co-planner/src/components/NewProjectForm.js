
const NewProjectForm = ({category, handleEntryChange, handleCompleteChange, entry, complete, handleSubmit, handleNotesChange, notes}) => {


    return(
        <>
        <h1>Start a new project</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="category">Category</label>
            <input type='text' id="category" value={category} /><br/>

            <label htmlFor="entry">What is the main aim of the project?</label>
            <input type='text' id="entry" value={entry} onChange={handleEntryChange}/><br/>

            <label htmlFor="complete">What is the name of the project?</label>
            <input type='text' id="complete" value={complete} onChange={handleCompleteChange}/><br/>

            <label htmlFor="notes">Notes</label>
            <input type='text' id="notes" value={notes} onChange={handleNotesChange}/><br/>


            <input type="submit" name="submit" value="Save" />
        </form>
    
        </>
        )

}

export default NewProjectForm;