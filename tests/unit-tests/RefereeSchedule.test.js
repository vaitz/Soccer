const { schedule } = require('../../domain-usecases/RefereeSchedule');



describe('referee Schedule unit tests', () => {
    //TC29
test('missing fields', async () =>
{
    const result = await schedule("");
    expect(result).toBe("Missing field, make sure you entered the season name.");
});


// test('test season not exists', async () =>
// {
//     const result = await schedule("league1_2020");
//     expect(result).toBe("201, Successfully schedule referees to matches in season.");
// });


});