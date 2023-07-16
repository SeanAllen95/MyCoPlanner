import { Link } from "react-router-dom";

const ProjectInformation = ({projectInformation, allProjectInformation}) => {

    const projectId = allProjectInformation?.map((entry) => {
        return (entry.id);
      });



    return (
        <>
        <p>Project information</p>
        <p>{projectInformation}</p>
        <p><Link to={`/MyCollection/ProjectInformation/edit/${projectId}`}>Edit Project details</Link></p>

        </>
    )


}

export default ProjectInformation;