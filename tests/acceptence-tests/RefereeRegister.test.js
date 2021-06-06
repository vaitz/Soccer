const supertest = require('supertest')
const app = require('../../app')
const request = supertest(app)

// const { register } = require('../../domain-usecases/RefereeRegister');

// test('should output text', async () =>
// {
//     let num = Math.random()*10000;
//     const result = await register('almogtry'+num, 'm123456', 'may', 'v', 'main_referee');
//     expect(result).toBe("Referee added to the DB");
// });
    
describe('referee register acceptence tests', () => {

    //TC4
    test('register succeed', async () => {
        let num = Math.random() * 10000;
        await request.post('/register')
            .send({
                "userName": "almogtry" + num,
                "password": "m123456",
                "firstName": "may",
                "lastName": "v",
                "accountType": "Referee",
                "refType": "main_referee"
            })
            .expect(201)
    });

    //TC5
    test('register faild', async () => {
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
    });

});
