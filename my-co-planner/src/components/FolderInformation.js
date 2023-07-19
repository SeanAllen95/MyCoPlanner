import { Link } from "react-router-dom";

const FolderInformation = ({folderInformation}) => {



    return (
        <>
        <h1>Folders information</h1>
        <ul className="grid-for-information">
        {folderInformation}
       </ul>
       </>
    )


}

export default FolderInformation;