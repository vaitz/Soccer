// const { shuffle } = require('../../robin');
// const { matchParticipants } = require('../../robin');
// const { rotateArray } = require('../../robin');
// const { generateTournament } = require('../../robin');
const { schedule } = require('../../domain-usecases/MatchesSchedule');


describe('test2', () => {
    it('returns the correct number',async () => {
        const result = await schedule('a', '');
        expect(result).toBe("Missing fields, make sure you entered the following: userName, password.");
    });

// test('should output text', async () =>
// {
//     const result = await schedule('a', '');
//     expect(result).toBe("Missing fields, make sure you entered the following: userName, password.");
// });
    






// test('should output array',async () =>
// {  
//     const array = [
//         "Red",
//         "Orange",
//         "Yellow",
//         "Green",
//         "Blue",
//     ];
//     const shufflearray = [
//         "Red",
//         "Orange",
//         "Yellow",
//         "Green",
//         "Blue",
//     ];

//     shuffleArray = schedule(shufflearray);
//     var res = false;
//     if (shuffleArray != array)
//         res=true
//     expect(res).toBe(true);
// });


 
// test('should output array', () =>
// {
//     const array = [
//         "Red",
//         "Orange",
//         "Yellow",
//         "Green",
//         "Blue",
//     ];

//     const array2 =  [ [ 'Red', 'Blue' ], [ 'Orange', 'Green' ] ];
    
//     const result = matchParticipants(array, 0, false);
//     // console.log(result)
//     // let counter = 0;
//     // result.forEach(element => {
//     //     counter++;
//     // });
//     expect(result).toStrictEqual(array2);
// });


// test('should output array', () =>
// {
//     const array = [
//         "Red",
//         "Orange",
//         "Yellow",
//         "Green",
//         "Blue",
//     ];

//       const rotarray = [
//           "Red",
//           "Blue",
//         "Orange",
//         "Yellow",
//         "Green",
//     ];
//     const roArray = rotateArray(array);
//     // console.log(roArray)
//     // var res = false;
//     // if (roArray != array)
//     //     res=true
//     expect(roArray).toStrictEqual(rotarray);
// });
