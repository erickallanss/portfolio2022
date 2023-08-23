import * as C from './Sobre.styled';
import HTMLIcon from '../assets/images/icons/icon12.png'
import CSSIcon from '../assets/images/icons/icon13.png'
import BootstrapIcon from '../assets/images/icons/icon14.png'
import JSIcon from '../assets/images/icons/icon15.png'
import TSIcon from '../assets/images/icons/icon16.png'
import ReactJSIcon from '../assets/images/icons/icon17.png'
import NodeIcon from '../assets/images/icons/nodejsIcon.png'
import SassIcon from '../assets/images/icons/icon18.png'
import FigmaIcon from '../assets/images/icons/icon19.png'
import GitIcon from '../assets/images/icons/icon20.png'
import Image from '../assets/images/ImageErick.png';

export const Sobre = () => {
    return (
        <C.SobreContent>
            <C.ContentHeader>
                Olá! <br/>Eu sou o Erick!
            </C.ContentHeader>
            <C.ContentAndPhoto>
                <C.ContentText>
                    Eu sou um entusiasta do uso de tecnologias em geral, especialmente na resolução de problemas e melhoria de processos. O desenvolvimento sistemas Web tem o poder de impusionar os mais variados tipos de negócios do mercado. Você quer impulsionar o seu negócio? Precisa expandir a visibilidade dos seus produtos? Precisa atrair mais clientes? Tudo isso pode ser alcançado através do uso de tecnologias Web, e eu estou aqui para te ajudar com isso.<br/><br/>
                    Atualmente eu desenvolvo utilizando tecnologias como Javascript, Typescript, NodeJS, ReactJS, Python, Django, bancos de dados relacionais e não relacionais, além de sempre ter por perto uma boa caneca de café.
                </C.ContentText>
                <C.ImageDiv>
                    <C.Image src={Image} alt='' />
                </C.ImageDiv>
            </C.ContentAndPhoto>
            <C.TechIcons>
                <C.TechIcon>
                    <C.IconImg src={HTMLIcon} alt='' />
                </C.TechIcon>
                <C.TechIcon>
                    <C.IconImg src={CSSIcon} alt='' />
                </C.TechIcon>
                <C.TechIcon>
                    <C.IconImg src={BootstrapIcon} alt='' />
                </C.TechIcon>
            </C.TechIcons>
            <C.TechIcons>
                <C.TechIcon>
                    <C.IconImg src={JSIcon} alt='' />
                </C.TechIcon>
                <C.TechIcon>
                    <C.IconImg src={TSIcon} alt='' />
                </C.TechIcon>
                <C.TechIcon>
                    <C.IconImg src={ReactJSIcon} alt='' />
                </C.TechIcon>
                <C.TechIcon>
                    <C.IconImg src={NodeIcon} alt='' />
                </C.TechIcon>
            </C.TechIcons>
            <C.TechIcons>
                <C.TechIcon>
                    <C.IconImg src={FigmaIcon} alt='' />
                </C.TechIcon>
                <C.TechIcon>
                    <C.IconImg src={SassIcon} alt='' />
                </C.TechIcon>
                <C.TechIcon>
                    <C.IconImg src={GitIcon} alt='' />
                </C.TechIcon>
            </C.TechIcons>
        </C.SobreContent>
    );
}