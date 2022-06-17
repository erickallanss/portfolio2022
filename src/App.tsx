
import * as C from './styled';
import logoPng from './assets/images/icons/logodev.svg';
import WhatsappIcon from './assets/images/icons/icon1.png';
import TwitterIcon from './assets/images/icons/icon3.png';
import InstagramIcon from './assets/images/icons/icon4.png'
import EmailIcon from './assets/images/icons/icon7.png'
import LinkedinIcon from './assets/images/icons/icon11.png'
import GitHubIcon from './assets/images/icons/icon10.png'
import UpArrowIcon from './assets/images/icons/up-arrow.png'
import imageHome1 from './assets/images/image2.svg';
import { useState, useEffect } from 'react';




const App = () => {

    const [scrollChanges, setScrollChanges] = useState(false);

    useEffect(function () {
        function scrollPosition() {
            if (window.scrollY > 200) {
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
                <C.Mainbar scrollChanges={scrollChanges}>
                    <C.logo scrollChanges={scrollChanges}>
                        <C.logoImg scrollChanges={scrollChanges} src={logoPng}></C.logoImg>
                    </C.logo>
                    <C.Buttons scrollChanges={scrollChanges}>
                        <C.ButtonMenu>Início</C.ButtonMenu>
                        <C.ButtonMenu onClick={() => window.scrollTo(0, 900)}>Sobre</C.ButtonMenu>
                        <C.ButtonMenu onClick={() => window.scrollTo(0, 1662)}>Serviços</C.ButtonMenu>
                        <C.ButtonMenu onClick={() => window.scrollTo(0, 2421)}>Portfólio</C.ButtonMenu>
                        <C.ButtonMenu onClick={() => window.scrollTo(0, 3183)}>Contato</C.ButtonMenu>
                    </C.Buttons>
                </C.Mainbar>
                <C.BodyContent>
                    <C.Sidebar>
                        <C.MediaIcon scrollChanges={scrollChanges}>
                            <a href='https://wa.me/5584996501098' rel="noreferrer" target='_blank'><C.MediaIconImg src={WhatsappIcon} /></a>
                        </C.MediaIcon>
                        <C.MediaIcon scrollChanges={scrollChanges}>
                            <a href='mailto:erickallann@gmail.com' rel="noreferrer" target='_blank'><C.MediaIconImg src={EmailIcon} /></a>
                        </C.MediaIcon>
                        <C.MediaIcon scrollChanges={scrollChanges}>
                            <a href='https://twitter.com/allansantosdev' rel="noreferrer" target='_blank'><C.MediaIconImg src={TwitterIcon} /></a>
                        </C.MediaIcon>
                        <C.MediaIcon scrollChanges={scrollChanges}>
                            <a href='https://instagram.com/erickallann' rel="noreferrer" target='_blank'><C.MediaIconImg src={InstagramIcon} /></a>
                        </C.MediaIcon>
                        <C.MediaIcon scrollChanges={scrollChanges}>
                            <a href='https://github.com/erickallandev' rel="noreferrer" target='_blank'><C.MediaIconImg src={GitHubIcon} /></a>
                        </C.MediaIcon>
                        <C.MediaIcon scrollChanges={scrollChanges}>
                            <a href='https://www.linkedin.com/in/erickallansilva/' rel="noreferrer" target='_blank'><C.MediaIconImg src={LinkedinIcon} /></a>
                        </C.MediaIcon>
                    </C.Sidebar>
                    <C.Content>
                        <C.UpArrow onClick={() => window.scrollTo(0, 0)} scrollChanges={scrollChanges}>
                            <C.UpArrowImg src={UpArrowIcon}/>
                        </C.UpArrow>
                        <C.ContentHome>
                            <C.image1 src={imageHome1}></C.image1>
                            <C.saudacao>Olá! Eu sou o Erick, desenvolvedor WEB.</C.saudacao>
                        </C.ContentHome>
                        <C.ContentAbout>bbbbb</C.ContentAbout>
                        <C.ContentServices>ccccc</C.ContentServices>
                        <C.ContentPortfolio>ddddd</C.ContentPortfolio>
                        <C.ContentContact>eeeee</C.ContentContact>
                    </C.Content>
                </C.BodyContent>
                <C.Footer> Copyright © 2022 EA WebDev - Desenvolvido por Erick Allan Silva </C.Footer>
            </C.Screen>
        </C.Container>
    );
}

export default App;