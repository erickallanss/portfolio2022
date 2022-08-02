
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
import LeftArrowIcon from './assets/images/icons/left-arrow.png'
import CircleIcon from './assets/images/icons/circle.png'
import SquareIcon from './assets/images/icons/square.png'
import LeftIcon from './assets/images/icons/left-arrow2.png'
import CamIcon from './assets/images/icons/cam.png'
import TelIcon from './assets/images/icons/phone.png'
import MoreIcon from './assets/images/icons/more.png'
import MicIcon from './assets/images/icons/mic.png'
import SmileIcon from './assets/images/icons/emojiicon.png'
import ClipIcon from './assets/images/icons/clipicon.png'
import CameraIcon from './assets/images/icons/camera.png'
import React, { useState, useEffect, ReactComponentElement } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Home } from './pages/Home';
import { Sobre } from './pages/Sobre';
import { Portfolio } from './pages/Portfolio';
import { Contato } from './pages/Contato';
import { NotFound } from './pages/NotFound';




const App = () => {
    const [menuOn, setMenuOn] = useState(false);

    const [isActive, setIsActive] = useState(true);

    const handleClickMenu = () => {
        menuOn ? setMenuOn(false) : setMenuOn(true)
        console.log(menuOn)
    }

    const handleMenuActive = () => {
        
    }

    return (
        <C.Container>
            <C.Screen>
                <C.MainBar>
                    <C.Logo src={logoPng} />
                    <C.MenuIcon src={menuIcon} onClick={handleClickMenu} />


                    <C.Menu>
                        <C.MenuItem onClick={(e) => handleClickMenu}>
                            <C.StyledLink to='/'>Início</C.StyledLink>
                        </C.MenuItem>
                        <C.MenuItem onClick={handleMenuActive}>
                            <C.StyledLink to='/sobre'>Sobre</C.StyledLink>
                        </C.MenuItem>
                        <C.MenuItem onClick={handleMenuActive}>
                            <C.StyledLink to='/portfolio'>Portfólio</C.StyledLink>
                        </C.MenuItem>
                        <C.MenuItem>
                            <C.LinkA href={ResumeFile} download>Currículo</C.LinkA>
                        </C.MenuItem>
                        <C.MenuItem onClick={handleMenuActive}>
                            <C.StyledLink to='/contato'>Contato</C.StyledLink>
                        </C.MenuItem>
                    </C.Menu>


                </C.MainBar>
                <C.Content>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/sobre" element={<Sobre />} />
                        <Route path="/portfolio" element={<Portfolio />} />
                        <Route path="/contato" element={<Contato />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </C.Content>
                <C.SocialBar>
                    <a href='https://wa.me/5584996501098' target='_blank' rel="noreferrer"><C.SocialIcon src={WhatsappIcon} /></a>
                    <a href='https://www.linkedin.com/in/erickallansilva/' target='_blank' rel="noreferrer"><C.SocialIcon src={LinkedinIcon} /></a>
                    <a href='mailto:erickallann@gmail.com' target='_blank' rel="noreferrer"><C.SocialIcon src={EmailIcon} /></a>
                    <a href='https://github.com/erickallandev' target='_blank' rel="noreferrer"><C.SocialIcon src={GitHubIcon} /></a>
                </C.SocialBar>
                <C.MenuScreen menuOn={menuOn}>
                    <C.closeIcon src={closeIcon} menuOn={menuOn} onClick={handleClickMenu}></C.closeIcon>


                    <C.Item onClick={handleClickMenu}><C.StyledLink to='/'>Início</C.StyledLink></C.Item>
                    <C.Item onClick={handleClickMenu}><C.StyledLink to='/sobre'>Sobre</C.StyledLink></C.Item>
                    <C.Item onClick={handleClickMenu}><C.StyledLink to='/portfolio'>Portfólio</C.StyledLink></C.Item>
                    <C.Item onClick={handleClickMenu}><C.LinkA href={ResumeFile} download>Currículo</C.LinkA></C.Item>
                    <C.Item onClick={handleClickMenu}><C.StyledLink to='/contato'>Contato</C.StyledLink></C.Item>


                </C.MenuScreen>
            </C.Screen>
        </C.Container>
    );
}

export default App;