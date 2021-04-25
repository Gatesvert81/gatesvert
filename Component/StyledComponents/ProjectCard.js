import styled from "styled-components";

const ProjectCard = styled.div`

transition: all ease-in-out 0.4s;

    &.project__card{
        display: flex;
        flex-direction: column;
        background: ${ props => props.theme.secondary} ;
        border-radius: 5px;
        position: relative;
        padding: 10px;
        overflow: hidden;
        height: fit-content; 
        transition: all ease-in-out 0.4s;
    }

    &.project__card__title{
        font-size: 1.2rem;
        text-align: center;
    }
    
    &.project__card__text{
        font-size: ${props => props.theme.smallFont};
        text-align: center;
        padding: 10px 0px;
    }

    &.project__card__main::before{
        content: '';
        position: absolute;
        top: 1.5em;
        bottom: 1.5em;
        left: 1.5em;
        right: 1.5em;
        border: 1px solid ${ props => props.theme.textColor };
        opacity: 0;
        backdrop-filter: blur(2px);
        transform: scale(0.7);
        z-index: 1;
        transition: all ease-in-out 0.4s;
    }


    &.project__card__detail{
        position: absolute;
        top: 2.5em;
        bottom: 2.5em;
        left: 2.5em;
        right: 2.5em;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        transform: scale(0.7);
        transition: all ease-in-out 0.4s;
        opacity: 0;
        z-index: 2;
    }

    &.project__card:hover &.project__card__main::before {
        opacity: 1;
        transform: scale(1);
    }

    &.project__card:hover &.project__card__detail {
        opacity: 1;
        transform: scale(1);
    }

    &.project__card__image{
        overflow: hidden;
        border-radius: 5px;
    }

    &.project__card:hover  .project__image{
        transform: scale(1.1);
        opacity: 0.4;
    }

    &.project__card__title{
        font-weight: 500;
        font-size: ${ props => props.theme.mediumFont};
    }

    &.project__card__links{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        width: 80%;
    }

    
`

export default ProjectCard