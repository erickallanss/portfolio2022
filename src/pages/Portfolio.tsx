import * as C from './Portfolio.styled';
import Project1Photo from '../assets/images/project1.jpg'
import Project2Photo from '../assets/images/project2.jpg'
import Project3Photo from '../assets/images/project3.jpg'
import Project4Photo from '../assets/images/project4.jpg'
import Project5Photo from '../assets/images/project5.jpg'
import Project6Photo from '../assets/images/project6.jpg'
import Project7Photo from '../assets/images/project7.png'


export const Portfolio = () => {
    return (
        <>
            <C.Title>
                Projetos
            </C.Title>

            <C.ProjectDiv>
                <C.HeaderProjectMobo>
                    <C.LinkA target='_blank' href=''>
                        Chatbot para o curso "Tendências na Comunicação em Vendas" do Senac-RN
                    </C.LinkA>
                </C.HeaderProjectMobo>
                <C.BodyProject>

                    <C.BodyVerticalImage>
                        <C.LinkA target='_blank' href=''>
                            <C.VerticalImage src={Project7Photo} alt='' />
                        </C.LinkA>
                    </C.BodyVerticalImage>
                    <C.BodyText>
                        <C.HeaderProject>
                            <C.LinkA target='_blank' href=''>
                            Chatbot para o curso "Tendências na Comunicação em Vendas" do Senac-RN
                            </C.LinkA>
                        </C.HeaderProject>
                        <C.Description>
                            Chatbot desenvolvido usando Node.js para auxiliar os alunos do curso de "Tendências na Comunicação em Vendas", do Senac-RN. O bot interage com o aluno para enviá-lo conteúdos complementares ao curso que o aluno está acompanhando, além de rodar simulações de situações de venda, para que o aluno exercite o que está aprendendo. O projeto foi feito usando a api node-telegram-bot-api, e implantado na Azure, como um App Service.
                        </C.Description>
                        <C.TechDescription>
                            Node.js, Typescript, node-telegram-bot-api, Prisma, Cron, Azure, PostgreSQL.
                        </C.TechDescription>
                    </C.BodyText>
                </C.BodyProject>
            </C.ProjectDiv>

            <C.ProjectDiv>
                <C.HeaderProjectMobo>
                    <C.LinkA target='_blank' href=''>
                        Sistema de Gestão para Clínicas
                    </C.LinkA>
                </C.HeaderProjectMobo>
                <C.BodyProject>

                    <C.BodyImage>
                        <C.LinkA target='_blank' href='https://github.com/erickallanss/gestaoclinica/blob/main/README.md'>
                            <C.Image src={Project6Photo} alt='' />
                        </C.LinkA>
                    </C.BodyImage>
                    <C.BodyText>
                        <C.HeaderProject>
                            <C.LinkA target='_blank' href='https://github.com/erickallanss/gestaoclinica/blob/main/README.md'>
                            Sistema de Gestão para Clínicas
                            </C.LinkA>
                        </C.HeaderProject>
                        <C.Description>
                            Sistema de gestão de clínicas médicas, com login de usuário, para o controle do gerenciamento de clínicas que lidam com agendamento de consultas. O dashboard inicial mostra do lado esquerdo a lista de pacientes agendados para o dia atual, e do lado direito, a lista de pacientes realmente confirmados (que compareceram no dia e estão aguardando serem chamados). O sistema ainda conta com módulos de gerenciamento de médicos, pacientes e consultas.
                        </C.Description>
                        <C.TechDescription>
                            Python, Django, Bootstrap.
                        </C.TechDescription>
                    </C.BodyText>
                </C.BodyProject>
            </C.ProjectDiv>

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
                            Projeto de to-do list, para organização de atividades do dia a dia. É possível adicionar novas tarefas, definí-las como concluídas, e deletá-las, dentro da conta do usuário. As tarefas ficam armazenadas em um banco de dados, sendo possível acessá-las posteriormente de outros dispositivos. A aplicação web é responsiva e o Heroku foi utilizado para deploy, além do banco de dados PostgreSQL da mesma plataforma. Para teste, caso não necessite criar uma conta, utilize "usuario123" como login, e "senha123" como senha.
                        </C.Description>
                        <C.TechDescription>
                            ReactJS, TailwindCSS, NodeJS, Express, Heroku, PostgreSQL.
                        </C.TechDescription>
                    </C.BodyText>
                </C.BodyProject>
            </C.ProjectDiv>

            <C.ProjectDiv>
                <C.HeaderProjectMobo>
                    <C.LinkA target='_blank' href='https://healthclinica.netlify.app'>
                        Health Clínica
                    </C.LinkA>
                </C.HeaderProjectMobo>
                <C.BodyProject>

                    <C.BodyImage>
                        <C.LinkA target='_blank' href='https://healthclinica.netlify.app'>
                            <C.Image src={Project5Photo} alt='' />
                        </C.LinkA>
                    </C.BodyImage>
                    <C.BodyText>
                        <C.HeaderProject>
                            <C.LinkA target='_blank' href='https://healthclinica.netlify.app'>
                                Health Clínica
                            </C.LinkA>
                        </C.HeaderProject>
                        <C.Description>
                            Modelo de website para clínicas médicas. Desenvolvido para fazer parte de um modelo generalista de website responsivo, adaptado para smartphones e desktops.
                        </C.Description>
                        <C.TechDescription>
                            ReactJS, Styled-Components, Typescript.
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
