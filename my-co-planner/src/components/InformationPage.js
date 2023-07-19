import { useState } from "react";
const InformationPage = () => {

    const [showTDDHTML, setShowTDDHTML] = useState(false);
    const [showTechHTML, setShowTechHTML] = useState(false);

    const handleTDDClick = () => {
        setShowTDDHTML(!showTDDHTML);
      };

    const handleTechClick = () => {
    setShowTechHTML(!showTechHTML);
    };

    return (
        <>
        <h1>Information page</h1>
        <h2>Test Driven Development <button onClick={handleTDDClick}>&#127812;</button></h2>
        {showTDDHTML && 
        <section>Test-driven development (TDD) is a software development approach that emphasizes writing tests 
        before writing the actual implementation code. The TDD process typically follows these steps: red, green, 
        and refactor.
        <li>Red: Write a test that describes the desired behavior of a specific feature or functionality. Initially, 
        this test is expected to fail, represented by the "red" status. This test should be written in a testing framework
         like Jest for JavaScript or JUnit for Java.</li>
         <li>Green: Write the minimum amount of code necessary to make the failing test pass. The goal is to write the
          simplest code that satisfies the test case, ensuring that the test changes to a "green" status, indicating
         a successful pass.</li>
         <li>Refactor: Once the test passes, you can refactor the code to improve its design, readability, and 
         efficiency without changing its behavior. This step ensures that the code remains clean and maintainable.</li>
         <li>Repeat: Repeat the process by writing the next test, starting from the "red" status, and continue building 
         up the functionality incrementally.</li>
        </section>}

        <h2>Tech Stack <button onClick={handleTechClick}>&#127812;</button></h2>
        {showTechHTML && 
        <div>
            <section>Tech stack refers to the combination of programming languages, frameworks, libraries, tools, 
            and other technologies used to build a software application or system. It encompasses the different layers 
            and components that work together to create the application's functionality.
            A typical tech stack consists of the following layers:

                <p>Front-end: This layer focuses on the user interface and client-side logic. It includes technologies 
                like HTML, CSS, and JavaScript, as well as frameworks or libraries such as React, Angular, or Vue.js 
                that facilitate building interactive web interfaces.</p>

                <li>Back-end: The back-end layer handles server-side logic, data storage, and processing. It involves programming languages like Java, Python, Ruby, or Node.js. Frameworks such as Express.js, Django, Flask, or Ruby on Rails provide tools for building server applications and APIs.</li>

                <li>Database: The database layer manages the storage and retrieval of data. Popular options include relational databases like MySQL, PostgreSQL, or Oracle, and NoSQL databases like MongoDB or Cassandra.</li>

                <li>Infrastructure: This layer deals with the underlying infrastructure and deployment of the application. It may include technologies such as cloud platforms like AWS, Azure, or Google Cloud, as well as containerization tools like Docker and orchestration tools like Kubernetes.</li>

                <li>Additional Tools and Services: Various tools and services complement the tech stack to handle tasks like version control (e.g., Git), continuous integration and deployment (e.g., Jenkins, Travis CI), testing frameworks (e.g., Jest, Selenium), and monitoring (e.g., Prometheus, Grafana).</li>
            </section>
        </div>}

        </>
        
    )
}

export default InformationPage;