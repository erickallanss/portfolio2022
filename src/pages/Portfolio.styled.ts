import styled from 'styled-components';

export const ProjectDiv = styled.div`
    margin: 0;
    padding: 0;
        :nth-child(1) {
            margin-top: 50px;
        }
    margin-bottom: 30px;
        @media (min-width: 1024px) {

        }
`;

export const HeaderText = styled.h1`
    color: #F9A826;
    text-align: center;
    font-size: 1.8rem;
    margin: 0px 0 20px 0;
        @media (min-width: 1024px) {
            font-size: 2rem;
            margin-top: 50px;
        }
`;

export const ImageDiv = styled.div`
    width: 80vw;
    max-width: 520px;
    display: flex;
    margin: 0 auto;
`;

export const Image = styled.img`
    width: 100%;
`;

export const Description = styled.div`
    color: #FFF;
    font-size: 1.2rem;
    text-align: justify;
    width: 80vw;
    margin: 20px auto 0 auto;
        @media (min-width:1024px) {
            width: 60vw;
    }
`;

export const TechDescription = styled.div`
    color: #FFF;
    font-size: 1.1rem;
    text-align: center;
    width: 80vw;
    margin: 20px auto 0 auto;
    :nth-last-child(1) {
            margin-bottom: 50px;
        }
`;

export const LinkA = styled.a`
    color: #F9A826;
    text-decoration: none;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;