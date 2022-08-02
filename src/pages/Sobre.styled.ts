import styled from 'styled-components';

export const SobreContent = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ContentHeader = styled.h1`
    color: #F9A826;
    text-align: center;
    font-size: 1.8rem;
    margin: 50px 0 10px 0;
        @media (min-width:1024px) {
            font-size: 2.2rem;
        }
`;

export const ImageDiv = styled.div`
    margin: auto;
    width: 80%;
    max-width: 320px;
    margin: 30px auto;
        @media (min-width:1024px) {
                max-width: 512px;
                margin: 60px auto;
            }
`;

export const Image = styled.img`
    width: 100%;
`;

export const ContentText = styled.div`
    text-align: justify;
    font-size: 1.3rem;
    color: #fff;
    margin: 20px 0;
        @media (min-width:1024px) {
                width: 70%;
                margin: 20px auto;
                font-size: 1.5rem;
        }
`;

export const TechIcons = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin: 0 20px;
        :nth-last-child(1) {
            margin-bottom: 40px;
        }
        :nth-last-child(3) {
            margin-top: 20px;
        }
        @media (min-width: 1024px) {
            margin-top: 0px;
            :nth-last-child(3) {
            margin-top: 60px;
        }
        }
`;

export const TechIcon = styled.div`
    background-color: #fff;
    height: 70px;
    width: 70px;
    border-radius: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const IconImg = styled.img`
    height: 60%;
`;
