import ProjectInformation from "../components/ProjectInformation";


const ProjectInformationContainer = ({allEntries}) => {

    const allProjectInformation = allEntries?.map((entry) => {
        return (
          <li key={entry.id}>{entry.projectName} {entry.projectDescription} {entry.projectAim1} {entry.projectAim2} {entry.projectAim3} {entry.projectNotes}</li>
        );
      });

    return (
        <>
            <h1>Here is your project information</h1>
            <ProjectInformation allProjectInformation={allProjectInformation}/>
        </>
    )


}

export default ProjectInformationContainer;