import React, {Component, useState, useEffect} from 'react';


const PlanContainer = () => {

    const [allPlans, setAllPlans] = useState(null)
    const [userEntry, setUserEntry] = useState("Entry Here");
    const [userEntry2, setUserEntry2] = useState("Entry 2 Here");

    const handleEntryChange = (ev) => setUserEntry(ev.target.value);
    const handleEntry2Change = (ev) => setUserEntry2(ev.target.value);


    useEffect(() => {
        getAllPlans();
      }, [])

    const getAllPlans = function(){
            fetch('http://localhost:8080/mvp')
            .then(response => response.json())
            .then(allPlans => setAllPlans(allPlans)
        )
    }
    return (
        <h1>hello</h1>
    )

    
    }

export default PlanContainer