import { Link } from "react-router-dom";

const ExtensionInformation = ({extensionInformation, allTDDInformation}) => {



    return (
        <>
        <h2>Extension information</h2>
        <ul className="grid-for-information">
        {extensionInformation}
       </ul>       

        </>
    )


}

export default ExtensionInformation;