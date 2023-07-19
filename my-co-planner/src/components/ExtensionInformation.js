import { Link } from "react-router-dom";

const ExtensionInformation = ({extensionInformation, allTDDInformation}) => {



    return (
        <>
        <h1>Extension information</h1>
        <ul className="grid-for-information">
        {extensionInformation}
       </ul>       

        </>
    )


}

export default ExtensionInformation;