import * as C from './Home.styled';
import imageHome1 from '../assets/images/image2.svg';

export const Home = () => {
    return (
        <C.AllContent>
            <C.ContentImage>
                <C.HomeImage src={imageHome1} />
            </C.ContentImage>
            <C.ContentHeader>
                EA Web Development
            </C.ContentHeader>
            <C.ContentText>
                Entre em contato e vamos conversar sobre o seu projeto.
            </C.ContentText>
            <C.Footer> EA Web Dev © 2022 - Developer by Erick Allan Silva </C.Footer>
        </C.AllContent>

    );
}