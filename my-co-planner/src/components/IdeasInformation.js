import { Link } from "react-router-dom";

const IdeasInformation = ({ideasInformation, allTDDInformation}) => {



    return (
        <>
        <h2>Ideas Information</h2>
        <ul className="grid-for-information">
        {ideasInformation}
       </ul>

        </>
    )


}

export default IdeasInformation;