import React from 'react'
import { FaChartLine, FaDatabase } from "react-icons/fa";

const homeConfig = {
    greeting:
        <h1 className="greeting-heading" style={{ textAlign: 'center', width: '100%', fontSize: '4rem' }}>
            Hi! I'm <strong className="main-name"> Aishwarya Chandrashekara</strong>
        </h1>,
    titles: [
        "A Product Strategist",
        "A Customer-Centric Thinker",
        "An Impact-Oriented Builder",
        "A Product Growth Enthusiast",
        "A Data-Driven Decision Maker",
    ],
    about: {
        start: "I translate complex data and user insights into strategic product decisions that drive business growth. " +
            "With expertise in product analytics, experimentation, and market research, " +
            "I bridge the gap between data, technology, and customer needs. " +
            "I'm passionate about building intuitive, high-impact products that solve real-world problems.",
        exit: "My toolkit includes SQL, Python, A/B testing frameworks, and product analytics tools like Mixpanel, Amplitude, and Tableau. " +
            "I specialize in user behavior analysis, roadmap prioritization, and delivering data-informed product strategies."
    },
    workTimeline: [
        {
            id: "work-1",
            title: "Product Analyst",
            company: "LTIMindtree",
            description: "At LTIMindtree, I led the development and launch of healthcare MVPs like an insurance claims portal and a physician scheduling tool, reducing claim rejections by 28% and achieving a 97% UAT success rate. " +
                "I performed SQL analysis on 2.7M+ EHR records to streamline discharge workflows and automated HIPAA reporting using Python, cutting manual effort by 80%. " +
                "I also built Power BI dashboards and improved telehealth onboarding UX, boosting engagement and registration rates by 18% and 16%, respectively.",
            date: "2020-2023",
            icon: <FaChartLine/>,
            tags: ["Cross-functional Collaboration", "A/B Testing", "Power BI", "Stakeholder Management", "Agile", "Telehealth", "Process Automation", "Data-Driven Decision Making"]
        },
        {
            id: "work-2",
            title: "Product Manager",
            company: "HCL Tech",
            description: "Led product initiatives to enhance retail operations, including real-time inventory dashboards, unified cart experiences, and return flow redesigns. " +
                "Worked with cross-functional teams to improve POS systems and in-store workflows, reducing wait times by 28% and inventory mismatches by 35%. " +
                "Analyzed user behavior using Mixpanel and Amplitude to optimize promotions and layouts.",
            date: "2024-2025",
            icon: <FaDatabase/>,
            tags: ["Cross-Functional Collaboration", "Customer Experience", "A/B Testing", "Agile", "Dashboard Development", "Inventory Optimization"]
        }
    ]
}

export default homeConfig