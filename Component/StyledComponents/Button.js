import styled from "styled-components";

const Button = styled.button`

    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    background: none;
    border: 1px solid;
    border-color: ${props => props.theme.color};
    border-radius: 5px;
    letter-spacing: 2px;
    font-weight: 300;
    color: ${props => props.theme.textColor};
    cursor: pointer;
    transition: 0.3s ease-in-out;

    &:hover{
        transform: scale(1.1);
    }

    &.home__main__span{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px;
        text-transform: uppercase;
        background: none;
        border: 1px solid;
        border-color: ${props => props.theme.color};
        border-radius: 5px;
        letter-spacing: 2px;
        font-weight: 600;
        color: ${props => props.theme.textColor};
    }

    &.project__card__btn{
        width: 100%;
        background: none;
        border: 1px solid;
        /* text-transform: uppercase; */
        border-color: ${props => props.theme.color};
        border-radius: 5px;
        letter-spacing: 2px;
        font-weight: 300;
        color: ${props => props.theme.textColor};
        font-size: 0.75rem;
        padding: 5px;
    }

    &.primary{
        color: ${props => props.theme.primary};
        background: ${props => props.theme.textColor};
    }

    &.icon{
        width: fit-content;
        height: fit-content;
        border: 1px hidden;
        margin: 0px 10px;
    }

    &.contact__icon{
        width: fit-content;
        height: fit-content;
        border: 1px hidden;
    }

    &.whatsapp__btn{
        width: fit-content;
        height: fit-content;
        border: 1px hidden;
        margin: 0px 10px;
    }
`

export default Button