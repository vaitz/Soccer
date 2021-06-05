const { login } = require('../../domain-usecases/Login');

describe('user login integraion tests', () => {
//TC14
test('user not exists', async () =>
{
    const result = await login('almogNotIn', 'm123456');
    expect(result).toBe("User not exists in the DB.");
});
    
//TC15
test('username or password incorrect', async () =>
{
    const result = await login('almogtry1', 'm123');
    expect(result).toBe("Username or Password incorrect");
});
    

});
