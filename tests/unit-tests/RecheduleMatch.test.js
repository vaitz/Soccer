const { reschedule } = require('../../domain-usecases/RecheduleMatch');



describe('Rechedule Match unit tests', () => {
test('test missing fields', async () =>
{
    const result = await reschedule("");
    expect(result).toBe("Missing field, make sure you entered: home_team,away_team,season name,new_date, new_stedium.");
});


test('test season not exists', async () =>
{
    const result = await reschedule("hapoel tel aviv",
    "macabi haifa",
    "league1_2020",
    "2020-08-21T20:00:00.000+00:00",
    "blumfield");
    expect(result).toBe("Successfully reschedule the matche.");
});


});