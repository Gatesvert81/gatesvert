import styled from "styled-components";

const Wrapper = styled.div`

    &.layout{
        background: ${props => props.theme.primary} ;
        color: ${props => props.theme.textColor} ;
        min-height: 100vh;
    }

    &.linked{
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: ${ props => props.selectedPage ? "1" : "0.8"} ;
        transition: 0.3s ease-in-out;
        position: relative;
    }

    &.linked::before{
        content: '';
        position: absolute;
        bottom: -10%;
        opacity: ${ props => props.selectedPage ? "1" : "0"};
        width: 80%;
        height: 2px;
        background: ${ props => props.theme.textColor};
        transform: ${ props => props.selectedPage ? "scale(1)" : "scale(0.3)"};
        transition: 0.4s ease-in-out;
    }
    
    &.linked:hover::before {
        opacity: 1;
        width: 80%;
        transform: scale(1);
    }

    &.linked:hover{
        transform: scale(1.1);
        opacity: 1;
    }

    &.whatsapp__wrapper{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        position: fixed;
        bottom: 5vw;
        z-index: 10;
        right: 5vw;
    }

    &.skillcontainer{
        width: 50px;
        height: fit-content;
    }

    @media all and (min-width: 425px){
        &.linked{
            margin: 0px 5px;
        }
    }

`
export default Wrapper