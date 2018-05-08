import { createUser, fetchUser, verifyPassword, verifyLogin } from '../util/user'
import Promise from 'bluebird'
import db from '../models'

const Post = db.Post

export const createPost = (newPost) => Post.create(newPost)

export const destroyPost = (postName) => Post.destroy({
  where: {postName}
})

export const fetchPost = (postName) => Post.findOne({
  where: {postName}
})

export const fetchAllPosts = () => Post.findAll({})
  .then((data) => console.log(data))

export const updatePost = () => Post.update({
  title: "test"
}, {
  where: {
    id: 1
  }
}).then(() => console.log('Updated'))

export const fetchPosts = (filters) => {
  console.log('fetchign posts with the followign filters', filters)
}
