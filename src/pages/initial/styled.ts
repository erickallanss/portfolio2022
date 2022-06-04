import styled from 'styled-components';
import bg1 from '../../assets/images/background1.jpg';


export const Container = styled.div`
    background-color: #000;
    color: #F4F4F9;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    z-index: 0;
    justify-content: center;
    align-items: center;
`;

export const background = styled.div`
    background-image: url(${bg1});
    background-size: 100vw 100vh;
    filter: brightness(20%);
    width: 100vw;
    height: 100vh;
    position: absolute;
`;

export const logo = styled.div`
    border-radius: 50%;
    padding: 20px;
    margin-top: 30px;

`;

export const logoImg = styled.img`
    margin-bottom: 0;
    opacity: 1;
    width: 100px;
    filter: brightness(1);

`;

export const screen1 = styled.div`
    flex: 2;
    filter: brightness(1);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 0;
`;

export const saudacao = styled.h1`
    font-size: 40px;
    margin-top: 60px;
    text-align: center;
    overflow: hidden;
    border-right: .15em solid rgb(255, 255, 255);
    white-space: nowrap;
    letter-spacing: .10em;
    animation: 
    typing 2s steps(70, end),
    blink-caret .75s step-end infinite;
    padding: 5px;
    color: white;
    cursor: text;
        @keyframes typing {
            from { width: 0 }
            to { width: 60% }
        }
        
        /* The typewriter cursor effect */
        @keyframes blink-caret {
            from, to { border-color: transparent }
            50% { border-color:rgb(255, 255, 255) }
        }
`;

export const screen2 = styled.div`
    flex: 1;
    filter: brightness(1);
    width: 100%;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    transition: 0.3s;
    opacity: 1;
    :hover h3{
        text-shadow: 0 0 20px white;
        color: rgba(255, 255, 255);
        transition: 0.3s;
    }
    :hover img {
        width: 60px;
        opacity: 1;
        margin-top: 0px;
    }
`;

export const textscreen = styled.h3`
font-size: 28px;
color: rgba(255, 255, 255, 0.3);
margin-bottom: 10px;
margin-top: 10px;
    a {
        text-decoration: none;
        color: inherit;
    }
`;

export const arrowimg = styled.img`
    width: 30px;
    filter: invert(100%);
    opacity: 0.3;
    transition: 0.3s;
    margin-bottom: -50px;
`;