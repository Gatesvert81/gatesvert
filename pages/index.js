import Head from 'next/head'
import Project from '../Component/Components/Project'
import SkillsContainer from '../Component/Components/SkillsContainer'
import HomeMain from '../Component/StyledComponents/HomeMain'
import HomeSection from '../Component/StyledComponents/HomeSection'
import HomeWrapper from '../Component/StyledComponents/HomeWrapper'
import StyledImage from '../Component/StyledComponents/StyledImage'
import Texts from '../Component/StyledComponents/Texts'
import me from '../public/me.png'
import Button from "../Component/StyledComponents/Button"
import ContactWrapper from "../Component/StyledComponents/ContactWrapper"
import Form from "../Component/StyledComponents/Form"
import Input from "../Component/StyledComponents/Input"
import TextArea from "../Component/StyledComponents/TextArea"
import css from '../public/css.png'
import html from '../public/html.png'
import js from '../public/js.png'
import react from '../public/react.png'
import sass from '../public/sass.png'
import next from '../public/next.svg'
import loop from '../public/loopstudio.jpg'
import room from '../public/room.jpg'
import Iframe from '../Component/StyledComponents/Iframe'
import Linked from '../Component/Components/Linked'
import { LoadingContext, MessageContext, NavContext } from '../Component/MainComponents/Context'
import { useContext,useEffect } from 'react'
import Anchor from '../Component/StyledComponents/Anchor'
import Load from '../Component/StyledComponents/Load'
import { BallPulseSync } from 'react-pure-loaders'


export default function Home() {
  
  const [navSelect, setNavSelect] = useContext(NavContext)
  const [message, setMessage] = useContext(MessageContext)
  const [loading, setLoading] = useContext(LoadingContext)

  useEffect(() => {
    void
    setNavSelect("home")
  }, [])

  const sendCreatedMessage = (e) => {
    e.preventDefault()

    const { name, email, message } = e.target.elements

    if (name.value.length === 0 && email.value.length === 0 && message.value.length === 0) {
      alert("Please Fill the form to send Message")
    } else {
      const messageFormat = `\n Hello Gates, \n I am ${name.value} and my email is ${email.value}.\n ${message.value}`
      setMessage(messageFormat)
    }


  }

  const skillLogos = [html, css, js, react, sass, next]
  return (
    <HomeWrapper >
      <Head>
        <title>Gates Vert | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeMain>
        <HomeWrapper className="home__main__text">
          <Texts className="home__main__head" >
            Hi, <br/>
            I am Mathias, <br/>
            Front End Developer
          </Texts>
          <HomeWrapper>
            <Anchor href="#contact" className="hire__me" >
              <Button  className="home__main__span primary" 
              onClick={(e) => e.preventDefault()} 
              >
                Hire Me
              </Button>
            </Anchor>
          </HomeWrapper>
        </HomeWrapper>
        <HomeWrapper className="home__main__image">
          <StyledImage src={me} alt="me" width={100} height={100} layout="responsive" className="profile__image" />
        </HomeWrapper>
      </HomeMain>
      <HomeSection className="home__about__section">
        <HomeWrapper className="home__section__title">
          What I do ?
        </HomeWrapper>
        <HomeWrapper className="home__about__main">
        <HomeWrapper className="home__about__description">
          <Texts>
            The primary area of my interest is undoubtedly front-end. My passion for code had begun when I visited certain websites like Hulu, spotify and many other and loved their great web designs. Since then I put in much effort to improve myself in order to stand out.
          </Texts>
          <Texts>
            For over a year now I have learnt good skills and learnt great frameworks like React and Next js to boost my skill and website rendering speed as a front-end Developer. I am looking forward to work with teams with great ambition to improve technology as whole and contribute to their work.
          </Texts>
        </HomeWrapper>
        <HomeWrapper className="home__about__skills">
          {
            skillLogos.map((logo, index) => (
              <SkillsContainer image={logo} key={index} />
            ))
          }
        </HomeWrapper>
        </HomeWrapper>
      </HomeSection>
      <HomeSection className="home__projects__section">
        <HomeWrapper className="home__section__title home__projects__title">
          Projects
        </HomeWrapper>
        <HomeWrapper className="home__projects__container">
          <Project 
            title="Loopstudios"
            image={loop}
            live="https://gatesvert81.github.io/loopstudios/"
            source="https://github.com/Gatesvert81/loopstudios"
            >
            An html and Css website. Mainly focused on layout and grid system.
          </Project>
          <Project 
            title="Room Hompage"
            image={room}
            live="https://gatesvert81.github.io/room-homepage-master/"
            source="https://github.com/Gatesvert81/room-homepage-master"
            >
            Room chairs showcase mad with html, css and a little Javascript. Also focused on layout and grid system.
          </Project>
        </HomeWrapper>
        <HomeWrapper className="home__projects__view__more">
          <Linked to="/projects">
            <Button>
              View More
            </Button>
          </Linked>
        </HomeWrapper>
      </HomeSection>
      <HomeSection className="home__contact__section" id="contact" >
        <HomeWrapper className="home__section__title">
              Contact 
          </HomeWrapper>
          <ContactWrapper className="contact__page__main">
              <ContactWrapper className="contact__page__main__form">
                    <Texts className="contact__form__text">
                        I’m interested in freelance and job opportunities – especially ambitious or large projects. However, if you have other request or question, don’t hesitate to use the form.
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
                          <Button className="form__btn primary" type="submit"
                          >
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
      </HomeSection>
      
        
    </HomeWrapper>
  )
}
