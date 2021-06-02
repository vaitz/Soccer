const { addRefereeToSeason } = require('../../domain-usecases/AddRefereeToSeason');


    
//referee in DB
test('should output messege', async () =>
{
    const result = await addRefereeToSeason('almogt', 'league1','league1_2021');
    expect(result).toBe("One or more of the entities not exists in the DB.");
});
    
//leage in DB
test('should output messege', async () =>
{
    const result = await addRefereeToSeason('almogtry1', 'league22','league1_2021');
    expect(result).toBe("One or more of the entities not exists in the DB.");
});

//season in DB
test('should output messege', async () =>
{
    const result = await addRefereeToSeason('almogtry1', 'league1','league1_2022');
    expect(result).toBe("One or more of the entities not exists in the DB.");
});
    
//season is in this league
test('should output messege', async () =>
{
    const result = await addRefereeToSeason('almogtry1', 'league1','2021');
    expect(result).toBe("This season isn't part of this league.");
});

