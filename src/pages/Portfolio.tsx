import * as C from './Portfolio.styled';
import Project1Photo from '../assets/images/project1.jpg'
import Project2Photo from '../assets/images/project2.jpg'
import Project3Photo from '../assets/images/project3.jpg'
import Project4Photo from '../assets/images/project4.jpg'

export const Portfolio = () => {
    return (
        <>
            <C.Title>
                Projetos
            </C.Title>

            <C.ProjectDiv>
                <C.HeaderProjectMobo>
                    <C.LinkA target='_blank' href='https://espacoprime.netlify.app'>
                        Espaço Prime Wash & Parking
                    </C.LinkA>
                </C.HeaderProjectMobo>
                <C.BodyProject>

                    <C.BodyImage>
                        <C.LinkA target='_blank' href='https://espacoprime.netlify.app'>
                            <C.Image src={Project4Photo} alt='' />
                        </C.LinkA>
                    </C.BodyImage>
                    <C.BodyText>
                        <C.HeaderProject>
                            <C.LinkA target='_blank' href='https://espacoprime.netlify.app'>
                                Espaço Prime - Wash & Parking
                            </C.LinkA>
                        </C.HeaderProject>
                        <C.Description>
                            Website do Espaço Prime - Wash & Parking, empreendimento localizado em Ponta Negra - Natal/RN, que disponibiliza serviços de estacionamento privado, além de diversas opções de serviços de estética automotiva. 
                        </C.Description>
                        <C.TechDescription>
                            ReactJS, Styled-Components, Typescript e Firebase.
                        </C.TechDescription>
                    </C.BodyText>
                </C.BodyProject>
            </C.ProjectDiv>




            <C.ProjectDiv>
                <C.HeaderProjectMobo>
                    <C.LinkA target='_blank' href='https://fazerhojeapp.herokuapp.com/'>
                        Fazer hoje App
                    </C.LinkA>
                </C.HeaderProjectMobo>
                <C.BodyProject>

                    <C.BodyImage>
                        <C.LinkA target='_blank' href='https://fazerhojeapp.herokuapp.com/'>
                            <C.Image src={Project1Photo} alt='' />
                        </C.LinkA>
                    </C.BodyImage>
                    <C.BodyText>
                        <C.HeaderProject>
                            <C.LinkA target='_blank' href='https://fazerhojeapp.herokuapp.com/'>
                                Fazer hoje App
                            </C.LinkA>
                        </C.HeaderProject>
                        <C.Description>
                            Projeto desenvolvido para planejamento de atividades no início do dia. É possível adicionar novas tarefas, definí-las como concluídas, e deletá-las. As tarefas ficam armazenadas em um banco de dados, sendo possível acessá-las posteriormente de outros dispositivos. A aplicação web é responsiva e o Heroku foi utilizado para deploy, além do banco de dados PostgreSQL da mesma plataforma.
                        </C.Description>
                        <C.TechDescription>
                            ReactJS, TailwindCSS, NodeJS, Express e PostgreSQL.
                        </C.TechDescription>
                    </C.BodyText>
                </C.BodyProject>
            </C.ProjectDiv>

            <C.ProjectDiv>
            <C.HeaderProjectMobo>
                            <C.LinkA target='_blank' href='https://easorteieumapessoa.netlify.app'>
                                Sorteie uma pessoa
                            </C.LinkA>
                        </C.HeaderProjectMobo>
                <C.BodyProject>

                    <C.BodyImage>
                        <C.LinkA target='_blank' href='https://easorteieumapessoa.netlify.app'>
                            <C.Image src={Project2Photo} alt='' />
                        </C.LinkA>
                    </C.BodyImage>
                    <C.BodyText>
                        <C.HeaderProject>
                            <C.LinkA target='_blank' href='https://easorteieumapessoa.netlify.app'>
                                Sorteie uma pessoa
                            </C.LinkA>
                        </C.HeaderProject>

                        <C.Description>
                            Sorteie uma pessoa é um projeto desenvolvido em ReactJS. A aplicação tem como objetivo cadastrar nomes de indivíduos que participarão de um sorteio, deletar nomes da lista do sorteio e realizar o sortear de um desses indivíduos aleatoriamente, retornando o nome do sortudo.
                        </C.Description>
                        <C.TechDescription>
                            ReactJS, Styled-Components, Typescript.
                        </C.TechDescription>
                    </C.BodyText>
                </C.BodyProject>
            </C.ProjectDiv>



            <C.ProjectDiv>
            <C.HeaderProjectMobo>
                            <C.LinkA target='_blank' href='https://eaficticiawebsite.netlify.app'>
                                Fictícia Technologies
                            </C.LinkA>
                        </C.HeaderProjectMobo>
                <C.BodyProject>
                    <C.BodyImage>
                        <C.LinkA target='_blank' href='https://eaficticiawebsite.netlify.app'>
                            <C.Image src={Project3Photo} alt='' />
                        </C.LinkA>
                    </C.BodyImage>
                    <C.BodyText>
                        <C.HeaderProject>
                            <C.LinkA target='_blank' href='https://eaficticiawebsite.netlify.app'>
                                Fictícia Technologies
                            </C.LinkA>
                        </C.HeaderProject>

                        <C.Description>
                            Website de uma empresa fictícia de nome "Fictícia", do ramo de tecnologias. O site foi desenvolvido para fins de treinamento e aprendizado sobre a atualização do Bootstrap 5.
                        </C.Description>
                        <C.TechDescription>
                            HTML5, CSS3, Javascript e Bootstrap 5.
                        </C.TechDescription>
                    </C.BodyText>
                </C.BodyProject>
            </C.ProjectDiv>
        </>
    );
}
