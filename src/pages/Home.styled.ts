import styled from 'styled-components';

export const AllContent = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ContentImage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 100px;
`;

export const HomeImage = styled.img`
    width: 80vw;
    max-width: 360px;
        @media (min-width: 1024px) {
            
        }
`;

export const ContentHeader = styled.h1`
    color: #F9A826;
    text-align: center;
    font-size: 1.8rem;
    margin: 20px;
`;

export const ContentText = styled.div`
    text-align: center;
    font-size: 1.4rem;
    color: #fff;
    display: flex;
    justify-content: center;
    padding: 20px 20px;
    flex: 4;
`;

export const Footer = styled.div`
    display: none;
    color: #FFF;
    text-align: center;
        @media (min-width: 1024px) {
            display: flex;
            position: fixed;
            bottom: 0;
            padding: 20px 0;
            left: 0;
            width: 100%;
            justify-content: center;
        }
`;