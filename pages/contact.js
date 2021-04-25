import Button from "../Component/StyledComponents/Button"
import ContactWrapper from "../Component/StyledComponents/ContactWrapper"
import Form from "../Component/StyledComponents/Form"
import Iframe from "../Component/StyledComponents/Iframe"
import Input from "../Component/StyledComponents/Input"
import StyledImage from "../Component/StyledComponents/StyledImage"
import TextArea from "../Component/StyledComponents/TextArea"
import ig from '../public/insta.png'
import what from '../public/whatsapp.png'
import twi from '../public/twi.png'
import git from '../public/git.png'
import email from '../public/email.png'
import location from '../public/location.png'
import share from '../public/share.png'
import Head from "next/head"
import Texts from "../Component/StyledComponents/Texts"
import { useContext, useEffect } from "react"
import { LoadingContext, MessageContext, NavContext } from "../Component/MainComponents/Context"
import { BallPulseSync } from "react-pure-loaders"


function contact() {

    const [navSelect, setNavSelect] = useContext(NavContext)
    const [loading, setLoading] = useContext(LoadingContext)
    const [message, setMessage] = useContext(MessageContext)


    const sendCreatedMessage = (e) => {
     
      e.preventDefault()
  
        const { name, email, message} = e.target.elements
    
        if( name.value.length === 0 && email.value.length === 0 && message.value.length === 0 ) {
            alert("Please Fill the form to send Message")
        } else {
            const messageFormat = `\n Hello Gates, \n I am ${name.value} and my email is ${email.value}.\n ${message.value}`
            setMessage(messageFormat)
        }

  
    }

    useEffect(() => {
        void
        setNavSelect("contact")
    }, [])

    const socialIcons= [ig, twi, git, what]

    return (
        <ContactWrapper className="contact__page">
            <Head>
                <title>Gates Vert | Contact</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ContactWrapper className="contact__page__head">
                Contact
            </ContactWrapper>
            <ContactWrapper className="contact__page__info">
                <ContactWrapper className="contact__info__card" >
                    <ContactWrapper  className="contact__info__card__head">
                        <ContactWrapper className="contact__info__icon">
                            <StyledImage src={what} alt="icon" width={20} height={20} className="icon__image" />
                        </ContactWrapper>
                        <ContactWrapper>
                            Phone    
                        </ContactWrapper> 
                    </ContactWrapper>
                    <ContactWrapper className="contact__info__card__text">
                        +233 50 592 0929
                    </ContactWrapper>
                </ContactWrapper>
                <ContactWrapper className="contact__info__card" >
                    <ContactWrapper className="contact__info__card__head">
                        <ContactWrapper className="contact__info__icon">
                            <StyledImage src={email} alt="icon" width={20} height={20} className="icon__image" />
                        </ContactWrapper>
                        <ContactWrapper>
                            Email
                        </ContactWrapper>
                    </ContactWrapper>
                    <ContactWrapper className="contact__info__card__text">
                        mathiasmartey81@gmail.com
                    </ContactWrapper>
                </ContactWrapper>
                <ContactWrapper className="contact__info__card" >
                    <ContactWrapper className="contact__info__card__head">
                        <ContactWrapper className="contact__info__icon">
                            <StyledImage src={location} alt="icon" width={20} height={20} className="icon__image" />
                        </ContactWrapper>
                        <ContactWrapper>
                            Address    
                        </ContactWrapper> 
                    </ContactWrapper>
                    <ContactWrapper className="contact__info__card__text">
                        Accra, Ghana
                    </ContactWrapper>
                </ContactWrapper>
                <ContactWrapper className="contact__info__card" >
                    <ContactWrapper className="contact__info__card__head">
                        <ContactWrapper className="contact__info__icon">
                            <StyledImage src={share} alt="icon" width={15} height={15} className="icon__image" />
                        </ContactWrapper>
                        <ContactWrapper>
                            Social Media    
                        </ContactWrapper> 
                    </ContactWrapper>
                    <ContactWrapper className="contact__info__card__icons">
                        {
                            socialIcons.map((icon, index) => (
                                <Button key={index} className="contact__icon" >
                                    <StyledImage src={icon} alt="icon" width={30} height={30} className="icon__image" />
                                </Button>
                            ))
                        }
                    </ContactWrapper>
                </ContactWrapper>
            </ContactWrapper>
            <ContactWrapper className="contact__page__main">
                <ContactWrapper className="contact__page__main__form">
                    <Texts className="contact__form__text">
                        I’m interested in freelance opportunities – especially ambitious or large projects. However, if you have other request or question, don’t hesitate to use the form.
                    </Texts>
                    <Form onSubmit={sendCreatedMessage} >
                        <ContactWrapper className="contact__form__email__text">
                            <ContactWrapper className="contact__form__text">
                                <Input type="text" name="name" placeholder="Name" />
                            </ContactWrapper>
                            <ContactWrapper className="contact__form__text">
                                <Input type="email" name="email" placeholder="Email" />
                            </ContactWrapper>
                        </ContactWrapper>
                        <ContactWrapper className="contact__form__textarea">
                            <TextArea type="text" name="message" placeholder="Message" />
                        </ContactWrapper>
                        <ContactWrapper className="contact__form__btn">
                            <Button className="form__btn primary">
                            {
                              loading ? <BallPulseSync color="black" loading={true} /> : 'Send Message'
                            }
                            </Button>
                        </ContactWrapper>
                    </Form>
                </ContactWrapper>
                <ContactWrapper className="contact__page__location">
                <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.8079905886066!2d-0.10352278555227667!3d5.595365834808877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf85b0343cad87%3A0xeb495a7939501017!2sGlobal%20Evangelical%20Church%2C%20Teshie!5e0!3m2!1sen!2sgh!4v1617753756253!5m2!1sen!2sgh" width="100%" height="100%" style={{ border:0 }} allowfullscreen="" loading="lazy"></Iframe>
                </ContactWrapper>
            </ContactWrapper>
        </ContactWrapper>
    )
}

export default contact
