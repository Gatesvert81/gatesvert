import styled from "styled-components";

const ProjectWrapper = styled.div`

    &.projects__page{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 60px 5vw;
        width: 100%;
    }

    &.projects__page__title{
        text-align: center;
        font-size: 2rem;
        font-weight: 700;
        text-transform: uppercase;
        margin-bottom: 20px;
    }

    &.projects__page__projects{
        display: grid;
        grid-template-columns: 1fr ;
        grid-gap: 20px;
        width: 100%;
    }

    @media all and (min-width: 425px) {

    &.projects__page__projects{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        grid-gap: 20px;
        width: 100%;
    }

    }
`
export default ProjectWrapper