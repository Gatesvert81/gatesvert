import styled from "styled-components";

const ContactWrapper = styled.div`

    &.contact__page{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 60px 5vw;
        width: 100%;
    }

    &.contact__page__head{
        text-align: center;
        font-size: ${props => props.theme.largeFont};
        font-weight: 700;
        text-transform: uppercase;

    }

    &.contact__page__main{
        display: grid;
        grid-template-columns: 1fr;
        width: 100%;
    }
    

    &.contact__page__info{
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 10px;
        padding: 20px 0px;
        width: 100%;
    }

    &.contact__info__card{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        height: 100%;
        border-radius: 5px;
        background: ${ props => props.theme.secondary};
        padding: 5px 0px;
    }

    &.contact__info__card__head{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    }

    &.contact__info__card__text{
        text-align: center;
    }

    &.contact__info__icon{
        margin-right: 10px;
    }

    &.contact__info__card__icons{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    }

    &.contact__page__main__form{
        display: flex;
        flex-direction: column; 
    }

    &.contact__form__email__text{
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 10px;
        width: 100%;
    }

    &.contact__form__text{
        width: 100%;
    }

    &.contact__form__textarea{
        width: 100%;
        padding: 10px 0px 0px;
    }

    &.contact__page__location{
        width: 100%;
        height: 50vh;
        margin-top: 20px;
        padding: 10px;
        background: ${ props => props.theme.secondary};
        border-radius: 5px;
    }

    @media all and (min-width: 425px) {

    &.contact__page__main{
        display: grid;
        grid-template-columns: 1fr 1fr;
        width: 100%;
        grid-gap: 10px;
    }

    &.contact__page__info{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-gap: 10px;
        padding: 20px 0px;
        width: 100%;
    }

    &.contact__form__email__text{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 10px;
        width: 100%;
        grid-gap: 10px;
    }

    &.contact__page__location{
        width: 100%;
        height: 50vh;
        margin-top: 0px;
    }



    }

`
export default ContactWrapper