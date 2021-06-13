const { findFARbyUserName } = require('../../domain-usecases/FARauth');


describe('far integraion tests', () => {
    //TC34

    test('far not exists', async () =>
    {
        const result = await findFARbyUserName("tom");
        expect(result).toBe(false);
    });
        
    });
    