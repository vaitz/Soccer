const { schedule } = require('../../domain-usecases/RefereeSchedule');



describe('referee Schedule unit tests', () => {
    //TC29
    test('missing fields', async () =>
    {
        const result = await schedule("");
        expect(result).toBe("Missing field, make sure you entered the season name.");
    });

});