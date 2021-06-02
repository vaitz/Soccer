const { login } = require('../../domain-usecases/Login');

    
test('should output messege', async () =>
{
    const result = await login('almogNotIn', 'm123456');
    expect(result).toBe("User not exists in the DB.");
});
    

test('should output messege', async () =>
{
    const result = await login('almogtry1', 'm123');
    expect(result).toBe("Username or Password incorrect");
});
    

