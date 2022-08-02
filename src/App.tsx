
import * as C from './styled'
import ResumeFile from './Resume - Erick Allan Silva.pdf';
import logoPng from './assets/images/icons/logodev.svg'
import menuIcon from './assets/images/icons/menuIcon.png'
import WhatsappIcon from './assets/images/icons/icon1.png'
import EmailIcon from './assets/images/icons/icon7.png'
import LinkedinIcon from './assets/images/icons/icon11.png'
import GitHubIcon from './assets/images/icons/icon10.png'
import closeIcon from './assets/images/icons/closeIcon.png'
import UpArrowIcon from './assets/images/icons/up-arrow.png'

import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Sobre } from './pages/Sobre';
import { Portfolio } from './pages/Portfolio';
import { Contato } from './pages/Contato';
import { NotFound } from './pages/NotFound';




const App = () => {
    const [menuOn, setMenuOn] = useState(false);
    const [scrollChanges, setScrollChanges] = useState(false);

    const handleClickMenu = () => {
        menuOn ? setMenuOn(false) : setMenuOn(true)
    }

    useEffect(function () {
        function scrollPosition() {
            if (window.scrollY > 50) {
                setScrollChanges(true)
            } else {
                setScrollChanges(false)
            }
        }

        window.addEventListener('scroll', scrollPosition);
    }, [])

    return (
        <C.Container>
            <C.Screen>
                <C.MainBar scrollChanges={scrollChanges}>
                    <C.Logo scrollChanges={scrollChanges} src={logoPng} />
                    <C.MenuIcon src={menuIcon} onClick={handleClickMenu} />


                    <C.Menu scrollChanges={scrollChanges}>
                        <C.MenuItem onClick={(e) => handleClickMenu}>
                            <C.StyledLink to='/'>Início</C.StyledLink>
                        </C.MenuItem>
                        <C.MenuItem>
                            <C.StyledLink to='/sobre'>Sobre</C.StyledLink>
                        </C.MenuItem>
                        <C.MenuItem>
                            <C.StyledLink to='/portfolio'>Portfólio</C.StyledLink>
                        </C.MenuItem>
                        <C.MenuItem>
                            <C.LinkA href={ResumeFile} download>Currículo</C.LinkA>
                        </C.MenuItem>
                        <C.MenuItem>
                            <C.StyledLink to='/contato'>Contato</C.StyledLink>
                        </C.MenuItem>
                    </C.Menu>


                </C.MainBar>
                <C.SocialBar>
                    <a href='https://wa.me/5584996501098' target='_blank' rel="noreferrer"><C.SocialIcon src={WhatsappIcon} scrollChanges={scrollChanges}/></a>
                    <a href='https://www.linkedin.com/in/erickallansilva/' target='_blank' rel="noreferrer"><C.SocialIcon src={LinkedinIcon}  scrollChanges={scrollChanges}/></a>
                    <a href='mailto:erickallann@gmail.com' target='_blank' rel="noreferrer"><C.SocialIcon src={EmailIcon}  scrollChanges={scrollChanges}/></a>
                    <a href='https://github.com/erickallandev' target='_blank' rel="noreferrer"><C.SocialIcon src={GitHubIcon}  scrollChanges={scrollChanges}/></a>
                </C.SocialBar>
                <C.MenuScreen menuOn={menuOn}>
                    <C.closeIcon src={closeIcon} menuOn={menuOn} onClick={handleClickMenu}></C.closeIcon>


                    <C.Item onClick={handleClickMenu}><C.StyledLink to='/'>Início</C.StyledLink></C.Item>
                    <C.Item onClick={handleClickMenu}><C.StyledLink to='/sobre'>Sobre</C.StyledLink></C.Item>
                    <C.Item onClick={handleClickMenu}><C.StyledLink to='/portfolio'>Portfólio</C.StyledLink></C.Item>
                    <C.Item onClick={handleClickMenu}><C.LinkA href={ResumeFile} download>Currículo</C.LinkA></C.Item>
                    <C.Item onClick={handleClickMenu}><C.StyledLink to='/contato'>Contato</C.StyledLink></C.Item>


                </C.MenuScreen>
                <C.Content>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/sobre" element={<Sobre />} />
                        <Route path="/portfolio" element={<Portfolio />} />
                        <Route path="/contato" element={<Contato />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </C.Content>
                <C.ArrowToTop scrollChanges = {scrollChanges} onClick={() => window.scrollTo(0, 0)}>
                    <C.ArrowImg src={UpArrowIcon} alt='' />
                </C.ArrowToTop>
                <C.Footer> EA Web Dev © 2022 - Developed by Erick Allan Silva </C.Footer>
            </C.Screen>

        </C.Container>
        
    );
}

export default App;