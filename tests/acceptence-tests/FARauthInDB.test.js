const { findFARbyUserName } = require('../../domain-usecases/FARauth');
//accept
test('should return boolean', async () =>
{
    const result = await findFARbyUserName('a');
    expect(result).toBe(true);
});
    
//.toBeTruthy();