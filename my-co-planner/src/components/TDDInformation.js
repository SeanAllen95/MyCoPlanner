import { Link } from "react-router-dom";

const TDDInformation = ({tddInformation, allTDDInformation}) => {



    return (
        <>
        <h2>Test Information</h2>
        <ul className="grid-for-information">
        {tddInformation}
       </ul>

        </>
    )


}

export default TDDInformation;