import { Link } from "react-router-dom";

const ProjectInformation = ({allProjectInformation}) => {

    const projectInformation = allProjectInformation?.map((entry) => {

        if (entry.category == "NewProject?submit=Save" || entry.category == "NewProject" || entry.category == "ProjectInformation"){
            
            return <li id="project-information-list-item" key={entry.id}> 
            
            What is the name of the Project? - {entry.entry1} <br/>
            Give a Description of the project - {entry.entry2} <br/>
            What is the reason for doing the project? - {entry.entry3} <br/>
            List the main aims of the project below<br/>
            Aim - {entry.entry4} <br/>
            Aim - {entry.entry5} <br/> 
            Aim - {entry.entry6} <br/>
            Aim - {entry.entry7} <br/> 
            Aim - {entry.entry8} <br/> 
            Extra Notes about the project - {entry.entryNotes} <br/>
            <Link  to={`/MyCollection/ProjectInformation/edit/${entry.id}`}>Update Project details</Link></li>
       
}});

    return (
        <>
        <h2 className="container-subheader">Project information</h2>
        <p>{projectInformation}</p>
        <p></p>

        </>
    )


}

export default ProjectInformation;