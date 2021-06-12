const supertest = require('supertest')
const app = require('../../app')
const request = supertest(app)

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

describe('matches schedule acceptence tests', () => {

    //TC22
    test('matches schedule succeed', async () => {
        await request.post('/scheduleMatchesSeasonInLeague').set('Cookie', cookie)
            .send({
                "league": "league1",
                "season": "league1_2020"
            })
            .expect(201)
    });

    //TC23
    test('matches schedule faild', async () => {
        await request.post('/scheduleMatchesSeasonInLeague').set('Cookie', cookie)
            .send({
                "league": "league3",
                "season": "league1_2020"
            })
            .expect(400)
    });

});