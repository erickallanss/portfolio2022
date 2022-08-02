import * as C from './Contato.styled';
import ContactImage from '../assets/images/icons/contactimage.svg';

export const Contato = () => {
    return (
        <>
            <C.Header>
                Entre em contato e vamos conversar sobre o seu projeto!
            </C.Header>
            <C.ImageDiv>
                <C.Image src={ContactImage} alt='' />
            </C.ImageDiv>
            <C.Contact>
                <C.Title>Email</C.Title>
                <C.Description>erickallann@gmail.com</C.Description>
            </C.Contact>

            <C.Contact>
                <C.Title>Telefone</C.Title>
                <C.Description>+55 (84) 9 9650-1098</C.Description>
            </C.Contact>
        </>
    );
}