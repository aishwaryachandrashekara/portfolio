import {BiGitRepoForked} from "react-icons/bi";
import {AiFillGithub, AiFillEye} from "react-icons/ai";
import {ImBook} from "react-icons/im";

import sklearnGenetic from "../images/sklearn_genetic_opt.png"
import kafkaMl from "../images/kafkaml.png"
import portfolio from "../images/portfolio.png"

import React from 'react'

const projectConfig = [
    // {
    //     id: "project-1",
    //     title: "Insert title name",
    //     links: [
    //         {
    //             name: "repo",
    //             url: "Insert repo link here",
    //             icon: <AiFillGithub/>,
    //         },
    //         {
    //             name: "fork",
    //             url: "insert fork link here",
    //             icon: <BiGitRepoForked/>,
    //         },
    //         {
    //             name: "subscription",
    //             url: "insert subscription link here",
    //             icon: <AiFillEye/>,
    //         },
    //         {
    //             name: "docs",
    //             url: "Insert dock link here",
    //             icon: <ImBook/>,
    //         }
    //     ],
    //     image: sklearnGenetic,
    //     description: "Insert desctiption text here",
    //     target: "_blank"
    // },
    {
        id: "project-0",
        title: "Portfolio Web",
        links: [
            {
                name: "repo",
                url: "https://github.com/aishwaryachandrashekara/portfolio",
                icon: <AiFillGithub/>
            },
            {
                name: "fork",
                url: "https://github.com/aishwaryachandrashekara/portfolio/fork",
                icon: <BiGitRepoForked/>
            },
            {
                name: "subscription",
                url: "https://github.com/aishwaryachandrashekara/portfolio/subscription",
                icon: <AiFillEye/>
            }
        ],
        image: portfolio,
        description: "Source code of my current portfolio web page as data scientist.",
        target: "_blank"
    },
    {
        id: "project-1",
        title: "Electric Vehicle Data Analysis",
        links: [
            {
                name: "repo",
                url: "https://github.com/aishwaryachandrashekara/portfolio",
                icon: <AiFillGithub/>
            },
            {
                name: "fork",
                url: "https://github.com/aishwaryachandrashekara/portfolio/fork",
                icon: <BiGitRepoForked/>
            },
            {
                name: "subscription",
                url: "https://public.tableau.com/app/profile/aishwarya.chandrashekara/viz/Dataanalysisproject_17428342649160/Dashboard1?publish=yes",
                icon: <AiFillEye/>
            }
        ],
        image: 'https://public.tableau.com/static/images/Da/Dataanalysisproject_17428342649160/Dashboard1/1.png',
        description: "Features include sales analysis, market penetration, and regional distribution.",
        target: "_blank"
    }

]

export default projectConfig