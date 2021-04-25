import React from 'react'
import Button from '../StyledComponents/Button'
import ProjectCard from '../StyledComponents/ProjectCard'
import StyledImage from '../StyledComponents/StyledImage'
import Linked from './Linked'

function Project({title, children, image, live, source}) {
    return (
        <ProjectCard className="project__card" >
            <ProjectCard className="project__card__main">
                <ProjectCard className="project__card__image">
                    {/* <Linked to={live} nav={false} pass={true} target={true}> */}
                        <StyledImage src={image} alt={title} width={100} height={100} layout="responsive" className="project__image"/>
                    {/* </Linked> */}
                </ProjectCard>
                <ProjectCard className="project__card__detail">
                    <ProjectCard className="project__card__title">
                        {title}
                    </ProjectCard>
                    <ProjectCard className="project__card__text">
                        {children}
                    </ProjectCard> 
                    <ProjectCard className="project__card__links">
                        <Linked to={live} nav={false} pass={true} target={true} >
                            <Button className="project__card__btn primary">
                                View live
                            </Button>
                        </Linked>
                        <Linked to={source} nav={false} pass={true} target={true}>
                            <Button className="project__card__btn">
                                Sorce Code
                            </Button>
                        </Linked>
                    </ProjectCard>
                </ProjectCard>
                
            </ProjectCard>
        </ProjectCard>
    )
}

export default Project
