import { postsByType, postById, newPost, updatePostVote, answersById } from './post'

const TYPE = 'Answer';

let answer = {
  get: {},
  post: {},
  patch: {}
};

answer.get.answers = (req, res) => res.end('TODO for machine learning');

answer.get.answers.all = postsByType(TYPE);

answer.post.answer = newPost(TYPE);

answer.patch.answer = updatePostVote();

answer.get.answer = answersById();

export default answer
