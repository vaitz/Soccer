// const { shuffle } = require('../../robin');
// const { matchParticipants } = require('../../robin');
// const { rotateArray } = require('../../robin');
// const { generateTournament } = require('../../robin');
const { schedule } = require('../../domain-usecases/MatchesSchedule');


describe('matches schedule unit test', () => {
    //TC19
    test('missing fields', async () => {
        const result = await schedule('a', '');
        expect(result.msg).toBe("Missing fields, make sure you entered the following: league, season.");
    });
});
