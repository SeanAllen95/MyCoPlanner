import { Link } from "react-router-dom";

const IdeasInformation = ({ideasInformation, allTDDInformation}) => {



    return (
        <>
        <h1>Ideas Information</h1>
        <ul className="grid-for-information">
        {ideasInformation}
       </ul>

        </>
    )


}

export default IdeasInformation;