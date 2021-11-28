import app from "./app";
import signup from './endpoints/signup';
import createQuizz from "./endpoints/createQuizz";
import getQuestionById from "./endpoints/getQuestionById";
import getQuestions from "./endpoints/getQuestions";


app.post('/user/signup', signup);


app.post('/question/create', createQuizz);
app.get('/question/:id', getQuestionById);
app.get('/questions', getQuestions);