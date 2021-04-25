import { useContext } from 'react'
import { ThemeProvider } from 'styled-components'
import Wrapper from "../Wrapper"
import { ThemeContext } from './Context'
import Navigation from "./Navigation"
import { darkTheme, lightTheme } from './Theme'
import Whatsapp from "./Whatsapp"

function Layout({ children }) {

    const [theme, setTheme] = useContext(ThemeContext)

    return (
        <>
            <ThemeProvider theme={theme ? darkTheme : lightTheme
            }>
                <Wrapper className="layout">
                    <Navigation />
                    {children}
                    <Whatsapp />
                </Wrapper>
            </ThemeProvider>
        </>
    )
}

export default Layout
