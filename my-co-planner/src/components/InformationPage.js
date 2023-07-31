import { useState } from "react";
const InformationPage = () => {


    return (
        <>
        <div className="information-container">
        <h3 className="article-header">Project Information</h3>
        <article className="info-article">Here is where your project name, description and aims are kept. These can be updated if needed.</article>
        <h3 className="article-header">TDD Information</h3>
        <article className="info-article">Here is where you can describe what tests will be performed on your application if you decide to use Test Driven Development.</article>
        <h3 className="article-header">Potential Challenges</h3>
        <article className="info-article">This section is provided to help plan for any challenges that could arise during the project and develop a solution to help deal with the challenge.</article>
        <h3 className="article-header">Tech Stach</h3>
        <article className="info-article">This is where you can list all the tech you will use throughout the project and assess your confidence in using them.</article>
        <h3 className="article-header">Schedule</h3>
        <article className="info-article">Here you can set a deadline to tasks that must be completed by a specific time.</article>
        <h3 className="article-header">Folder and File Structure</h3>
        <article className="info-article">This is where you can think about how the final folders and files will be arranged in the final project and how they will be related.</article>
        <h3 className="article-header">Extensions</h3>
        <article className="info-article">This is where you can write down potential extensions for your app that can be worked on if you reach your Minimum Viable Product (MVP). </article>
        <h3 className="article-header">Ideas</h3>
        <article className="info-article">This is where you can write down potential ideas that you may want to include in your app in the future.</article>
        </div>
        </>
        
    )
}

export default InformationPage;