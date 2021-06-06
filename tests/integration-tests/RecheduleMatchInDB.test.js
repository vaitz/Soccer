const { reschedule } = require('../../domain-usecases/RecheduleMatch');
describe('RecheduleMatchInDB.test unit tests', () => {
    
    test('test season not exists', async () =>
    {
        const result = await reschedule("demo_not_exists", "hapoel tel aviv",
        "macabi haifa",
        "2020-08-21T20:00:00.000+00:00",
        "blumfield");
        expect(result).toBe("season not exists.");
    });
    
    test('matches not exists in season.', async () =>
    {
        const result = await reschedule(
        "hapoel tel aviv",
        "macabi haifa",
        "leagueIsrael_2020",
        "2020-08-21T20:00:00.000+00:00",
        "blumfield"
           );
        expect(result).toBe("matches not exists in season.");
    });
    
});