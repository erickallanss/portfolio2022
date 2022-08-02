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
    transition: 0.3s;
        @media (min-width: 1024px) {
            max-width: 480px;
            :hover {
                    filter: drop-shadow(0 0 30px #FFF);
                    cursor: pointer;
                }
        }
`;

export const ContentHeader = styled.h1`
    color: #F9A826;
    text-align: center;
    font-size: 1.8rem;
    margin: 20px;
    transition: 0.3s;
        @media (min-width: 1024px) {
            font-size: 2.2rem;
                :hover {
                    text-shadow: 0 0 20px #F9A826;
                }
        }
`;

export const ContentText = styled.div`
    text-align: center;
    font-size: 1.4rem;
    color: #fff;
    display: flex;
    justify-content: center;
    padding: 20px 20px;
    flex: 4;
    transition: 0.3s;
        @media (min-width: 1024px) {
            font-size: 1.8rem;
            :hover {
                    text-shadow: 0 0 20px #FFF;
                }
        }
`;
