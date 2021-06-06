const supertest = require('supertest')
const app = require('../../app')
const request = supertest(app)


<<<<<<< HEAD:tests/acceptence-tests/RecheduleMatch.test.js
describe('Reschedule Match acceptence tests', () => {

    test('Reschedule Match succeed', async () => {
=======
describe('Rechedule Match acceptence tests', () => {
    //TC27
    test('Rechedule Match succeed', async () => {
>>>>>>> origin/tests:tests/acceptence-tests/RescheduleMatch.test.js
        await request.post('/rescheduleMatch')
            .send({
                "season": "league1_2020",
                "home_team": "hapoel tel aviv",
                "away_team": "macabi haifa",
                "new_date": "2020-07-21T20:00:00.000+00:00",
                "new_stadium": "blumfield"            
            })
            .expect(200)
    });
<<<<<<< HEAD:tests/acceptence-tests/RecheduleMatch.test.js

    test('Reschedule Match succeed', async () => {
=======
    //TC28
    test('Rechedule Match succeed', async () => {
>>>>>>> origin/tests:tests/acceptence-tests/RescheduleMatch.test.js
        await request.post('/rescheduleMatch')
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