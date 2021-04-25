import styled from "styled-components";

const Texts = styled.p`

    color: ${props => props.theme.textColor };

    &.home__main__head{
        font-size: ${props => props.theme.largeFont };
        font-weight: 700;

    }

    &.home__main__detail, &.about__page__text{
        font-size: ${props => props.theme.smallFont};
        font-weight: 300;
        
    }
    
    &.about__page__text__title{
        font-size: ${props => props.theme.mediumFont};
        font-weight: 500;
        text-align: center;
    }

    &.contact__form__text{
        font-size: ${props => props.theme.smallFont};
        padding: 20px 0px;
    }
`
export default Texts