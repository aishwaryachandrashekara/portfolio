import React from 'react'
import {BsClipboardData} from "react-icons/bs";
import {DiCodeigniter} from "react-icons/di";
import {GiCommercialAirplane} from "react-icons/gi";
import {FaMobileAlt} from "react-icons/fa";
import { BiRocket } from "react-icons/bi";
import { FaChartLine, FaDatabase } from "react-icons/fa";

const homeConfig = {
    greeting:
        <h1 className="heading">
            Hi! I'm <strong className="main-name"> Aishwarya Chandrashekara</strong>
        </h1>,
    titles: [
        "A Data Scientist",
        "A Machine Learning Engineer",
        "A Data Analyst",
        "An AI Enthusiast",
        "A Data Storyteller",
    ],
    about: {
        start: "I transform complex data into actionable insights through advanced analytics and machine learning. " +
            "With expertise in statistical modeling, data visualization, and predictive analytics, " +
            "I help organizations make data-driven decisions. " +
            "I'm passionate about leveraging AI and machine learning to solve real-world problems " +
            "and create innovative solutions.",
        exit: "My technical stack includes Python, SQL, machine learning frameworks, and data visualization tools. " +
            "I specialize in predictive modeling, statistical analysis, and building scalable data pipelines."
    },
    workTimeline: [
        {
            id: "work-1",
            title: "Data Scientist",
            company: "Bosch",
            description: "Developed and deployed machine learning models for predictive maintenance, " +
                "reducing downtime by 25%. Implemented data pipelines for real-time analytics and " +
                "created interactive dashboards for stakeholders.",
            date: "2018-2019",
            icon: <FaChartLine/>,
            tags: ["python", "machine learning", "data visualization", "predictive modeling", "SQL"]
        },
        {
            id: "work-0",
            title: "Data Analyst",
            company: "Alpha Technologies",
            description: "Led data analysis initiatives to optimize business processes, " +
                "implemented automated reporting systems, and developed statistical models " +
                "for performance prediction.",
            date: "2016-2018",
            icon: <FaDatabase/>,
            tags: ["python", "statistical analysis", "data visualization", "business intelligence", "SQL"]
        }
    ]
}

export default homeConfig