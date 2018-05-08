import { createUser, fetchUser, verifyPassword, verifyLogin } from '../util/user'
import db from '../models'

const User = db.User;

const clearDatabase = () => {
  db.sequelize.sync({force: true})
}

afterAll(() => db.sequelize.close());

describe('Test createUser', () => {
  //beforeEach(clearDatabase);

  test('Should create a new item in the database with valid input', (done) => {
    const displayName = 'TEST_USER';
    const email = 'test@gmail.com';
    const password = '123456789';

    User.create({
       displayName,
       email,
       password
    })
    .then(() => User.findOne({
      where: {displayName}
    }))
    .then((user) => expect(user.email).toBe('test1@gmail.com'))
    .finally(done);
  })
})

