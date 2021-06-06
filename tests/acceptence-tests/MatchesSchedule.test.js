const supertest = require('supertest')
const app = require('../../app')
const request = supertest(app)

describe('matches schedule acceptence tests', () => {

    //TC22
    test('matches schedule succeed', async () => {
        await request.post('/scheduleMatchesSeasonInLeague')
            .send({
                "league": "league1",
                "season": "league1_2020"
            })
            .expect(201)
    });

    //TC23
    test('matches schedule faild', async () => {
        await request.post('/scheduleMatchesSeasonInLeague')
            .send({
                "league": "league2",
                "season": "league1_2020"
            })
            .expect(400)
    });

});