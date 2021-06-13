const { reschedule } = require('../../domain-usecases/RescheduleMatch');



describe('Rechedule Match unit tests', () => {
    //TC24
    test('missing fields', async () =>
    {
        const result = await reschedule("");
        expect(result).toBe("Missing field, make sure you entered: home_team,away_team,season name,new_date, new_stadium.");
    });


});