import { Post } from '../../db/models'

const PostTypeError = (expectedType, type) => 
  Error(`expected post of type ${expectedType} got a post of type ${type}`);

// may never get used
export const allPosts = (req, res) => 
  Post.getAllPosts().then((posts) => res.json(posts));

export const byQuery = (req, res) => 
  Post.getPostsByQuery(req.query)
  .then((posts) => res.json(posts))
  .catch((err) => res.status(401).json({err}));

export const postsByType =(postType) => (req, res) => 
  Post.getPostsByType(postType)
  .then((posts) => res.json(posts));


export const postById = (postType) => (req, res) => 
  Post.getPostById(req.params.qid)
  .then((post) => {
    if (post.type !== postType) {
      throw new PostTypeError(postType, post.type);
    }
    res.json(post)
  })


export const newPost  = (postType) => (req, res) => {
  const { userid, title, body, type, postref } = req.body;
  if (type !== type) {
    throw new PostTypeError(postType, type);
  }
  Post.createNewPost(userid, title, body, type, postref)
  .then(() => res.status(201).send('post successful'))
  .catch((err) => res.status(401).json({
      message: 'there was an error posting question',
      err
  }));
}
