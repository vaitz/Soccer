const { register } = require('../../domain-usecases/RefereeRegister');

    
test('should output messege', async () =>
{
    const result = await register('almogtry', 'm123456', 'almog', 'R', 'main_referee');
    expect(result).toBe("User already exists in the DB.");
    });