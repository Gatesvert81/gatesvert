import styled from "styled-components";
import Image from 'next/image'

const StyledImage = styled(Image)`

    &.icon__image{
        filter: ${ props => props.theme.invert} ;
    }

    &.project__image{
        object-fit: cover;
    }

    &.profile__image{
        max-height: 40vh;
        max-width: 40vw;
        object-fit: contain;
        image-rendering: crisp-edges;
    }

    &.project__image{
        transition: transform ease-in-out 0.4s;
    }

    


`

export default StyledImage