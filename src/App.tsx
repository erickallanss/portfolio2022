
import * as C from './styled'
import CurriculumFile from './Resume - Erick Allan Silva.pdf';
import logoPng from './assets/images/icons/logodev.svg'
import WhatsappIcon from './assets/images/icons/icon1.png'
import EmailIcon from './assets/images/icons/icon7.png'
import LinkedinIcon from './assets/images/icons/icon11.png'
import GitHubIcon from './assets/images/icons/icon10.png'
import HTMLIcon from './assets/images/icons/icon12.png'
import CSSIcon from './assets/images/icons/icon13.png'
import BootstrapIcon from './assets/images/icons/icon14.png'
import JSIcon from './assets/images/icons/icon15.png'
import TSIcon from './assets/images/icons/icon16.png'
import ReactJSIcon from './assets/images/icons/icon17.png'
import SassIcon from './assets/images/icons/icon18.png'
import FigmaIcon from './assets/images/icons/icon19.png'
import GitIcon from './assets/images/icons/icon20.png'
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
import Project1Photo from './assets/images/project1.jpg'
import Project2Photo from './assets/images/project2.jpg'
import Project3Photo from './assets/images/project3.jpg'
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
                        <C.ButtonMenu onClick={() => window.scrollTo(0, 1107.1999)}>Sobre</C.ButtonMenu>
                        <C.ButtonMenu onClick={() => window.scrollTo(0, 2036.8)}>Portfólio</C.ButtonMenu>
                        <C.ButtonMenu><C.link href={CurriculumFile} download>Currículo</C.link></C.ButtonMenu>
                        <C.ButtonMenu onClick={() => window.scrollTo(0, 4396)}>Contato</C.ButtonMenu>
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
                            <a href='https://github.com/erickallandev' rel="noreferrer" target='_blank'><C.MediaIconImg src={GitHubIcon} /></a>
                        </C.MediaIcon>
                        <C.MediaIcon scrollChanges={scrollChanges}>
                            <a href='https://www.linkedin.com/in/erickallansilva/' rel="noreferrer" target='_blank'><C.MediaIconImg src={LinkedinIcon} /></a>
                        </C.MediaIcon>
                    </C.Sidebar>
                    <C.Content>
                        <C.UpArrow onClick={() => window.scrollTo(0, 0)} scrollChanges={scrollChanges}>
                            <C.UpArrowImg src={UpArrowIcon} />
                        </C.UpArrow>
                        <C.ContentHome>
                            <C.image1 src={imageHome1}></C.image1>
                            <C.Typing>EA Web Development</C.Typing>
                        </C.ContentHome>
                        <C.ContentAbout>
                            <C.Typing>
                                Olá! Eu sou o Erick Allan.
                            </C.Typing>
                            <C.CompText>
                                Sou um entusiasta do uso de tecnologias em geral, especialmente para resolver problemas cotidianos. O desenvolvimento de websites e sistemas Web tem o poder de impusionar os mais variados tipos de negócios do mercado. Quer impulsionar o seu negócio? Precisa expandir a visibilidade dos seus produtos? Precisa atrair mais clientes? Tudo isso pode ser alcançado através do uso de tecnologias Web, e eu estou aqui para te ajudar com isso.
                            </C.CompText>
                            <C.CompText>
                                Atualmente eu desenvolvo utilizando tecnologias como HTML5, CSS3, Bootstrap, Javascript, Typescript, ReactJS, Tailwind CSS, CSS Modules, Styled Components e SASS. Também utilizo Whimsical e Figma para o planejamento e desenho dos projetos, além de Git e GitHub para versionamento de código.
                            </C.CompText>
                            <C.AboutLogos>
                                <C.AboutLogoCircle>
                                    <C.AboutLogoImg src={HTMLIcon} alt='' />
                                </C.AboutLogoCircle>
                                <C.AboutLogoCircle>
                                    <C.AboutLogoImg src={CSSIcon} alt='' />
                                </C.AboutLogoCircle>
                                <C.AboutLogoCircle>
                                    <C.AboutLogoImg src={BootstrapIcon} alt='' />
                                </C.AboutLogoCircle>
                                <C.AboutLogoCircle>
                                    <C.AboutLogoImg src={JSIcon} alt='' />
                                </C.AboutLogoCircle>
                            </C.AboutLogos>
                            <C.AboutLogos>
                                <C.AboutLogoCircle>
                                    <C.AboutLogoImg src={TSIcon} alt='' />
                                </C.AboutLogoCircle>
                                <C.AboutLogoCircle>
                                    <C.AboutLogoImg src={ReactJSIcon} alt='' />
                                </C.AboutLogoCircle>
                                <C.AboutLogoCircle>
                                    <C.AboutLogoImg src={FigmaIcon} alt='' />
                                </C.AboutLogoCircle>
                                <C.AboutLogoCircle>
                                    <C.AboutLogoImg src={SassIcon} alt='' />
                                </C.AboutLogoCircle>
                                <C.AboutLogoCircle>
                                    <C.AboutLogoImg src={GitIcon} alt='' />
                                </C.AboutLogoCircle>
                            </C.AboutLogos>
                        </C.ContentAbout>

                        <C.ContentPortfolio>
                            <C.Typing>
                                Projetos desenvolvidos
                            </C.Typing>
                            <C.DevelopedProject>
                                <C.ProjectScreen>
                                    <a target='_blank' href='https://eatodolist.netlify.app'>
                                        <C.ProjectPhoto src={Project1Photo} alt='' />
                                    </a>
                                </C.ProjectScreen>
                                <C.ProjectDescription>
                                    <C.ProjectTitle>
                                        <C.link target='_blank' href='https://eatodolist.netlify.app'>To-Do List </C.link>
                                    </C.ProjectTitle>
                                    <C.ProjectDescriptionText>
                                        Projeto de to-do list desenvolvido com ReactJS. Através da aplicação web é possível adicionar novos ítens à lista, marcá-los como feito, desmarcá-los ou excluí-los. Essa to-do list pode ser útil para listar as atividades pendentes do dia e controlá-las à medida que forem sendo concluídas.
                                    </C.ProjectDescriptionText>
                                    <C.ProjectUsedTechnologies>
                                        HTML5, CSS3, ReactJS, Styled-Components, Typescript.
                                    </C.ProjectUsedTechnologies>
                                </C.ProjectDescription>
                            </C.DevelopedProject>
                            <C.ButtonNextProject onClick={() => window.scrollTo(0, 2840)}>Próximo projeto</C.ButtonNextProject>

                            <C.ButtonPreviousProject onClick={() => window.scrollTo(0, 2040)}>Projeto anterior</C.ButtonPreviousProject>
                            <C.DevelopedProject>
                                <C.ProjectScreen>
                                    <a target='_blank' href='https://easorteieumapessoa.netlify.app'>
                                        <C.ProjectPhoto src={Project2Photo} alt='' />
                                    </a>
                                </C.ProjectScreen>
                                <C.ProjectDescription>
                                    <C.ProjectTitle>
                                        <C.link target='_blank' href='https://easorteieumapessoa.netlify.app'> Sorteie uma pessoa </C.link>
                                    </C.ProjectTitle>
                                    <C.ProjectDescriptionText>
                                    Sorteie uma pessoa é um projeto desenvolvido em ReactJS, Typescript e Styled Components. A aplicação tem como objetivo cadastrar nomes de indivíduos que participarão de um sorteio, deletar nomes da lista do sorteio e realizar o sortear de um desses indivíduos aleatoriamente, retornando o nome do sortudo. 
                                    </C.ProjectDescriptionText>
                                    <C.ProjectUsedTechnologies>
                                    ReactJS, Typescript, Styled Components.
                                    </C.ProjectUsedTechnologies>
                                </C.ProjectDescription>
                            </C.DevelopedProject>
                            <C.ButtonNextProject onClick={() => window.scrollTo(0, 3640)}>Próximo projeto</C.ButtonNextProject>

                            <C.ButtonPreviousProject onClick={() => window.scrollTo(0, 2840)}>Projeto anterior</C.ButtonPreviousProject>
                            <C.DevelopedProject>
                            <C.ProjectScreen>
                                    <a target='_blank' href='https://eaficticiawebsite.netlify.app'>
                                        <C.ProjectPhoto src={Project3Photo} alt='' />
                                    </a>
                                </C.ProjectScreen>
                                <C.ProjectDescription>
                                <C.ProjectTitle>
                                        <C.link target='_blank' href='https://eaficticiawebsite.netlify.app'>Fictícia Technologies </C.link>
                                    </C.ProjectTitle>
                                    <C.ProjectDescriptionText>
                                        Trata-se do website de uma empresa fictícia de nome "Fictícia", do ramo de tecnologias. O site foi desenvolvido para fins de treinamento e aprendizado sobre a atualização do Bootstrap. 
                                    </C.ProjectDescriptionText>
                                    <C.ProjectUsedTechnologies>
                                        HTML5, CSS3, Javascript, Bootstrap.
                                    </C.ProjectUsedTechnologies>
                                </C.ProjectDescription>
                            </C.DevelopedProject>

                        </C.ContentPortfolio>
                        <C.ContentContact>
                            <C.Typing>
                                Vamos conversar sobre o seu projeto?
                            </C.Typing>
                            <C.linkWhatsapp href='https://wa.me/5584996501098' rel="noreferrer" target='_blank'>
                                <C.CompContato>
                                    <C.BarraSup>
                                        <C.CompartSup>
                                            <C.SupIconDiv>
                                                <C.SupIconImg src={LeftIcon} />
                                            </C.SupIconDiv>
                                            <C.SupLogoDiv>
                                                <C.SupLogoImg src={logoPng} />
                                            </C.SupLogoDiv>
                                            <C.SupTextDiv>
                                                <C.SupTextbold>EAWebDev</C.SupTextbold>
                                                <C.SupTextNormal>Online</C.SupTextNormal>
                                            </C.SupTextDiv>
                                        </C.CompartSup>
                                        <C.CompartSup>
                                            <C.SupIconDiv>
                                                <C.SupIconImg src={CamIcon} />
                                            </C.SupIconDiv>
                                            <C.SupIconDiv>
                                                <C.SupIconImg src={TelIcon} />
                                            </C.SupIconDiv>
                                            <C.SupIconDiv>
                                                <C.SupIconImg src={MoreIcon} />
                                            </C.SupIconDiv>
                                        </C.CompartSup>
                                    </C.BarraSup>
                                    <C.TelaConv>
                                        <C.TelaCompSup>
                                            <C.telaConvTexto>Olá! Tudo bem? Clique aqui para entrar em contato via Whatsapp.</C.telaConvTexto>
                                            <C.TelaConvHora>19:05</C.TelaConvHora>
                                        </C.TelaCompSup>
                                        <C.TelaCompInf>
                                            <C.TelaInfType>
                                                <C.iconType>
                                                    <C.iconTypeImg src={SmileIcon} />
                                                </C.iconType>
                                                <C.textType>Digite sua mensagem</C.textType>
                                                <C.iconType>
                                                    <C.iconTypeImg src={ClipIcon} />
                                                </C.iconType>
                                                <C.iconType>
                                                    <C.iconTypeImg src={CameraIcon} />
                                                </C.iconType>
                                            </C.TelaInfType>
                                            <C.TelaInfRecord>
                                                <C.recordImg src={MicIcon} />
                                            </C.TelaInfRecord>
                                        </C.TelaCompInf>
                                    </C.TelaConv>
                                    <C.BarraInf>
                                        <C.divButtons>
                                            <C.imgButtons src={LeftArrowIcon} alt='' />
                                        </C.divButtons>
                                        <C.divButtons>
                                            <C.imgButtons src={CircleIcon} alt='' />
                                        </C.divButtons>
                                        <C.divButtons>
                                            <C.imgButtons src={SquareIcon} alt='' />
                                        </C.divButtons>
                                    </C.BarraInf>
                                </C.CompContato>
                            </C.linkWhatsapp>
                        </C.ContentContact>
                    </C.Content>
                </C.BodyContent>
                <C.Footer> Copyright © 2022 - EA WebDev </C.Footer>
            </C.Screen>
        </C.Container>
    );
}

export default App;