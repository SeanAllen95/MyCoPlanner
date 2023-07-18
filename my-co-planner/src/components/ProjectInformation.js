import { Link } from "react-router-dom";

const ProjectInformation = ({allProjectInformation}) => {

    const projectInformation = allProjectInformation?.map((entry) => {

        if (entry.category == "NewProject?submit=Save" || entry.category == "NewProject" || entry.category == "ProjectInformation"){
            
            return <li key={entry.id}> {entry.id} {entry.entry1}<Link  to={`/MyCollection/ProjectInformation/edit/${entry.id}`}>Update Project details</Link></li>
       
}});

    return (
        <>
        <p>Project information</p>
        <p>{projectInformation}</p>
        <p></p>

        </>
    )


}

export default ProjectInformation;