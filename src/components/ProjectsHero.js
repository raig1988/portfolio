import Project from "./Project";
import ProjectNoVisit from "./ProjectNoVisit";
import './css/Project.css';
import '../DesktopGrid.css';

function ProjectsHero() {
    return (
        <div className="projectsHero">
            <h1>Projects</h1>
            <ProjectNoVisit 
                title="Meta's Front End final project: Little Lemon" 
                stack="HTML, CSS, JS, React"
                projectGithub="https://github.com/raig1988/capstone_project_Front_End_Meta"
            />
            <Project
                title="CS50W final project: Financial Planner"
                stack="Front end: HTML, CSS, JS, Backend: Django, Python, Sqlite"
                projectLink="https://youtu.be/jY77Av5j37U"
                projectGithub="https://github.com/raig1988/Budget_final_project_cs50W"
            />
            <Project
                title="CS50W project: Network"
                stack="Front end: HTML, CSS, JS, Backend: Django, Python, Sqlite"
                projectLink="https://youtu.be/nUBiemFdoww"
                projectGithub="https://github.com/raig1988/network-cs50w_project"
            />
            <Project
                title="CS50W project: Mail"
                stack="Front end: HTML, CSS, JS, Backend: Django, Python, Sqlite"
                projectLink="https://youtu.be/AlfHWx49Gss"
                projectGithub="https://github.com/raig1988/mail-cs50w_project"
            />
            <Project
                title="CS50W project: commerce"
                stack="Front end: HTML, CSS, JS, Backend: Django, Python, Sqlite"
                projectLink="https://youtu.be/ORkjBQMG5aQ"
                projectGithub="https://github.com/raig1988/cs50w_commerce_project"
            />

            <Project
                title="CS50x final project: Budget web app"
                stack="Front end: HTML, CSS, JS, Backend: Flask, Python, Sqlite"
                projectLink="https://youtu.be/45339iAgM_k"
                projectGithub="https://github.com/raig1988/cs50x_Final_project"
            />
            <ProjectNoVisit
                title="Encode Club course projects"
                stack="Solidity, Hardhat"
                projectGithub="https://github.com/raig1988/EthDenver_encode_Club"
            />
            <ProjectNoVisit
                title="Patrick Collin's solidity course projects"
                stack="Solidity, Hardhat"
                projectGithub="https://github.com/raig1988/Solidity_FCC"
            />
            <ProjectNoVisit
                title="Harvard's CS50x course projects"
                stack="Solidity, Hardhat"
                projectGithub="https://github.com/raig1988/cs50x_course_projects"
            />
            <Project
                title="'Aprendo Finanzas 123' Wordpress site"
                stack="Wordpress"
                projectLink="https://aprendofinanzas123.com/"
                projectGithub="https://github.com/raig1988/"
            />
            <Project
                title="'Carlomagno Roa' Wordpress site"
                stack="Wordpress"
                projectLink="https://carlomagnoroa.com/"
                projectGithub="https://github.com/raig1988/"
            />
        </div>
    )
}

export default ProjectsHero;