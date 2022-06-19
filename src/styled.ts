import styled from 'styled-components';
import whatsbg from './assets/images/whatsbg.png';

type Props = {
    scrollChanges: boolean;
}

export const Container = styled.div`
    max-width: 100vw;
    background-color: #00000f;
    background-size: cover;
    box-sizing: border-box;
`;

export const Screen = styled.div`
    width: 1400px;
    margin: 0 auto;
`;

export const Mainbar = styled.nav(({scrollChanges}:Props) => (`
    width: inherit;
    height: 12vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 20px;
    position: fixed;
`));

export const Buttons = styled.div(({scrollChanges}:Props) => (`
    display: ${scrollChanges? 'none' : 'flex'};
    transition: 0.3s;
    :last-child {
        padding-right: 50px;
    }
`));


export const logo = styled.div(({scrollChanges}:Props)=>(`
    border-radius: 50%;
    transition: 0.3s;
    padding: 20px;
    margin-top: ${scrollChanges? '-100px' : '20px'};
    cursor: pointer;
`));

export const logoImg = styled.img(({scrollChanges}:Props)=>(`
    margin-bottom: 0;
    transition: 0.3s;
    margin-top: 100px;
    opacity: 1;
    width: ${scrollChanges? '70px' : '200px'};
    filter: brightness(1);
    transform: rotate(-10deg);
    cursor: pointer;
`));

export const ButtonMenu = styled.div`
    padding: 10px 20px;
    background-color: #00000f;
    color: #fff;
    border-radius: 10px;
    margin-left: 20px;
    cursor: pointer;
    border: 2px solid #fff;
    text-transform: uppercase;
    :hover {
        color: #000;
        background-color: rgb(249,168,38);
        border: 2px solid rgb(249,168,38);
        box-shadow: 0 0 10px rgb(249,168,38);
    }
`;

export const BodyContent = styled.div`
    display: flex;
`;

export const Sidebar = styled.aside`
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: column;
    height: 100vh;
    position: fixed;
`;

export const UpArrow = styled.div(({scrollChanges}:Props) => (`
    display: ${scrollChanges? 'flex' : 'none'};
    justify-content: center;
    align-items: center;
    position: fixed;    
    width: 60px;
    height: 60px;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 30px;
    bottom: 30px;
    right: 30px;
    cursor: pointer;
        :hover {
            box-shadow: 0 0 5px #FFF;
            background-color: #FFF;
        }
`));

export const UpArrowImg = styled.img`

`;

export const MediaIcon = styled.div(({scrollChanges}:Props) => (`
    width: ${scrollChanges? '30px' : '50px'};
    margin-left: auto;
    margin-right: auto;
    cursor: pointer;
    margin-top: 5px;
    margin-bottom: 5px;
    transition: 0.3s;
        :last-child {
            padding-bottom: 30px;
        }
        :hover {
            transform: scale(2);
            margin-bottom: 15px;
            margin-top: 15px;
        }
        :last-child:hover {
            margin-top: 30px;
            margin-bottom: 0;
        }
`));

export const MediaIconImg = styled.img`
    width: 100%;
    filter: invert(100%);
`;

export const Content = styled.div`
    margin-top: 12vh;
    margin-left: auto;
    margin-right: 0;
    width: calc(100% - 100px);
`;

export const ContentHome = styled.div`
    display: flex;
    padding-top: 50px;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin: auto 0;
    height: 100vh;
    width: 100%;
    color: #f9a826;
    padding-bottom: 200px;
`;

export const image1 = styled.img`
    opacity: 1;
    width: 500px;
`;

export const ContentAbout = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100%;
    padding-bottom: 200px;
    text-align: center;
    align-items: center;
`;

export const CompHeader = styled.h2`~
    text-align: center;
    margin: 0 50px;
    color: #f9a826;
    font-size: 50px;
    text-align: center;
    padding-top: 50px;
    padding-bottom: 50px;
`;

export const CompText = styled.p`
    text-align: justify;
    margin: 25px 50px;
    margin-top: 0;
    color: #FFFFFF;
    font-size: 20px;
`;

export const AboutLogos = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 20px;
`;

export const AboutLogoCircle = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50px;
    background-color: #FFF;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 20px;
    cursor: pointer;
        :hover {
            box-shadow: 0 0 50px #FFFFFF;
        }
`;

export const AboutLogoImg = styled.img`
    width: 50px;
`;

export const DevelopedProject = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ButtonNextProject = styled.div`
    background-color: #00000f;
    border: 2px solid #FFF;
    color: #FFF;
    padding 20px 40px;
    border-radius: 30px;
    margin-bottom: 200px;
    transition: 0.3;
    cursor: pointer;
    font-size: 18px;
    margin-top: 50px;
        :hover {
            background-color: #FFF;
            color: #00000F;
            box-shadow: 0 0 5px #FFF;
        }
`;

export const ButtonPreviousProject = styled.div`
    background-color: #00000f;
    border: 2px solid #FFF;
    color: #FFF;
    padding 20px 40px;
    border-radius: 30px;
    transition: 0.3;
    cursor: pointer;
    font-size: 18px;
    margin-bottom: 50px;
        :hover {
            background-color: #FFF;
            color: #00000F;
            box-shadow: 0 0 5px #FFF;
        }
`;

export const ProjectScreen = styled.div`
    border: 1px solid #FFF;
    width: 500px;
    height: 300px;
    margin: 20px;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const ProjectDescription = styled.div`
    width: 500px;
    height: 300px;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    text-align: justify;
    font-size: 18px;
    margin-left: 30px;
`;

export const ProjectTitle = styled.h2`
    text-transform: uppercase;
    margin: 0;
    padding: 0;
`;

export const ProjectDescriptionText = styled.div`

`;

export const ProjectUsedTechnologies = styled.div`

`;

export const ContentPortfolio = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    color: #000F;
    align-items: center;
    padding-bottom: 200px;
`;

export const ContentContact = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    width: 100%;
    color: #000;
    align-items: center;
    padding-bottom: 200px;
`;

export const CompContato = styled.div`
    display: flex;
    flex-direction: column;
    width: 350px;
    height: 500px;
    border-radius: 20px;
    border: 3px solid #FFF;
    box-shadow: 0 0 3px #FFF;
    transition: 0.3s;
    justify-content: center;
    background-color: #FFF;
        :hover {
            box-shadow: 0 0 20px #FFF;
        }
`;

export const BarraSup = styled.div`
    background-color: #075E54;
    display: flex;
    flex: 1;
    border-radius: 20px 20px 0 0;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
`;

export const CompartSup = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;
`;

export const SupIconDiv = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 15px;
    filter: invert(100%);
    display: flex;
    justify-content: center;
    align-items: center;
        :nth-child(2) {
            margin-left: 10px;
            transform: scale(0.9);
        }
`;

export const SupIconImg = styled.img`
    width: 80%;
`;

export const SupLogoImg = styled.img`
    width: 80%;
    filter: invert(100%);
`;

export const SupLogoDiv = styled.div`
    width: 40px;
    margin: 0 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FFF;
    height: 40px;
    border-radius: 20px;
`;

export const SupTextDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 13px;
`;

export const SupTextbold = styled.div`
    font-weight: bold;
    color: #FFF;
`;

export const SupTextNormal = styled.div`
    color: #FFF;
`;

export const TelaConv = styled.div`
    background-image: url(${whatsbg});
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 8;
`;

export const TelaCompSup = styled.div`
    background-color: rgba( 255, 255, 255, 0.8);
    margin-top: 30px;
    margin-left: 5px;
    width: 250px;
    opacity: 0.8;
    height: 40px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 10px;
`;

export const telaConvTexto = styled.div`
    color: #000;
    font-size: 14px;
`;

export const linkWhatsapp = styled.a`
    text-decoration: none;
`;

export const TelaConvHora = styled.div`
    color: #000;
    font-size: 9px;
    margin-top: 30px;
`;

export const TelaCompInf = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
`;

export const TelaInfType = styled.div`
    flex: 1;
    background-color: #FFF;
    border-radius: 10px;
    height: 40px;
    margin-left: 10px;
    margin-bottom: 10px;
    box-shadow: 1px 1px 3px #FFF;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const iconType = styled.div`
    width: 35px;
    height: 35px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
        :nth-child(3) {
            transform: scale(0.8);
        }
`;

export const iconTypeImg = styled.img`
    width: 60%;
    opacity: 0.5;
`;

export const textType = styled.div`
    display: flex;
    align-items: center;
    font-size: 16px;
    padding: 5px 0px;
    opacity: 0.7;
    margin: 0 5px;
`;

export const TelaInfRecord = styled.div`
    width: 35px;
    height: 35px;
    border-radius: 20px;
    background-color: #075E54;
    margin-right: 10px;
    margin-left: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
`;

export const recordImg = styled.img`
    width: 60%;
    filter: invert(100%);

`;

export const BarraInf = styled.div`
    background-color: #000000;
    display: flex;
    flex: 1;
    border-radius: 0 0 20px 20px;
    align-items: center;
    padding: 5px;
    padding-left: 60px;
`;

export const divButtons = styled.div`
    height: 30px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-betweeen;
        :nth-child(1) {
            margin-left: 5px;
        }
        :nth-child(3) {
            transform: scale(0.9);
        }
`;

export const imgButtons = styled.img`
    filter: invert(100%);
    height: 80%;
`;



export const Whatsappdiv = styled.div`
    width: 50px;
    display: flex;
    justify-content: center;
    aling-items: center;
    border-radius: 25px;
    border-bottom-radius: 20px;
`;

export const WhatsappLogo = styled.img`
    width: 100%;
`;

export const ContatoLink = styled.a`
    text-decoration: none;
    color: #000000;
`;

export const Typing = styled.h1`
    font-size: 50px;
    margin-top: 60px;
    margin-bottom: 80px;
    text-align: center;
    overflow-x: hidden;
    overflow-y: hidden;
    border-right: .15em solid rgb(249,168,38);
    white-space: nowrap;
    letter-spacing: .10em;
    animation: 
    typing 1s steps(70, end),
    blink-caret .75s step-end infinite;
    padding: 5px;
    color: #f9a826;
    cursor: text;

        @keyframes typing {
            from { width: 0 }
            to { width: 50% }
        }
        
        /* The typewriter cursor effect */
        @keyframes blink-caret {
            from, to { border-color: transparent }
            50% { border-color:rgb(249,168,38) }
        }
`;

export const Footer = styled.div`
    padding: 20px;
    color: #FFF;
    text-align: center;
`;