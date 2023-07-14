
const NewProjectForm = ({category, handleCategoryChange, handleEntryChange, handleCompleteChange, entry, complete, handleSubmit, handleNotesChange, notes}) => {


    return(
        <>
        <form onSubmit={handleSubmit}>

            <label htmlFor="category">Category</label>
            <input type='text' id="category" value={category} onChange={handleCategoryChange} /><br/>

            <label htmlFor="entry">Answer</label>
            <input type='text' id="entry" value={entry} onChange={handleEntryChange}/><br/>

            <label htmlFor="complete">Complete?</label>
            <input type='text' id="complete" value={complete} onChange={handleCompleteChange}/><br/>

            <label htmlFor="notes">Notes</label>
            <input type='text' id="notes" value={notes} onChange={handleNotesChange}/><br/>


            <input type="submit" name="submit" value="Save" />
        </form>
    
        </>
        )

}

export default NewProjectForm;