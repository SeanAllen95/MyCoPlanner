

const NewProjectPage = () => {

    const handleSubmit = () => {
        const data = {entry: userEntry, completed: userEntry2}; // Replace with your form data
      
        fetch('http://localhost:8080/mvp', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })
          .then(response => {
            if (response.ok) {
              console.log('Data submitted successfully');
            } else {
              console.error('Failed to submit data:', response.status);
            }
          })
          .catch(error => {
            console.error('An error occurred:', error);
          });
      };
      

    return(
        <>
        <h1>all plans</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="userEntry">MVP Entry</label>
            <input type='text' id="userEntry" value={userEntry} onChange={handleEntryChange}/>
            <label htmlFor="userEntry2">MVP Entry 2</label>
            <input type='text' id="userEntry2" value={userEntry2} onChange={handleEntry2Change}/>
            <input type="submit" name="submit" value="Save" />
        </form>
    
        </>
        )

}