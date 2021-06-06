const { login } = require('../../domain-usecases/Login');

describe('user login unit test', () => {
//TC14
test('missing fields', async () =>
{
    const result = await login('a', '');
    expect(result).toBe("Missing fields, make sure you entered the following: userName, password.");
});
    
});
