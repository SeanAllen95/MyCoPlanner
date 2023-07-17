import ProjectInformation from "../components/ProjectInformation";


const ProjectInformationContainer = ({allProjectInformation}) => {

    const ifCategory = allProjectInformation?.map((form) => {

      if (form.category == "NewProject" || form.category == "ProjectInformation"){
        return(
          <li key={form.id}>{form.category} {form.entry1}  {form.entry2} {form.entryNotes}</li>

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