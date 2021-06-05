const supertest = require('supertest')
const app = require('../../app')
const request = supertest(app)

describe('add referee to season acceptance test', () => {
//TC11
    test('adding success', async () => {
        await request.post('/addRefereeToSeason')
            .send({
                "refereeUserName": "almogtry1",
                "league": "league1",
                "season": "league1_2021"
            })
            .expect(201)
    });

//TC12
    test('adding faild', async () => {
        await request.post('/addRefereeToSeason')
            .send({
                "refereeUserName": "almogtry6",
                "league": "league1",
                "season": "league1_2021"
            })
            .expect(400)
    });

});

    