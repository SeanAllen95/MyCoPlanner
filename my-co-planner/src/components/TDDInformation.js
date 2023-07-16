import { Link } from "react-router-dom";

const TDDInformation = ({tddInformation, allTDDInformation}) => {

    const tddId = allTDDInformation?.map((entry) => {
        return (entry.id);
      });



    return (
        <>
        <p>Test information</p>
        <p>{tddInformation}</p>

        </>
    )


}

export default TDDInformation;