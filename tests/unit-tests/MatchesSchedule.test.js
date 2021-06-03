const { schedule } = require('../../domain-usecases/MatchesSchedule');


describe('test2', () => {
    it('returns the correct number', async () => {
        const result = await schedule('a', '');
        expect(result).toBe("Missing fields, make sure you entered the following: league, season.");
    })
});