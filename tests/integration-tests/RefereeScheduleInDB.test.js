const { schedule } = require('../../domain-usecases/RefereeSchedule');
describe('referee Schedule unit tests', () => {
    //TC30
    test('season not exists', async () =>
    {
        const result = await schedule("demo_not_exists");
        expect(result).toBe("season not exists.");
    });
    //TC31
    test('referees not exists', async () =>
    {
        const result = await schedule("seasontry");
        expect(result).toBe("referees not exists in season.");
    });
    //TC32
    test('matches not exists in season', async () =>
    {
        const result = await schedule("league1_2018",
        "hapoel tel aviv",
        "macabi haifa",
        "2020-08-21T20:00:00.000+00:00",
        "blumfield");
        expect(result).toBe("matches not exists in season.");
    });

});