const { addRefereeToSeason } = require('../../domain-usecases/AddRefereeToSeason');

    
test('should output messege', async () =>
{
    const result = await addRefereeToSeason('almogNotIn', 'm123456','');
    expect(result).toBe("User not exists in the DB.");
});
    
//referee in DB
test('should output messege', async () =>
{
    const result = await addRefereeToSeason('almogtry5', 'm123','a');
    expect(result).toBe("One or more of the entities not exists in the DB.");
});
    
//leage in DB
test('should output messege', async () =>
{
    const result = await addRefereeToSeason('almogtry5', 'm123','');
    expect(result).toBe("One or more of the entities not exists in the DB.");
});

//season in DB
test('should output messege', async () =>
{
    const result = await addRefereeToSeason('almogtry5', 'm123','');
    expect(result).toBe("One or more of the entities not exists in the DB.");
});
    
//season is in this league
test('should output messege', async () =>
{
    const result = await addRefereeToSeason('almogtry5', 'm123','');
    expect(result).toBe("This season isn't part of this league.");
});

// const myBeverage = {
//     delicious: true,
//     sour: false,
//   };
  
//   describe('my beverage', () => {
//     test('is delicious', () => {
//       expect(myBeverage.delicious).toBeTruthy();
//     });
  
//     test('is not sour', () => {
//       expect(myBeverage.sour).toBeFalsy();
//     });
//   });
    