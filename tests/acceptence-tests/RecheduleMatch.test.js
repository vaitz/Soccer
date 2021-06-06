const supertest = require('supertest')
const app = require('../../app')
const request = supertest(app)


describe('Rechedule Match acceptence tests', () => {

    test('Rechedule Match succeed', async () => {
        await request.post('/rescheduleMatch')
            .send({
                "season": "league1_2020",
                "home_team": "hapoel tel aviv",
                "away_team": "macabi haifa",
                "new_date": "2020-07-21T20:00:00.000+00:00",
                "new_stedium": "blumfield"            
            })
            .expect(200)
    });

    test('Rechedule Match succeed', async () => {
        await request.post('/rescheduleMatch')
            .send({
                "season": "league1_2021",
                "home_team": "hapoel tel aviv",
                "away_team": "macabi haifa",
                "new_date": "2020-07-21T20:00:00.000+00:00",
                "new_stedium": "blumfield"            
            })
            .expect(400)
    });

    
});