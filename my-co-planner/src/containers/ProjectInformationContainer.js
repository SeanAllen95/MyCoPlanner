import ProjectInformation from "../components/ProjectInformation";


const ProjectInformationContainer = ({allProjectInformation}) => {

    const ifCategory = allProjectInformation?.map((form) => {

      if (form.category == "NewProject" || form.category == "NewProject?submit=Save"){
        return(
          <>
          <li key={form.id}> {form.entry1}</li>
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