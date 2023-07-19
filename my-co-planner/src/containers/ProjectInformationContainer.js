import ProjectInformation from "../components/ProjectInformation";


const ProjectInformationContainer = ({allProjectInformation}) => {


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