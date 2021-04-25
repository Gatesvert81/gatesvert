import styled from "styled-components";


const TextArea = styled.textarea`

    width: 100%;
    height: 10vh;
    padding: 10px;
    background: none;
    background: ${props => props.theme.secondary};
    margin-bottom: 8px;
    border: 1px hidden;
    font-family: Raleway;
    color: ${props => props.theme.textColor};
`
export default TextArea