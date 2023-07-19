import ProjectInformation from "../components/ProjectInformation";


const ProjectInformationContainer = ({allProjectInformation}) => {

//     const ifCategory = allProjectInformation?.map((entry) => {

//       if (entry.category == "NewProject" || entry.category == "ProjectInformation"){
//         return(
//           <>
//           <li key={entry.id}> {entry.entry1} </li>
//           </>
//       );
// }});

    return (
        <>
            <article className="container-item">
                <h1 className="container-header">Here is your project information</h1>
                <ProjectInformation allProjectInformation={allProjectInformation}/>
            </article>
        </>
    )


}

export default ProjectInformationContainer;