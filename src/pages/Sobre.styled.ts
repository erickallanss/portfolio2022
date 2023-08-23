import styled from 'styled-components';

export const SobreContent = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ContentAndPhoto = styled.div`
    display: flex;
    flex-direction: column-reverse;
    align-items: center; 
    justify-content: center;
        @media (min-width:1024px) {
            flex-direction: row;
        }
`

export const ContentHeader = styled.h1`
    color: #F9A826;
    text-align: start;
    font-size: 1.8rem;
    margin: 50px auto 10px auto;
        @media (min-width:1024px) {
            font-size: 2.2rem;
            text-transform: uppercase;
            margin-top: 100px;
            text-align: start;
            margin-left: 50px;
            margin-bottom: -100px;
        }
`;

export const ImageDiv = styled.div`
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
    max-width: 320px;
        @media (min-width:1024px) {
                max-width: 512px;
                margin-top: -40px
            }
`;

export const Image = styled.img`
    width: 80%;
`;

export const ContentText = styled.div`
    text-align: justify;
    font-size: 1.3rem;
    color: #fff;
    margin: 20px 0;
        @media (min-width:1024px) {
                width: 50%;
                margin: 0px auto;
                font-size: 1.4rem;
                margin-top: 150px;
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
    transition: 0.3s;
        @media (min-width: 1024px) {
            :hover {
                box-shadow: 0 0 50px #FFF;
                cursor: pointer;
            }
        }
`;

export const IconImg = styled.img`
    height: 60%;
`;
