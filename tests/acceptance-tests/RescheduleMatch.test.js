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

describe('Rechedule Match acceptence tests', () => {
    //TC27
    test('Rechedule Match succeed', async () => {
        await request.post('/rescheduleMatch').set('Cookie', cookie)
            .send({
                "season": "league1_2020",
                "home_team": "hapoel tel aviv",
                "away_team": "macabi haifa",
                "new_date": "2020-07-21T20:00:00.000+00:00",
                "new_stadium": "blumfield"            
            })
            .expect(200)
    });
    //TC28
    test('Rechedule Match succeed', async () => {
        await request.post('/rescheduleMatch').set('Cookie', cookie)
            .send({
                "season": "league1_2021",
                "home_team": "hapoel tel aviv",
                "away_team": "macabi haifa",
                "new_date": "2020-07-21T20:00:00.000+00:00",
                "new_stadium": "blumfield"            
            })
            .expect(400)
    });

    
});