const { register } = require('../../domain-usecases/RefereeRegister');

describe('referee register integration test', () => {
    //TC3
test('user in DB', async () =>
{
    const result = await register('almogtry1', 'm123456', 'almog', 'R', 'main_referee');
    expect(result).toBe("User already exists in the DB.");
});
});
