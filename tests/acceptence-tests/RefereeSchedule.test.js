const supertest = require('supertest')
const app = require('../../app')
const request = supertest(app)


    
describe('referee schedule acceptence tests', () => {
//TC33
    test('refere schedule succeed', async () => {
        await request.post('/scheduleRefereesToSeason')
            .send({
                "season": "league1_2020"
            })
            .expect(201)
    });
//TC34
    test('refere schedule faild', async () => {
        await request.post('/scheduleRefereesToSeason')
            .send({
                "season": "league_"
            })
            .expect(400)
    });


    
});