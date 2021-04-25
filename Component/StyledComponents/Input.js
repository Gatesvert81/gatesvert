import styled from "styled-components";

const Input = styled.input`

    width: 100%;
    padding: 10px;
    text-align: left;
    background: ${props => props.theme.secondary};
    border: 1px hidden;
    color: ${props => props.theme.textColor};
`
export default Input