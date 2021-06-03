const supertest = require('supertest')
const app = require('../../app')
const request = supertest(app)


test('Should add referee to season', async () =>
{
    await request.post('/addRefereeToSeason')
        .send({
            "refereeUserName": "almogtry1",
            "league": "league1",
            "season": "league1_2021"
        })
    .expect(201)
})


test('Should return an error', async () =>
{
    await request.post('/addRefereeToSeason')
        .send({
            "refereeUserName": "almogtry6",
            "league": "league1",
            "season": "league1_2021"
        })
    .expect(400)
})


    