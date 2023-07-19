import { Link } from "react-router-dom";

const ScheduleInformation = ({scheduleInformation, allTDDInformation}) => {



    return (
        <>
        <h2>Schedule information</h2>
        <ul className="grid-for-information">
        {scheduleInformation}
       </ul>       

        </>
    )


}

export default ScheduleInformation;