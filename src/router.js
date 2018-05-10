import { Router } from 'express'

import user from './controller/user';
import questions from './controller/question';
// import answers from './controller/answers';

const router = Router();

router.get('/', (req, res) => res.json('Brandon Can\'t hang'));

router.post('/user/signup', user.post.signup);
router.post('/user/login', user.post.login);
router.post('/user/logout', user.post.logout);

// router.get('/user/:uid', user.get.user);

router.get('/questions', questions.get.questions);
router.get('/questions/:qid', questions.get.question);
router.post('/questions', questions.post.question);

// router.get('/answers', answers.get.answers);
// router.get('/answers/:aid', answers.get.answer);
// router.post('/answers', answers.post.answer);

export default router

