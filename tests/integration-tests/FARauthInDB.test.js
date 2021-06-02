const { findFARbyUserName } = require('../../domain-usecases/FARauth');
//not in DB
test('should return boolean', async () =>
{
    const result = await findFARbyUserName('a');
    expect(result).toBe(false);
});
    
//.toBeFalsy();
