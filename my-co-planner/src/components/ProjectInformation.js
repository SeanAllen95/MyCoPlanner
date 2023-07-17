import { Link } from "react-router-dom";

const ProjectInformation = ({ifCategory, allProjectInformation}) => {

    const projectId = allProjectInformation?.map((entry) => {
        if (entry.category == "NewProject?submit=Save" || entry.category == "NewProject")
        return (entry.id);
       
      });



    return (
        <>
        <p>Project information</p>
        {/* <p>{projectInformation}</p> */}
        <p>{ifCategory}</p>
        <p><Link to={`/MyCollection/ProjectInformation/edit/${projectId}`}>Update Project details</Link></p>

        </>
    )


}

export default ProjectInformation;