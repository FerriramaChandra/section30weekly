import * as AiIcons from "react-icons/ai"
import * as FiIcons from "react-icons/fi"
import * as FcIcons from "react-icons/fc"
import * as FaIcons from "react-icons/fa"
import * as DiIcons from "react-icons/di"



export const SidebarData = [
    {
        title: "Git",
        path: "/",
        icon: <AiIcons.AiFillGithub/>,
        cName: 'nav-text'
    },
    {
        title: "Introduction UI/UX",
        path: "/Introduction",
        icon: <FcIcons.FcGrid/>,
        cName: 'nav-text'
    },
    {
        title: "Figma",
        path: "/Figma",
        icon: <FiIcons.FiFigma/>,
        cName: 'nav-text'
    },
    {
        title: "HTML",
        path: "/HTML",
        icon: <AiIcons.AiFillHtml5/>,
        cName: 'nav-text'
    },
    {
        title: "CSS",
        path: "/CSS",
        icon: <FaIcons.FaCss3Alt/>,
        cName: 'nav-text'
    },
    {
        title: "Bootstrap",
        path: "/Bootstrap",
        icon: <FaIcons.FaBootstrap/>,
        cName: 'nav-text'
    },
    {
        title: "Javascript Refreshment",
        path: "/Js",
        icon: <DiIcons.DiJavascript1/>,
        cName: 'nav-text'
    },
    {
        title: "Clean Code",
        path: "/Clean",
        icon: <FaIcons.FaCode/>,
        cName: 'nav-text'
    }
]