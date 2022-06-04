import * as C from './styled';
import logoPng from '../../assets/images/icons/logodev.svg';
import arrow from '../../assets/images/icons/down-arrow.png';
import { Link } from 'react-router-dom';

export const Initial = () => {
    const handleClickHomePage = () => {
        alert("Clickei!")
    }

    return (
        <C.Container>
            <C.background></C.background>
            <C.logo>
                <C.logoImg src={logoPng} alt="Logotipo do desenvolvedor" />
            </C.logo>
            <C.screen1>
                <C.saudacao>Olá! Eu sou o Erick, Desenvolvedor Web.</C.saudacao>
            </C.screen1>
            <C.screen2>
                <C.textscreen><Link to='/homepage'>Conheça um pouco mais sobre o meu trabalho</Link></C.textscreen>
                <C.arrowimg src={arrow} alt="Seta para baixo"></C.arrowimg>
            </C.screen2>
        </C.Container>
    );
}

