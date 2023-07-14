import React, { useState, useEffect } from 'react';

function EditForm({ entry, entryId, handleUpdateSubmit, category, handleCategoryChange, handleEntryChange, handleCompleteChange, complete, handleNotesChange, notes}) {

//   const [category, setCategory] = useState('');
//   const [entry, setEntry] = useState('');
//   const [complete, setComplete] = useState('');
//   const [notes, setNotes] = useState('');

//   useEffect(() => {
//     // Fetch existing data from MongoDB based on entryId
//     fetch(`http://localhost:8080/entries/${entryId}`)
//       .then(response => response.json())
//       .then(data => {
//         setCategory(data.category);
//         setEntry(data.entry);
//         setComplete(data.complete);
//         setNotes(data.notes);
//       })
//       .catch(error => {
//         console.log('Error fetching data:', error);
//       });
//   }, [entryId]);

//   const handleCategoryChange = e => {
//     setCategory(e.target.value);
//   };

//   const handleEntryChange = e => {
//     setEntry(e.target.value);
//   };

//   const handleCompleteChange = e => {
//     setComplete(e.target.value);
//   };

//   const handleNotesChange = e => {
//     setNotes(e.target.value);
//   };

//   const handleUpdateSubmit = e => {
//     e.preventDefault();

//     // Prepare the updated data
//     const updatedData = {
//       category,
//       entry,
//       complete,
//       notes
//     };

//     // Send the updated data to the server
//     fetch('http://localhost:8080/entries', {
//       method: 'PUT', // or 'PATCH' depending on your API
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(updatedData)
//     })
//       .then(response => response.json())
//       .then(data => {
//         // Handle success or update UI
//         console.log('Updated data:', data);
//       })
//       .catch(error => {
//         // Handle error or update UI
//         console.log('Error updating data:', error);
//       });
//   };

  return (
    <>
      <form onSubmit={handleUpdateSubmit}>
        <input type="hidden" name="entryId" value={entryId} />
        <label htmlFor="category">Category</label>
        <input
          type="text"
          id="category"
          value={category}
          onChange={handleCategoryChange}
        /><br/>

        <label htmlFor="entry">Answer</label>
        <input
          type="text"
          id="entry"
          value={entry}
          onChange={handleEntryChange}
        /><br/>

        <label htmlFor="complete">Complete?</label>
        <input
          type="text"
          id="complete"
          value={complete}
          onChange={handleCompleteChange}
        /><br/>

        <label htmlFor="notes">Notes</label>
        <input
          type="text"
          id="notes"
          value={notes}
          onChange={handleNotesChange}
        /><br/>

        <input type="submit" name="submit" value="Update" />
      </form>
    </>
  );
}

export default EditForm;
