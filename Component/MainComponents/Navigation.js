import { AnimatePresence, motion } from 'framer-motion';
import { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import Linked from '../Components/Linked';
import Button from '../StyledComponents/Button';
import Nav from "../StyledComponents/Nav"
import NavWrapper from "../StyledComponents/NavWrapper"
import ig from '../../public/insta.png'
import what from '../../public/whatsapp.png'
import twi from '../../public/twi.png'
import git from '../../public/git.png'
import sun from '../../public/sunny-day.png'
import moon from '../../public/moon.png'
import StyledImage from '../StyledComponents/StyledImage';
import { NavContext, ThemeContext } from './Context';


const NavAnimate = styled(motion.div)`


    &.nav__mobile{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        width: 100%;
        height: 30vh;
        position: absolute;
        top: 50px;
        right: 0px;
        z-index: 5;
        background: ${props => props.theme.navColor};
        align-self: flex-start;
        backdrop-filter: blur(3px) !important;
    }

    @media all and (min-width: 425px){
        &.nav__mobile{
            display: none;
        }
    }
`

function Navigation() {
    const [openNav, setOpenNav] = useState(false)
    const [show, handleShow] = useState(false)

    const [theme, setTheme] = useContext(ThemeContext)
    const [navSelect, setNavSelect] = useContext(NavContext)

    const socialIcons= [ig, twi, git, what]

    const variants = {
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 1, y: "-150%" }
    }

    useEffect(() => {
        const myFunc = () => {
            if (window.scrollY > 10) {
                handleShow(true);
            } else handleShow(false);
        }
        window.addEventListener("scroll", myFunc)
        return () => {
            window.removeEventListener("scroll", myFunc)
        }
    }, [])

    return (
            <Nav show={show}>
                <NavWrapper className="nav__logo">
                    Gates Vert
                </NavWrapper>
                <NavWrapper className="nav__mobile__wrapper">
                    <AnimatePresence>
                        <NavAnimate
                            key="mobile"
                            initial={false}
                            animate={openNav ? "visible" : "hidden"}
                            variants={variants}
                            className="nav__mobile"
                        >
                            <Linked to="/" onclick={() => setOpenNav(!openNav)}>
                                Home
                        </Linked>
                            <Linked to="/about" onclick={() => setOpenNav(!openNav)}>
                                About
                        </Linked>
                            <Linked to="/projects" onclick={() => setOpenNav(!openNav)}>
                                Portfolio
                        </Linked>
                            <Linked to="/contact" onclick={() => setOpenNav(!openNav)}>
                                Contact
                        </Linked>
                        <NavWrapper onClick={() => setTheme(!theme)} className="nav__theme">
                            <NavWrapper>
                            <StyledImage src={ theme ? sun : moon} alt="icon"  width={20} height={20} className="icon__image"/>
                            </NavWrapper>
                            <NavWrapper>
                            { theme ? " Light theme"  : " Dark Theme"}
                            </NavWrapper>
                        </NavWrapper>
                        <NavWrapper className="nav__social">
                            {
                                socialIcons.map((icon, index) => (
                                    <Button key={index} className="icon" >
                                        <StyledImage src={icon} alt="icon"  width={30} height={30} className="icon__image"/>
                                    </Button>
                                ))
                            }
                        </NavWrapper>
                        </NavAnimate>
                    </AnimatePresence>
                </NavWrapper>
                <NavWrapper className="nav__list__wrapper">
                    <NavWrapper className={openNav ? "nav__btn__open" : "nav__btn"}>
                        <NavWrapper className="nav__btn__burger" onClick={() => setOpenNav(!openNav)} >
                        </NavWrapper>
                    </NavWrapper>

                    <NavWrapper className="nav__desktop">
                    <Linked to="/" nav={true} onclick={() => setNavSelect("home")} >
                                Home
                        </Linked>
                            <Linked to="/about" nav={true} onclick={() => setNavSelect("about")} >
                                About
                        </Linked>
                            <Linked to="/projects" nav={true} onclick={() => setNavSelect("projects")}>
                                Projects
                        </Linked>
                            <Linked to="/contact" nav={true} onclick={() => setNavSelect("contact")}>
                                Contact
                        </Linked>
                        <NavWrapper onClick={() => setTheme(!theme)} 
                        // className="nav__theme"
                        >
                            <NavWrapper>
                            <StyledImage src={ theme ? sun : moon} alt="icon"  width={20} height={20} className="icon__image"/>
                            </NavWrapper>
                            {/* <NavWrapper>
                            { theme ? " Light theme"  : " Dark Theme"}
                            </NavWrapper> */}
                        </NavWrapper>
                    </NavWrapper>
                </NavWrapper>
            </Nav>
    )
}

export default Navigation
