const supertest = require('supertest')
const app = require('../../app')
const request = supertest(app)

// const { addRefereeToSeason } = require('../../domain-usecases/AddRefereeToSeason');
// test('should output messege', async () =>
// {
//     const result = await addRefereeToSeason('almogNotIn', 'm123456','aa');
//     expect(result).toBe("Referee added to the season successfully");
// });


///////////////////////////////////////////////////////////////////////////////////////////


test('Should add referee to season', async () =>
{
    await request.post('/addRefereeToSeason')
        .send({
            "refereeUserName": "may",
            "league": "league1",
            "season": "league1_2021"
        })
    .expect(201)
})


test('Should return an error', async () =>
{
    await request.post('/addRefereeToSeason')
        .send({
            "refereeUserName": "may1",
            "league": "league1",
            "season": "league1_2021"
        })
    .expect(400)
})


    