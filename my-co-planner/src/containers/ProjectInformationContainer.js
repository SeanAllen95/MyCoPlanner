import ProjectInformation from "../components/ProjectInformation";


const ProjectInformationContainer = ({allProjectInformation}) => {

    const ifCategory = allProjectInformation?.map((entry) => {

      if (entry.category == "NewProject" || entry.category == "NewProject?submit=Save"){
        return(
          <>
          <li key={entry.id}> {entry.entry1} </li>
          </>
      );
}});

    return (
        <>
            <h1>Here is your project information</h1>
            <ProjectInformation allProjectInformation={allProjectInformation} ifCategory={ifCategory}/>
        </>
    )


}

export default ProjectInformationContainer;