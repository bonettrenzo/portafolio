import {FaGithub, FaLinkedin} from "react-icons/fa"
import {AiOutlineMail} from "react-icons/ai"
import {BsFillPersonLinesFill} from "react-icons/bs"

export default [
    {
        id: 1,
        child: <> LinkedIn <FaLinkedin size={30} /> </>,
        href : "https://www.linkedin.com/in/renzo-bonett-a596821b4/",
        style : "rounded-tr-md"
    },
    {
        id: 2,
        child: <> GitHub <FaGithub size={30} /> </>,
        href : "https://github.com/bonettrenzo",
        style : "rounded-tr-md"
    },
    {
        id: 3,
        child: <> Mail <AiOutlineMail size={30} />  </>,
        href : "mailto:bonettrenzo@gmail.com",
        style : "rounded-tr-md"
    },
    {
        id: 4,
        child: <> Curriculum <BsFillPersonLinesFill size={30} />   </>,
        href : "https://drive.google.com/file/d/1LcXEiZgqp2UDrINgsUe4yld4ZM9LKBGW/view?usp=drive_link",
        style : "rounded-tr-md",
        download: true
    },
]