const { schedule } = require('../../domain-usecases/MatchesSchedule');


describe('matches schedule unit test', () => {
//TC18
test('missing fields', async () => {
    const result = await schedule('a', '');
    expect(result.msg).toBe("Missing fields, make sure you entered the following: league, season.");
});
});
