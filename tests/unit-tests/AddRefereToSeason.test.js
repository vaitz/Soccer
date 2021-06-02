const { addRefereeToSeason } = require('../../domain-usecases/AddRefereeToSeason');

test('should output text', async () =>
{
    const result = await addRefereeToSeason('a', '','a');
    expect(result).toBe("Missing fields, make sure you entered the following: refereeUserName, league, season.");
});
    
