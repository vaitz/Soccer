const { findFARbyUserName } = require('../../domain-usecases/FARauth');


describe('far integraion tests', () => {
    //todo!!!! add number of test

    test('far not exists', async () =>
    {
        const result = await findFARbyUserName("tom");
        expect(result).toBe(false);
    });
        
    });
    