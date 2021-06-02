// const supertest = require('supertest')
// const app = require('../../app')
// const request = supertest(app)

const { register } = require('../../domain-usecases/RefereeRegister');

test('should output text', async () =>
{
    const result = await register('almogtry10', 'm123456', 'may', 'v', 'main_referee');
    expect(result).toBe("Referee added to the DB");
});
    
/////////////////////////////////////////////////////////////////////
// test('Should sign up for a referee', async () =>
// {
//     await request.post('/register')
//         .send({
//             "userName": "almogtry4", 
//             "password": "m123456",
//             "firstName": "may",
//             "lastName": "v",
//             "accountType": "Referee",
//             "refType": "main_referee"
//         })
//     .expect(201)
// })


// test('Should return an error', async () =>
// {
//     await request.post('/register')
//         .send({
//             "userName": "almogtry5", 
//             "password": "m123456",
//             "firstName": "may",
//             "lastName": "v",
//             "accountType": "Referee",
//             "refType": "main_referee"
//         })
//     .expect(400)
// })