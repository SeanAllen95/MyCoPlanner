import React, {Component, useState, useEffect} from 'react';
import MVPContainer from './MVPContainer';


const PlanContainer = () => {

    const [allPlans, setAllPlans] = useState(null)
    


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
        <>
        <h1>hello</h1>
        <MVPContainer />
        </>
    )

    
    }

export default PlanContainer;