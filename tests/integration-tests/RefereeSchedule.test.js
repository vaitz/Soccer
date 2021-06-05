const { schedule } = require('../../domain-usecases/RefereeSchedule');
describe('referee Schedule unit tests', () => {
    
    test('test season not exists', async () =>
    {
        const result = await schedule("demo_not_exists");
        expect(result).toBe("season not exists.");
    });
    
    test('test season not exists', async () =>
    {
        const result = await schedule("seasontry");
        expect(result).toBe("referees not exists in season.");
    });
    
    test('test season not exists', async () =>
    {
        const result = await schedule("league_israel");
        expect(result).toBe("matches not exists in season.");
    });

});