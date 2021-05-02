import styled from "styled-components";

const NavWrapper = styled.div`

    &.nav__list__wrapper{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    }

    &.nav__desktop{
        display: none;
    }

    &.nav__logo{
        font-family: Great Day ;
        font-size: 1.3rem;
        font-weight: 500;
    }

    &.nav__theme{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        width: 40%;
    }

    &.nav__social{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        min-width: 50%;
    }

    &.nav__btn, &.nav__btn__open{
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 32px;
        height: 32px;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        border: 2px solid hidden;
        overflow: hidden;
    }

    &.nav__btn__burger{
        width: 30px;
        height: 3px;
        background: ${props => props.theme.color};
        border-radius: 5px;
        box-shadow: 0 2px 5px rgba(225, 101, 47, .2);
        transition: all 0.3s ease-in-out;
    }

    &.nav__btn__burger::before , &.nav__btn__burger::after{
        content: '';
        position: absolute;
        width: 30px;
        height: 3px;
        background: ${props => props.theme.color};
        border-radius: 3px;
        box-shadow: 0 2px 5px rgba(225, 101, 47, .2);
        transition: all 0.3s ease-in-out;
    }

    &.nav__btn__burger::before{
        transform: translateY(-10px)
    }

    &.nav__btn__burger::after{
        transform: translateY(10px)
    }

    &.nav__btn__open > &.nav__btn__burger{
        transform: translateX(-30px);
        background: transparent;
        box-shadow: none;
    }

    &.nav__btn__open > &.nav__btn__burger::before {
        transform: rotate(45deg) translate(22px, -22px);
    }

    &.nav__btn__open > &.nav__btn__burger::after {
        transform: rotate(-45deg) translate(22px, 22px);
    }

    @media all and (min-width: 425px) {
    &.nav__mobile__wrapper , &.nav__btn, &.nav__btn__open{
            display: none;
        }

    &.nav__desktop{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        min-width: 40vw;
        font-family: Raleway;
    }
    }

`
export default NavWrapper