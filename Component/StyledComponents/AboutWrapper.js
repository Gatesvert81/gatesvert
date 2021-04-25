import styled from "styled-components";

const AboutWrapper = styled.div`

    &.about__page{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 60px 5vw;
    }

    &.about__page__head{
        text-align: center;
        font-size: ${props => props.theme.largeFont};
        font-weight: 700;
        text-transform: uppercase;
    }

    &.about__page__main{
        display: grid;
        grid-template-columns: 1fr;

    }

    &.about__page__skills{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        justify-items: center;
        align-content: center;
        grid-gap: 20px;
        width: 100% ;
    }
    
    @media all and (min-width: 425px){


        &.about__page__main{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 10px;

    }


    }
    
`
export default AboutWrapper