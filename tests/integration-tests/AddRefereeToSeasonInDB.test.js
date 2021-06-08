const { addRefereeToSeason } = require('../../domain-usecases/AddRefereeToSeason');


describe('add referee to season integration test', () => {
//TC7
test('referee not exists in the DB', async () =>
{
    const result = await addRefereeToSeason('almogt', 'league1','league1_2021');
    expect(result).toBe("One or more of the entities not exists in the DB.");
});
//TC8    
test('league not exists in the DB', async () =>
{
    const result = await addRefereeToSeason('almogtry1', 'league22','league1_2021');
    expect(result).toBe("One or more of the entities not exists in the DB.");
});
//TC9
test('season not exists in the DB', async () =>
{
    const result = await addRefereeToSeason('almogtry1', 'league1','league1_2022');
    expect(result).toBe("One or more of the entities not exists in the DB.");
});
//TC10    
test('season not in the league', async () =>
{
    const result = await addRefereeToSeason('almogtry1', 'league2','league1_2020');
    expect(result).toBe("This season isn't part of this league.");
});
    
//TC11   
test('referee already in', async () =>
{
    const result = await addRefereeToSeason('tom12', 'league1','league1_2020');
    expect(result).toBe("The referee already in the season.");
});

});
