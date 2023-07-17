import ProjectInformation from "../components/ProjectInformation";


const ProjectInformationContainer = ({allProjectInformation}) => {

    const projectInformation = allProjectInformation?.map((entry) => {
        return (
          <li key={entry.id}>{entry.projectName} {entry.projectDescription} {entry.projectAim1} {entry.projectAim2} {entry.projectAim3} {entry.projectNotes}</li>
        );
      });

    const ifProjectForm = allProjectInformation?.map((form) => {

      if (form.projectForm == "projectForm"){
      return(
        <li key={form.id}>{form.projectForm} {form.projectName}  {form.projectDescription} {form.projectAim1} {form.projectAim2} {form.projectAim3} {form.projectNotes}</li>

      );
}});

    return (
        <>
            <h1>Here is your project information</h1>
            <ProjectInformation projectInformation={projectInformation} allProjectInformation={allProjectInformation} ifProjectForm={ifProjectForm}/>
        </>
    )


}

export default ProjectInformationContainer;