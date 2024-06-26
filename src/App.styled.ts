import styled from 'styled-components';
import { Link } from 'react-router-dom';

type PropsMenu = {
    menuOn: boolean;
}

type MenuActive = {
    isActive?: boolean
}

type Props = {
    scrollChanges: boolean
}

export const Container = styled.div`
    background-color: #00000F;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    min-height: 100vh;
    @media (min-width: 1024px) {
    }
`;

export const Screen = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const MainBar = styled.nav(({ scrollChanges }: Props) => (`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    width: 100%;
    height: 100px;
    transition: 0.3s;
    background-color: #00000F;
        @media (min-width: 1024px) {
            background-color: transparent;
        }
`));

export const Logo = styled.img(({ scrollChanges }: Props) => (`
    min-height: 40px;
    max-height: 50px;
    margin-left: 30px;
    cursor: pointer;
    transition: 0.3s;
        @media (min-width: 1024px) {
            max-height: 180px;
            margin-top: 2%;
            margin-left: ${scrollChanges ? '40px' : '30px'};
            width: ${scrollChanges ? '80px' : '5vw'};
        }
`));

export const MenuIcon = styled.img`
    min-height: 30px;
    max-height: 30px;
    height: 15vw;
    margin-right: 30px;
        @media (min-width: 1024px) {
            display: none;
        }
`;

export const Menu = styled.div(({ scrollChanges }: Props) => (`
    display: none;
    margin-right: 50px;
        @media (min-width: 1024px) {
            display: ${scrollChanges ? 'none' : 'flex'};
        }
`));

export const MenuItem = styled.div(({ isActive }: MenuActive) => (`
    color: ${isActive ? '#F9A826' : '#FFF'};
    font-size: 1.1rem;
    padding: 10px 20px;
    margin: 5px;
    text-transform: uppercase;
    border-bottom: ${isActive ? '3px solid #F9A826' : '3px solid #00000F'};
    cursor: pointer;
    font-weight: 800;
        :hover {
            border-bottom: 3px solid #F9A826;
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
    z-index: 100;
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

export const SocialIcon = styled.img(({ scrollChanges }: Props) => (`
    width: 40px;
    height: auto;
        @media (min-width: 1024px) {
            width: ${scrollChanges ? '2vw' : '3vw'};
            transition: 0.2s;
            margin-bottom: 10px;
                :hover {
                transform: scale(1.4);
                margin-bottom: 15px;
                margin-top: 15px;
        }
        }
`));

export const MenuScreen = styled.div(({ menuOn }: PropsMenu) => (`
    background-color: rgba(0, 0, 0, 0.95);
    position: fixed;
    min-height: inherit;
    min-width: inherit;
    color: #FFFFFF;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    top: 0px;
    bottom: 0;
    transition: 0.5s;
    left: ${menuOn ? '0' : '100vw'};
    height: 100%;
    width: 100%;
    z-index: 100;
`));

export const Item = styled.div`
    font-size: 1.5rem;
    font-weight: 600;
    text-transform: uppercase;
`;

export const closeIcon = styled.img(({ menuOn }: PropsMenu) => (`
    position: fixed;
    height: 20px;
    top: 40px;
    right: 40px;
    display: ${menuOn ? 'flex' : 'none'};
`));

export const StyledLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

export const StyledLinkOut = styled.a`
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

export const ArrowToTop = styled.div(({ scrollChanges }: Props) => (`
    display: none;
    justify-content: center;
    align-items: center;
    position: fixed;    
    width: 60px;
    height: 60px;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 30px;
    bottom: 30px;
    right: 30px;
    transition: 0.2s;
    cursor: pointer;
        :hover {
            box-shadow: 0 0 5px #FFF;
            background-color: #FFF;
        }
                @media (min-width: 1024px) {
                    display: ${scrollChanges ? 'fixed' : 'none'}
                }
`));

export const ArrowImg = styled.img`
    display: none;
        @media (min-width: 1024px) {
            display: flex;
        }
`;