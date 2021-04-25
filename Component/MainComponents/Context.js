import React, { createContext, useEffect, useState } from 'react'

export const ThemeContext = createContext()
export const NavContext = createContext()
export const MessageContext = createContext()
export const LoadingContext = createContext()
function Context({ children }) {
    const [theme, setTheme] = useState(false)
    const [navSelect, setNavSelect] = useState("home")
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const sendMessage = (message) => {
            fetch(`http://127.0.0.1:4000/send-text?textmessage=${message}`)
            .then( () => {
                setLoading(false)
                alert("Message Sent Successfully")
            }  )
        .catch(err => {
            setLoading(false)
            alert(err)
        } )
        }
        if (message.length > 0 ) {
            setLoading(true)
            sendMessage(message)
        }
    }, [message])

    

    return (
        <ThemeContext.Provider value={[theme, setTheme]}>
            <NavContext.Provider value={[navSelect, setNavSelect]}>
                <MessageContext.Provider value={[message, setMessage]} >
                    <LoadingContext.Provider value={[loading, setLoading]} >
                        {children}
                    </LoadingContext.Provider>
                </MessageContext.Provider>
            </NavContext.Provider>
        </ThemeContext.Provider>
    )
}

export default Context
