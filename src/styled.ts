import styled from 'styled-components';
import whatsbg from './assets/images/whatsbg.png';
import { Link } from 'react-router-dom';

type PropsMenu = {
    menuOn: boolean;
}

type MenuActive = {
    isActive?: boolean
}

export const Container = styled.div`
    background-color: #00000F;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
`;

export const Screen = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const MainBar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    width: 100%;
    background-color: #00000F;
    height: 100px;
`;

export const Logo = styled.img`
    min-height: 50px;
    max-height: 60px;
    height: 15vw;
    margin-left: 30px;
    cursor: pointer;
    transition: 0.3s;
        @media (min-width: 1024px) {
            max-height: 180px;
            margin-top: 8%;
            width: 15vw;
        }
`;

export const MenuIcon = styled.img`
    min-height: 30px;
    max-height: 40px;
    height: 15vw;
    margin-right: 30px;
        @media (min-width: 1024px) {
            display: none;
        }
`;

export const Menu = styled.div`
    display: none;
    margin-right: 50px;
        @media (min-width: 1024px) {
            display: flex;
        }
`;

export const MenuItem = styled.div(({ isActive }: MenuActive ) => (`
    color: ${isActive ? '#F9A826' : '#FFF'};
    font-size: 1.1rem;
    padding: 10px 20px;
    margin: 5px;
    text-transform: uppercase;
    border-bottom: ${isActive ? '1px solid #F9A826' : '1px solid #00000F'};
    cursor: pointer;
    font-weight: 500;
        :hover {
            border-bottom: 1px solid #F9A826;
            color: #F9A826;
        }
`));

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 10vh auto;
    width: 80vw;
    background-color: #00000f;
    min-height: 80vh;
        @media (min-width: 1024px) {
            width: 80vw;
            min-height: calc(100vh - 25vh - 4px);
            margin-left: 10vw;
        }
`;

export const SocialBar = styled.div`
    height: 100px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    position: fixed;
    bottom: 0;
    background-color: #00000f;
    width: 100%;
    @media (min-width: 1024px) {
        flex-direction: column;
        height: 80%;
        width: 100px;
        left: 0px;
        margin-left: 30px;
        margin-bottom: 30px;
        justify-content: flex-end;
        background-color: transparent;
        }
    `;

export const SocialIcon = styled.img`
    min-width: 50px;
    width: 7vh;
    height: auto;
        @media (min-width: 1024px) {
            width: 5vh;
            transition: 0.2s;
            margin-bottom: 10px;
                :hover {
                transform: scale(1.4);
                margin-bottom: 15px;
                margin-top: 15px;
        }
        }
`;

export const MenuScreen = styled.div(({ menuOn }: PropsMenu) => (`
    background-color: rgba(0, 0, 0, 0.9);
    position: fixed;
    min-height: inherit;
    min-width: inherit;
    color: #FFFFFF;
    display: ${menuOn ? 'flex' : 'none'};
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    top: 0px;
    height: 100%;
    width: 100%;
`));

export const Item = styled.div`
    font-size: 2rem;
    font-weight: 600;
    text-transform: uppercase;
`;

export const closeIcon = styled.img(({menuOn}: PropsMenu) => (`
    position: fixed;
    height: 20px;
    top: 40px;
    right: 40px;
`));

export const StyledLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

export const LinkA = styled.a`
    color: #fff;
    text-decoration: none;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

export const Footer = styled.div`
    display: none;
    color: #FFF;
    text-align: center;
    transition: 0.3s;
        @media (min-width: 1024px) {
            display: flex;
            justify-content: center;
            margin-left: 10vw;
            padding: 10px;
            margin: 0 0 0 10vw;
        }
`;