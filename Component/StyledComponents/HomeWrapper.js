import styled from "styled-components";

const HomeWrapper = styled.div`

    &.home__main__image{
        width: 100%;
        height: fit-content;
        background-image: linear-gradient(90deg, #74EBD5 0%, #9FACE6 100%);
        border-radius: 30% 70% 70% 30% / 30% 37% 63% 70% ;
        overflow: hidden;
        background-color: #74EBD5;

    }

    &.home__about__main{
        display: grid;
        grid-template-columns: 1fr;
        justify-items: center;
    }

    &.home__main__text{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        text-align: left;
        width: 100%;
    }

    &.home__section__title{
        text-align: center;
        font-size: ${props => props.theme.mediumFont};

    }

    &.home__about__main{
        display: grid;
        grid-template-columns: 1fr;
        justify-items: center;
    }

    &.home__about__description{
        font-size: ${props => props.theme.smallFont};
    }

    &.home__projects__title{
        margin-bottom: 20px;
    }

    &.home__about__skills{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        justify-items: center;
        align-content: center;
        grid-gap: 20px;
        width: 100% ;
    }

    &.home__projects__container{
        display: grid;
        grid-template-columns: 1fr;
        align-content: center;
        grid-gap: 10px;
        width: 100%;
    }

    &.home__projects__view__more{
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin-top: 10px;
        width: 100%;
    }

    @media all and (min-width: 425px) {
    &.home__main__image{
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

    &.home__about__main{
        display: grid;
        grid-template-columns: 1fr 1fr;
        justify-items: center;
        grid-gap: 20px;
    }

    &.home__projects__container{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;
        grid-gap: 20px;
        width: 100%;
    }


    }
`

export default HomeWrapper