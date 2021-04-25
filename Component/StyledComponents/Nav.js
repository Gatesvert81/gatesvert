import styled from "styled-components";

const Nav = styled.nav`

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px 5vw;
    height: 50px;
    position: fixed;
    width: 100%;
    top: 0px;
    z-index: 10;
    background-color: ${props => props.show ? props.theme.navColor : "none" };
    backdrop-filter: ${ props => props.show ? "blur(3px)" : "none"} ;
`
export default Nav