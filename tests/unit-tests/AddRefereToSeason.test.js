const { addRefereeToSeason } = require('../../domain-usecases/AddRefereeToSeason');

describe('add referee to season unit test', () => {
    //TC6
    test('missing fields', async () =>
    {
        const result = await addRefereeToSeason('a', '','a');
        expect(result).toBe("Missing fields, make sure you entered the following: refereeUserName, league, season.");
    });
        
});
