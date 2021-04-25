import React, { useContext, useEffect } from 'react'
import AboutWrapper from '../Component/StyledComponents/AboutWrapper'
import SkillsContainer from '../Component/Components/SkillsContainer'
import Texts from '../Component/StyledComponents/Texts'
import css from '../public/css.png'
import html from '../public/html.png'
import js from '../public/js.png'
import react from '../public/react.png'
import sass from '../public/sass.png'
import next from '../public/next.svg'
import Head from 'next/head'
import { NavContext } from '../Component/MainComponents/Context'


function about() {

    const [navSelect, setNavSelect] = useContext(NavContext)

  useEffect(() => {
    void
    setNavSelect("about")
  }, [])

    const skillLogos = [html, css, js, react, sass, next]

    return (
        <AboutWrapper className="about__page">
            <Head>
                <title>Gates Vert | About</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <AboutWrapper className="about__page__head">
                About
            </AboutWrapper>
            <AboutWrapper className="about__page__main">
                <AboutWrapper className="about__page__detail">
                    <Texts className="about__page__text__title">
                        Who Am I ?
                    </Texts> 
                    <Texts className="about__page__text">
                        I’m Mathias Martey, a Front-End Developer located in Ghana. I have a serious passion for creating intuitive and dynamic user experiences.
                    </Texts>
                    <Texts className="about__page__text">
                        Well-organised person, problem solver, independent employee with high attention to detail. Fan of Meme, outdoor activities, TV series and Mathematics. 
                    </Texts>
                    <Texts className="about__page__text">
                        Interested in the entire frontend spectrum and working hard to improve my-self every day.
                    </Texts>
                </AboutWrapper>
                <AboutWrapper className="about__page__skills">
                    {
                        skillLogos.map((logo, index) => (
                            <SkillsContainer image={logo} key={index} />
                        ))
                    }
                </AboutWrapper>
            </AboutWrapper>
        </AboutWrapper>
    )
}

export default about
