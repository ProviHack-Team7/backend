## Duda - Plataforma educacional inclusiva

Projeto da Hackathon ProviHack para Todos (TIME 7) - 26 a 28 de novembro de 2021
A plataforma que conecta professores e alunos com o objetivo fornecer educação sobre diversidade e fomentar projetos de inclusão nas instituições de ensino.


#### Status: 🚧 Em construção 

#### Stacks e libs utilizadas:
- Typescript;
- Bcryptjs;
- Cors;
- Axios;
- Knex;
- MySQL;
- Express;
- Jsonwebtoken;
- UUID;

#### Features
##### Endpoints de Usuário
- [x] Cadastro (signup);
- [x] Login (login)

##### Endpoints de Quizz
- [x] Criação de Questões (CreateQuizz);
- [x] Lista de Questões (getQuestions);
- [ ] Detalhe da Questão (getQuestionsById);


#### O que já foi feito e funciona:
- Endpoints de cadastro, login, criação de questões, lista com todas questões. 

#### O que não funciona e/ou não foi feito ainda:
- Endpoint que seleciona a questão pelo id (Erro no token);
- Endpoint para cadastro de novos materiais de apoio
- Endpoint para consulta de materiais de apoio
- Refatoração para implementação de padrões de arquitetura

#### Instalação:
1) Git clone <link do repo>
2) npm install
3) npm run dev start

#### Link de deploy no heroku
https://duda-seven.herokuapp.com/

#### Link da collection do Postman
https://www.getpostman.com/collections/799749652f902a951a95
