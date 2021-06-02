const supertest = require('supertest')
const app = require('../../app')
const request = supertest(app)
// const { login } = require('../../domain-usecases/Login');

// test('should output text', async () =>
// {
//     const result = await login('a', 'a');
//     expect(result).toBe("User login successfully.");
// });
    
///////////////////////////////////////////////////////////////////////////////////////////


test('Should be a clean login to system', async () =>
{
    await request.post('/login')
        .send({
            "userName": "almogtry8", 
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







//need to change