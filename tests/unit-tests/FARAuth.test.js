const { findFARbyUserName } = require('../../domain-usecases/FARauth');

describe('far integraion tests', () => {
    //TC35
    test('filed username not exists', async () =>
    {
        const result = await findFARbyUserName("");
        expect(result).toBe(false);
    });
});
    