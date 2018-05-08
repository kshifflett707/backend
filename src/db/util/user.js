import bcrypt from 'bcrypt'
import Promise from 'bluebird'
import db from '../models'

const User = db.User

Promise.promisifyAll(bcrypt)

export const createUser = (newUser) => User.create(newUser)

export const destroyUser = (displayName) => User.destroy({
  where: {displayName}
})

export const fetchUser = (displayName) => User.findOne({
  where: {displayName}
})

const verifyPassword = (password, hashedPassword) => bcrypt.compareAsync(password, hashedPassword)

export const verifyLogin = async (displayName, password) => {

  let user = await fetchUser(displayName)

  if (!user) {
    throw new Error('displayName does not exist')
  }

  const isMatch = await verifyPassword(password, user.password)

  if (!isMatch) {
    throw new Error('password is incorrect')
  }

  delete user.password
  return user
}
