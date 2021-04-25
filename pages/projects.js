import Project from "../Component/Components/Project"
import ProjectWrapper from "../Component/StyledComponents/ProjectWrapper"
import me from '../public/me.jpg'
import loop from '../public/loopstudio.jpg'
import room from '../public/room.jpg'
import todo from '../public/todo.jpg'
import stream from '../public/streamify.png'
import kent from '../public/kents-cup.png'
import Head from "next/head"
import { useContext, useEffect } from "react"
import { NavContext } from "../Component/MainComponents/Context"

function projects() {

    const [navSelect, setNavSelect] = useContext(NavContext)

    useEffect(() => {
        void
        setNavSelect("projects")
    }, [])

    return (
        <ProjectWrapper className="projects__page" >
            <Head>
                <title>Gates Vert | Projects</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ProjectWrapper className="projects__page__title">
                Projects
            </ProjectWrapper>
            <ProjectWrapper className="projects__page__projects" >
                <Project
                    title="Kent's cup"
                    image={kent}
                    live="https://kents-cup.vercel.app/"
                    source="https://github.com/Gatesvert81/kents-cup"
                >
                    A Multi page coffee website made with Next js.
                </Project>
                <Project
                    title="Streamify"
                    image={stream}
                    live="https://gatesvert81.github.io/streamify/"
                    source="https://github.com/Gatesvert81/streamify"
                >
                    Movie website made with React. Has authentication, API requests made and it's multi-paged.
                </Project>
                <Project 
                    title="Loopstudios"
                    image={loop}
                    live="https://gatesvert81.github.io/loopstudios/"
                    source="https://github.com/Gatesvert81/loopstudios"
                    >
                    An html and Css website. Mainly focused on layout and grid system.
                </Project>
                <Project 
                    title="Room Hompage"
                    image={room}
                    live="https://gatesvert81.github.io/room-homepage-master/"
                    source="https://github.com/Gatesvert81/room-homepage-master"
                    >
                    Room chairs showcase mad with html, css and a little Javascript. Also focused on layout and grid system.
                </Project>
                <Project
                    title="Todo"
                    image={todo}
                    live="https://gatesvert81.github.io/todo-app/"
                    source="https://github.com/Gatesvert81/todo-app"
                >
                    A React Todo Website with Redux as the main State Manager. This Site helped me learn Redux and apply it in other applications.
                </Project>
            </ProjectWrapper>
        </ProjectWrapper>
    )
}

export default projects
