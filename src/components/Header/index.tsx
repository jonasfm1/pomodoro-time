import { HeaderContainer } from "./styles";
import { Timer, Scroll } from 'phosphor-react'

import Logoignite from '../../assets/Logoignite.svg'
import { NavLink } from "react-router-dom";

export function Header(){
    return(
        
        <HeaderContainer>

            <img src={Logoignite} />

            <nav>
                <NavLink to="/" title="Timer">
                    <Timer size={24} />
                </NavLink>

                <NavLink to="/history" title="Hitorico">
                    <Scroll size={24} />
                </NavLink>
            </nav>

        </HeaderContainer>
    )
}