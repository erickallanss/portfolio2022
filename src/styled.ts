import styled from 'styled-components';

type Props = {
    scrollChanges: boolean
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
    width: 80px;
    height: 80px;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 80px;
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
    transition: 0.3s;
        :last-child {
            padding-bottom: 30px;
        }
        :hover {
            transform: scale(1.5);
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
`;

export const image1 = styled.img`
    opacity: 1;
    width: 500px;
`;

export const ContentAbout = styled.div`
    display: block;
    height: 100vh;
    width: 100%;
    background-color: #FFF;
    color: #000F;
    background-color: #00f;
`;

export const ContentServices = styled.div`
    display: block;
    height: 100vh;
    width: 100%;
    color: #000F;
    background-color: #cf4;
`;

export const ContentPortfolio = styled.div`
    display: block;
    height: 100vh;
    width: 100%;
    color: #000F;
    background-color: #cff;
`;

export const ContentContact = styled.div`
    display: block;
    height: 100vh;
    width: 100%;
    color: #000F;
    background-color: #ff4;
`;

export const saudacao = styled.h1`
    font-size: 50px;
    margin-top: 60px;
    text-align: center;
    overflow-x: hidden;
    border-right: .15em solid rgb(249,168,38);
    white-space: nowrap;
    letter-spacing: .10em;
    animation: 
    typing 2s steps(70, end),
    blink-caret .75s step-end infinite;
    padding: 5px;
    color: #f9a826;
    cursor: text;
        @keyframes typing {
            from { width: 0 }
            to { width: 87% }
        }
        
        /* The typewriter cursor effect */
        @keyframes blink-caret {
            from, to { border-color: transparent }
            50% { border-color:rgb(249,168,38) }
        }
`;

export const Footer = styled.div`
    padding: 30px;
    color: #FFF;
    text-align: center;
`;