import React from 'react'
import {AiFillGithub} from "react-icons/ai";
import {SiMedium} from "react-icons/si";
import fastapiSklearn from "../images/fastapi_sklearn.png"

const blogConfig = [
    {
        id: "blog-1",
        title: "The Power of Mindset",
        links: [
            {
                name: "article",
                url: "https://medium.com/@aishwaryachandrashekara/the-power-of-mindset-11eb657b25d9",
                icon: <SiMedium/>
            },
            // {
            //     name: "repo",
            //     url: "Your URL here",
            //     icon: <AiFillGithub/>
            // }
        ],
        image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*_IHW43GeZ3rc1sY277XJcQ@2x.jpeg",
        description: "My Journey to Inner Growth",
        target: "_blank"
    },
    {
        id: "blog-0",
        title: "Life’s Gentle Obsession: A Reflection on Mindfulness",
        links: [
            {
                name: "article",
                url: "https://medium.com/@aishwaryachandrashekara/lifes-gentle-obsession-a-reflection-on-mindfulness-ac37fbeca0c0",
                icon: <SiMedium/>
            }
        ],
        image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*Lp8B9ruRdIcxfzLgLao87A@2x.jpeg",
        description: "Zoning into new perspectives",
        target: "_blank"
    }
]

export default blogConfig