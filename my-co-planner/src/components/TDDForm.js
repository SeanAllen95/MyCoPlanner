import React, {Component, useState, useEffect} from 'react';


const TDDForm = ({testName, handleTestNameChange, testCode, handleTestCodeChange, testStatus, handleTestStatusChange, handleTDDSubmit}) => {
      

    return (
        <>
        <h1>Add tests!</h1>
        <form onSubmit={handleTDDSubmit}>
            <label htmlFor="testName">Name of the test</label>
            <input type='text' id="testName" value={testName} onChange={handleTestNameChange}/><br/>

            <label htmlFor="testCode">Code for the test</label>
            <input type='text' id="testCode" value={testCode} onChange={handleTestCodeChange}/><br/>

            <label htmlFor="testStatus">Status of the test</label>
            <input type='text' id="testStatus" value={testStatus} onChange={handleTestStatusChange}/><br/>

            <input type="submit" name="submit" value="Save Test" />
        </form>
        </>
        )

}

export default TDDForm;