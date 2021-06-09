const supertest = require('supertest')
const app = require('../../app')
const request = supertest(app)

describe('user login acceptance tests', () => {
    
    //TC17
    test('login succeed', async () => {
        await request.post('/login')
            .send({
                "userName": "almogtry5",
                "password": "m123456",
            })
            .expect(200)
    });

    //TC18
    test('login faild', async () => {
        await request.post('/login')
            .send({
                "userName": "almogtry7",
                "password": "m12",
            })
            .expect(401)
    });


});





