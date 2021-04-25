import { BallPulseSync } from "react-pure-loaders";
import styled from "styled-components";

const Load = styled(BallPulseSync)`
    color: ${ props => props.theme.testColor};
`

export default Load