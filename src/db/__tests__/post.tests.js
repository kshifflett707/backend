/*import { 
  getAllPosts, 
  getPostsByType, 
  getPostsByQuery, 
  createNewPost, 
  getPostById, 
} from '../util/post'

import db from '../models'

const Post = db.Post;
const User = db.User;
console.log('USERasldkfjasdfj \n \n asdfasdf', User)
const clearDatabase = (cb) => {
  return Post.destroy({
    where: {},
    truncate: true,
    cascade: true,
  })
  .finally(cb);
}

const username = 'TESssdfdT_USEsdfR' + Math.random();
const email = 'sdftest@gmail.com';
const password = '123456789';

beforeAll((done) => {

  User.create({
    username,
    email,
    password
  })
  .then(done);
})

afterAll((done) => {
  clearDatabase(() => {
    db.sequelize.close();
    done();
  });
});

describe('Test createNewPost', () => {
/*
  test('Should create a new item in the database with valid input', (done) => {
    
    const title = 'Test createNewPost'
    
    createNewPost({
      userid: 1,
      title,
      body: 'body1',
      type: 'Question',
      postRefId: null,
    })
    .then(() => Post.findAll({}))
    .then((posts) => posts.reduce((exists, post) => exists || post.title === title, false).length)
    .then((l) => expect(l > 0).toBeTruthy())
    .then(done)
  })*/

  it('should get posts by type', () => {
    expect('need to write a test').toBeTruthy();
  })

//})
