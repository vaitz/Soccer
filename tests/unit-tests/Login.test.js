const { login } = require('../../domain-usecases/Login');


test('should output text', async () =>
{
    const result = await login('a', '');
    expect(result).toBe("Missing fields, make sure you entered the following: userName, password.");
});
    
