import Link from 'next/link'
import { useContext } from 'react'
import { NavContext } from '../MainComponents/Context'
import Anchor from "../StyledComponents/Anchor"
import Wrapper from "../Wrapper"

function Linked({children, to, onclick, nav, pass, target}) {

    const [navSelect , setNavSelect] = useContext(NavContext)

    return (
        <Wrapper className={nav ?"linked" : null } selectedPage={ navSelect.toUpperCase() === children.toString().toUpperCase() ? true : false} >
            <Link href={to} passHref={pass || false } >
                <Anchor onClick={onclick} target={ target ? "_blank" : null } >
                    {children}
                </Anchor>
            </Link>
        </Wrapper>
    )
}

export default Linked
