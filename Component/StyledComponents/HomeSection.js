import styled from "styled-components";

const HomeSection = styled.section`

    width: 100%;
    min-height: 60vh;
    padding: 20px 5vw;

    &.home__about__section{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        /* align-items: center; */
        margin-top: 50px;
    }

    &.home__projects__section{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }

    &.home__contact__section{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
    }

    @media all and (min-width: 425px) {
        
        padding: 20px 10vw;

    &.home__about__section{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        min-height: 30vh;
    }



    }
    
`

export default HomeSection