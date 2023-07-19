import { Link } from "react-router-dom";

const TechStackInformation = ({techStackInformation}) => {



    return (
        <>
        <h2>Tech Stack information</h2>
        <ul className="grid-for-information">
        {techStackInformation}
        </ul>        
       </>
    )


}

export default TechStackInformation;