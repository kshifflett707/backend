import db from '../../db/models'

const Post = db.Post;

const PostTypeError = (expectedType, type) => new Error(`expected post of type ${expectedType} got a post of type ${type}`);

// may never get used
export const allPosts = (req, res) => 
  Post.getPostsByQuery()
  .then((posts) => res.status(200).json(posts))
  .catch((err) => res.status(404).json(err));

export const byQuery = (req, res) => 
  Post.getPostsByQuery(req.query)
  .then((posts) => res.status(200).json(posts))
  .catch((err) => res.status(401).json({err}));

export const postsByType =(postType) => (req, res) => 
  Post.getPostsByType(postType)
  .then((posts) => res.status(200).json(posts))
  .catch((err) => res.status(404).json(err));

export const postById = (postType) => (req, res) => 
  Post.getPostById(req.params.id)
  .then((post) => {
    if (post.type !== postType) {
      res.status(404).json(PostTypeError(postType, post.type));
    }
    res.status(200).json(post)
  })
  .catch((err) => res.status(404).json(err));

export const newPost  = (postType) => (req, res) => {
  const { UserId, title, body, PostTypeId, PostId, type } = req.body;

  if (type !== postType) {
    throw PostTypeError(postType, type);
  }
  return Post.createNewPost({UserId, title, body, PostTypeId, PostId, type})
  .then(() => res.status(201).send('post successful'))
  .catch((err) => res.status(401).json({
      message: 'there was an error posting question',
      err: err
  }));
}

export { db }
