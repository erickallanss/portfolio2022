import * as C from './Home.styled';
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
import Image from '../assets/images/Image_Erick3d2.png';
import TypewriterComponent from 'typewriter-effect';
import { useEffect, useState } from 'react';

export const Home = () => {
    // Estado para controlar a visibilidade da div
    const [showDiv, setShowDiv] = useState(false);

    return (
        <C.SobreContent>
            <C.ContentHeader>
                <TypewriterComponent
                    onInit={(typewriter) => {
                        typewriter.typeString('<span style="color: #F9A826; font-weight: bold;">Olá, seja bem vindo!</span>')
                            .pauseFor(200)
                            .start()
                            .typeString('<br /><span style="color: #FFF; font-weight: bold;">Eu sou o Erick, desenvolvedor de software.</span>')
                            .pauseFor(100)
                            .callFunction(() => {
                                setShowDiv(true); // Ativa a exibição da div após a conclusão do Typewriter
                            });

                    }}
                    options={{
                        autoStart: true,
                        loop: false,
                    }}
                />
                    <div
                        style={{
                            transition: 'opacity 2s ease-in',
                            marginTop: '60px',
                            marginBottom: '60px',
                            color: 'white',
                            fontWeight: 'normal',
                            fontSize: '1.2rem',
                            opacity: showDiv ? 1 : 0,
                        }}
                    >
                        Trabalho com Javascript, Typescript, React.js, Node.js, Express.js, Python, Django, Django REST, Docker, bancos relacionais e não relacionais, entre outras tecnologias, e estou sempre à procura de novos desafios no âmbito do desenvolvimento de software.</div>

            </C.ContentHeader>
            <C.ContentAndPhoto>
                <C.ContentText>

                </C.ContentText>
                <C.ImageDiv style={{transition: 'opacity 2s ease-in', opacity: showDiv ? 1 : 0}}>
                    <C.Image src={Image} alt='' />
                </C.ImageDiv>
            </C.ContentAndPhoto>

        </C.SobreContent>
    );
}