const supertest = require('supertest')
const app = require('../../app')
const request = supertest(app)
let cookie = null;

beforeAll(async () => {
    res = await request.post('/login').send({
        "userName": "may",
        "password": "m123456"
      })
    cookie= res.headers['set-cookie'][0]
    .split(',')
    .map(item => item.split(';')[0])
    .join(';')
    console.log(cookie);
})

describe('add referee to season acceptance test', () => {
//TC12
    test('adding success', async () => {
        await request.post('/addRefereeToSeason').set('Cookie', cookie)
            .send({
                "refereeUserName": "almogtry7561.606274760686",
                "league": "league1",
                "season": "league1_2020"
            })
            .expect(201)
    });

//TC13
    test('adding faild', async () => {
        await request.post('/addRefereeToSeason').set('Cookie', cookie)
            .send({
                "refereeUserName": "almogtry6",
                "league": "league1",
                "season": "league1_2021"
            })
            .expect(400)
    });

});

    