import React from 'react'
import Button from '../StyledComponents/Button'
import Wrapper from '../Wrapper'
import what from '../../public/what.png'
import StyledImage from '../StyledComponents/StyledImage'
import Linked from '../Components/Linked'

function Whatsapp() {
    return (
        <Wrapper className="whatsapp__wrapper">
            <Linked to="/contact" nav={false} >
                <Button className="whatsapp__btn">
                    <StyledImage src={what} alt="whatsApp" width={50} height={50}   />
                </Button>
            </Linked>
        </Wrapper>
    )
}

export default Whatsapp
