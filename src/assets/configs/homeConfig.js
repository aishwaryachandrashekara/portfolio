import React from 'react'
import {BsClipboardData} from "react-icons/bs";
import {DiCodeigniter} from "react-icons/di";
import {GiCommercialAirplane} from "react-icons/gi";
import {FaMobileAlt} from "react-icons/fa";
import { BiRocket } from "react-icons/bi";

const homeConfig = {

    greeting:
        <h1 className="heading">
            Hi! I'm <strong className="main-name"> Aishwarya Chandrashekara</strong>
        </h1>,
    titles: [
        "A Data Scientist",
        "A Machine Learning Scientist",
        "An Open Source Contributor",
        "A Blog Writer",
        "Early Grad looking for roles",
    ],
    about: {
        start: "I've been developing/deploying my skills in information systems with a focus on transforming data into actionable insights. " +
            "I'm passionate about solving tech puzzles, enhancing efficiency, and driving innovation through technology. "+
            "I'm excited by learning new things, contributing to the data science community," +
            " and spreading the word of data!",
        exit: "I'm proficient in Python, SQL, and various data analysis tools,  " +
            "with a deep interest in machine learning, bridging code, data, and business needs."
    },
    workTimeline: [
        {
            id: "work-1",
            title: "Data Intern",
            company: "Bosch",
            description: "Assisted senior engineers in product testing, analysis and quality control procedures,  " +
                "ensuring adherence to Bosch's standards while implementing lean manufacturing principles.",
            date: "2018-2019",
            icon: <GiCommercialAirplane/>,
            tags: ["mssql", "python", "5S techniques"]
        },
        {
            id: "work-0",
            title: "Software Analyst",
            company: "Alpha Technologies",
            description: "Collaborated with training teams to evaluate program effectiveness through feedback analysis and assessment results, identifying areas for enhancement.",
            date: "2016-2018",
            icon: <BsClipboardData/>,
            tags: ["python", "Excel", "data analysis", "feedback systems", "program evaluation"]
        }
    ]
}


export default homeConfig