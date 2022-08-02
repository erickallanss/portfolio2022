import * as C from './NotFound.styled';
import ErrorImage from '../assets/images/icons/Error.svg';

export const NotFound = () => {
    return (
        <>
            <C.ImageDiv>
                <C.Image src={ErrorImage} alt='' />
            </C.ImageDiv>
            <C.Header>
                Ops! A página que você procura não foi encontrada. Tente uma das opções do nosso menu.
            </C.Header>
        </>
    );
}