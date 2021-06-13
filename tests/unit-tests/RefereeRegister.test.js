const { register } = require('../../domain-usecases/RefereeRegister');

describe('referee register unit tests', () => {
    //TC1
    test('test missing fields', async () =>
    {
        const result = await register('a', 'a', 'a', 'a', '');
        expect(result).toBe("Missing fields, make sure you entered the following: userName, password, firstName, lastName, refType.");
    });

    //TC2
    test('test password correction', async () =>
    {
        const result = await register('a', 'a', 'a', 'a', 'a');
        expect(result).toBe("The password entered is not according to the rules: more then 6 characters or equal, contains at least one letter and one digit.");
    });
});