const { schedule } = require('../../domain-usecases/MatchesSchedule');
const soccerDB = require('../../data-access/soccerDB');

describe('matches schedule integration tests', () => {
  //TC19
  test('league not exists', async () => {
    const result = await schedule('a', 'a');
    expect(result.msg).toBe("league not exists.");
});
    //TC20
    test('access DB, function tests', async () => {
    const getRoundsPolicySpy = jest.spyOn(soccerDB, 'getRoundsPolicy');
    const getTeamsNameSpy = jest.spyOn(soccerDB, 'getTeamsName');
    const createMatchesSpy = jest.spyOn(soccerDB, 'createMatches');
    const createSeasonSpy = jest.spyOn(soccerDB, 'createSeason');
    
    const result = await schedule('league1', 'seasontry');
    
    expect(getRoundsPolicySpy).toBeCalled();
    expect(getTeamsNameSpy).toBeCalled();
    expect(createMatchesSpy).toBeCalled();
    expect(createSeasonSpy).toBeCalled();

});


});
