import { Link } from "react-router-dom";
const AboutPage = () => {

    return (
        <>
        <h1 id="mycollection-opener">About page</h1>
        <h3 className="article-header">What is MyCoPlanner</h3>
        <article className="info-article">MyCoPlanner is a Software development planning app used to help software developers to generate a 
        plan for a software project. By asking questions and using prompts and giving examples, MyCoPlanner 
        helps developers to get all their ideas out and structure them effectively.</article>

        <h3 className="article-header">How to use MyCoPlanner</h3>
        <article className="info-article">Begin by clicking on “New Project” and filling out the details of the form. Once this is complete Click on
         MyCollection to see what other areas of software development can be considered in the planning phase.</article>
        <p> </p>
        <article className="info-article">Hidden somewhere in the website there is a special mushroom that will help answer all of your planning questions. Keep an eye out for it as you are making your plan. Happy foraging and happy planning!</article>

        <button id="new-project-button"><Link id="new-project-link" to="/NewProject">New Project</Link></button>
        </>
    )
}

export default AboutPage;