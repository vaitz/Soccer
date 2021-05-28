const supertest = require('supertest')
const app = require('../../app')
const request = supertest(app)
// const { register } = require('../../domain-usecases/RefereeRegister');

// test('should output text', async () =>
// {
//     const result = await register('a', 'a', 'a', 'a', 'a');
//     expect(result).toBe("Referee added to the DB");
// });
    
/////////////////////////////////////////////////////////////////////
test('Should sign up for a referee', async () =>
{
    await request.post('/register')
        .send({
            "userName": "almogtry9", 
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
            "userName": "almogtry7", 
            "password": "m123456",
            "firstName": "may",
            "lastName": "v",
            "accountType": "Referee",
            "refType": "main_referee"
        })
    .expect(400)
})