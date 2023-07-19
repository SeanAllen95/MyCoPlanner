import { Link } from "react-router-dom";

const TDDInformation = ({tddInformation, allTDDInformation}) => {



    return (
        <>
        <h1>Test Information</h1>
        <ul className="grid-for-information">
        {tddInformation}
       </ul>

        </>
    )


}

export default TDDInformation;