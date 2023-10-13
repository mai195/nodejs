const request = require('supertest')
const app = require('../src/app')
const User = require('../src/models/user')

const userOne = {
    name: "Mai 1",
    email: "mai1@mydomain.com",
    password: "1234567"
}

beforeEach(async() => {
    await User.deleteMany()
    await new User(userOne).save()
})

test('Should sign up a new user', async() => {
    await request(app).post('/users').send({
        name: 'Mai 4',
        email: 'mai4@mydomain.com',
        password: '1234567'
    }).expect(201)
})

test('Should log in existing user', async() => {
    await request(app).post('/users/login').send({
        email: userOne.email,
        password: userOne.password
    }).expect(200)
})

test('Should not login nonexistent user', async() => {
    await request(app).post('/users/login').send({
        email: userOne.email,
        password: "wrongpassword"
    }).expect(400)
})