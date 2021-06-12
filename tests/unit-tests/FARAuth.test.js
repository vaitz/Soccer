const { findFARbyUserName } = require('../../domain-usecases/FARauth');

describe('far integraion tests', () => {
    //todo!!!! add number of test
    test('filed username not exists', async () =>
    {
        const result = await findFARbyUserName("");
        expect(result).toBe(false);
    });
    });
    