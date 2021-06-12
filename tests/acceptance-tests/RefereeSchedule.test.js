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
    
describe('referee schedule acceptence tests', () => {
//TC33
    test('refere schedule succeed', async () => {
        await request.post('/scheduleRefereesToSeason').set('Cookie', cookie)
            .send({
                "season": "league1_2020"
            })
            .expect(201)
    });
//TC34
    test('refere schedule faild', async () => {
        await request.post('/scheduleRefereesToSeason').set('Cookie', cookie)
            .send({
                "season": "league_"
            })
            .expect(400)
    });


    
});