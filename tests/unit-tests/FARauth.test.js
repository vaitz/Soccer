const { findFARbyUserName } = require('../../domain-usecases/FARauth');

test('should return boolean', async () =>
{
    const result = await findFARbyUserName('');
    expect(result).toBe(false);
});
    
