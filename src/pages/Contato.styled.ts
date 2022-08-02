import styled from 'styled-components';

export const AllContent = styled.div`
    @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    }
`;

export const Header = styled.h1`
    color: #fff;
    text-align: center;
    font-size: 1.6rem;
    margin: 30px auto;
    margin-top: 0;
    color: #F9A826;
        @media (min-width: 1024px) {
            font-size: 2.2rem;
            margin-top: 50px;
        }
`;

export const Body = styled.div`
    @media (min-width: 1024px) {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        width: 60vw;
    }
`;

export const ImageDiv = styled.div`
    margin: auto;
    width: 50vw;
    max-width: 320px;
    margin-top: 20px;
    margin-bottom: 20px;
        @media (min-width: 1024p) {
        }
`;

export const Image = styled.img`
    width: 100%;
`;

export const Contacts = styled.div`
    @media (min-width: 1024px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 50%;
    }
`;

export const Contact = styled.div`
    color: #fff;
    text-align: center;
    margin: 10px auto;
    font-size: 1.2rem;
        @media (min-width: 1024px) {
            font-size: 1.4rem;
        }
`;

export const Title = styled.div`
    font-weight: 600;
    text-transform: uppercase;
`;

export const Description = styled.div`
    font-weight: 200;
`;