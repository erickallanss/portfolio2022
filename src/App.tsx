
import * as C from './styled';
import logoPng from './assets/images/icons/logodev.svg';
import arrow from './assets/images/icons/down-arrow.png';
import WhatsappIcon from './assets/images/icons/icon1.png';
import TwitterIcon from './assets/images/icons/icon3.png';
import InstagramIcon from './assets/images/icons/icon4.png'
import EmailIcon from './assets/images/icons/icon7.png'
import imageHome1 from './assets/images/image2.svg';
import { useState, useEffect } from 'react';



const App = () => {


    return (
        <C.Container>
            <C.Screen>
                <C.Mainbar>
                    <C.logo><C.logoImg src={logoPng}></C.logoImg></C.logo>
                    <C.Buttons>
                        <C.ButtonMenu>Início</C.ButtonMenu>
                        <C.ButtonMenu>Sobre</C.ButtonMenu>
                        <C.ButtonMenu>Serviços</C.ButtonMenu>
                        <C.ButtonMenu>Portfólio</C.ButtonMenu>
                        <C.ButtonMenu>Contato</C.ButtonMenu>
                    </C.Buttons>
                </C.Mainbar>
                <C.BodyContent>
                    <C.Sidebar>
                        <C.MediaIcon>
                            <a href='https://wa.me/5584996501098' rel="noreferrer" target='_blank'><C.MediaIconImg src={WhatsappIcon} /></a>
                        </C.MediaIcon>
                        <C.MediaIcon>
                            <a href='mailto:erickallann@gmail.com' rel="noreferrer" target='_blank'><C.MediaIconImg src={EmailIcon} /></a>
                        </C.MediaIcon>
                        <C.MediaIcon>
                            <a href='https://twitter.com/allansantosdev' rel="noreferrer" target='_blank'><C.MediaIconImg src={TwitterIcon} /></a>
                        </C.MediaIcon>
                        <C.MediaIcon>
                            <a href='https://instagram.com/erickallann' rel="noreferrer" target='_blank'><C.MediaIconImg src={InstagramIcon} /></a>
                        </C.MediaIcon>
                    </C.Sidebar>
                    <C.Content className='Content'>
                        <C.ContentHome>
                            <C.image1 src={imageHome1}></C.image1>
                            <C.saudacao>Olá! Eu sou o Erick, desenvolvedor WEB.</C.saudacao>
                        </C.ContentHome>
                        <C.ContentAbout>bbbbb</C.ContentAbout>
                        <C.ContentServices>cccc</C.ContentServices>
                        <C.ContentServices>ddddd</C.ContentServices>
                        <C.ContentContact>eeeee</C.ContentContact>
                    </C.Content>
                </C.BodyContent>
            </C.Screen>
        </C.Container>
    );
}

export default App;