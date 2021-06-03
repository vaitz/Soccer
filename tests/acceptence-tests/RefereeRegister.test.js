const supertest = require('supertest')
const app = require('../../app')
const request = supertest(app)
    
test('Should sign up for a referee', async () =>
{
    let num = Math.random()*10000;
    await request.post('/register')
        .send({
            "userName": "almogtry"+num, 
            "password": "m123456",
            "firstName": "may",
            "lastName": "v",
            "accountType": "Referee",
            "refType": "main_referee"
        })
    .expect(201)
})


test('Should return an error', async () =>
{
    await request.post('/register')
        .send({
            "userName": "almogtry5", 
            "password": "m123456",
            "firstName": "may",
            "lastName": "v",
            "accountType": "Referee",
            "refType": "main_referee"
        })
    .expect(400)
})