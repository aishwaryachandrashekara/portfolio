import {
    SiPython,
    SiPostgresql,
    SiMicrosoftsqlserver,
    SiPowerbi,
    SiTableau,
    SiJira,
    SiConfluence,
    SiFigma,
    SiTrello,
    SiGoogleanalytics,
    SiMysql
} from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import React from "react";

const skillsConfig = {
    mainSkills: [
        {
            id: "skills-0",
            className: "skill-icon",
            icon: <SiPython size={50}/>,
            text: "Python"
        },
        {
            id: "skills-1",
            className: "skill-icon",
            icon: <SiPostgresql size={50}/>,
            text: "PostgreSQL"
        },
        {
            id: "skills-2",
            className: "skill-icon",
            icon: <SiMicrosoftsqlserver size={50}/>,
            text: "MS SQL"
        },
        {
            id: "skills-3",
            className: "skill-icon",
            icon: <SiPowerbi size={50}/>,
            text: "Power BI"
        },
        {
            id: "skills-4",
            className: "skill-icon",
            icon: <SiTableau size={50}/>,
            text: "Tableau"
        },
        {
            id: "skills-5",
            className: "skill-icon",
            icon: <FaGitAlt size={50}/>,
            text: "Git"
        }
    ],
    complementarySkills: [
        {
            id: "skills-6",
            className: "skill-icon",
            icon: <SiMysql size={50}/>,
            text: "MySQL"
        },
        {
            id: "skills-7",
            className: "skill-icon",
            icon: <SiJira size={50}/>,
            text: "JIRA"
        },
        {
            id: "skills-8",
            className: "skill-icon",
            icon: <SiConfluence size={50}/>,
            text: "Confluence"
        },
        {
            id: "skills-9",
            className: "skill-icon",
            icon: <SiFigma size={50}/>,
            text: "Figma"
        },
        {
            id: "skills-10",
            className: "skill-icon",
            icon: <SiTrello size={50}/>,
            text: "Trello"
        },
        {
            id: "skills-11",
            className: "skill-icon",
            icon: <SiGoogleanalytics size={50}/>,
            text: "Google Analytics"
        }
    ]
};

export default skillsConfig;
