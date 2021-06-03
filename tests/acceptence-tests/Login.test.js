const supertest = require('supertest')
const app = require('../../app')
const request = supertest(app)


test('Should be a clean login to system', async () =>
{
    await request.post('/login')
        .send({
            "userName": "almogtry5", 
            "password": "m123456",
        })
    .expect(200)
})


test('Should return an error', async () =>
{
    await request.post('/login')
        .send({
            "userName": "almogtry7", 
            "password": "m12",
        })
    .expect(401)
})







