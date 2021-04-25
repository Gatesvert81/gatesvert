import styled from "styled-components";

const HomeMain = styled.main`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 10px;
    justify-items: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    padding: 10px 5vw 0px;
    margin-bottom: auto;

    @media all and (min-width: 425px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr ;
        justify-items: center;
        align-items: center;
        width: 100%;
        height: 100vh;
        padding: 10px 10vw 0px;
        grid-gap: 10px;
    }
`

export default HomeMain