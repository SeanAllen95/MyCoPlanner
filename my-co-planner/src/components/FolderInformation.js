import { Link } from "react-router-dom";

const FolderInformation = ({folderInformation}) => {



    return (
        <>
        <h2>Folders information</h2>
        <ul className="grid-for-information">
        {folderInformation}
       </ul>
       </>
    )


}

export default FolderInformation;