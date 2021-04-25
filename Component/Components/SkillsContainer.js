import React from 'react'
import StyledImage from '../StyledComponents/StyledImage'
import Wrapper from '../Wrapper'

function SkillsContainer({image}) {
    return (
        <Wrapper className="skillcontainer">
            <StyledImage src={image} alt="image" width={100} height={100} layout="responsive" />
        </Wrapper>
    )
}

export default SkillsContainer
