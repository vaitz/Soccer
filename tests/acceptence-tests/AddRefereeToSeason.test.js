// const supertest = require('supertest')
// const app = require('../../app')
// var session = require('supertest-session');
// const request = supertest(app)

const { login } = require('../../domain-usecases/Login');
const { addRefereeToSeason } = require('../../domain-usecases/AddRefereeToSeason');

test('should output text', async () =>
{
    const result = await login('may', 'm123456');
    expect(result).toBe("User login successfully.");
});
    

test('should output messege', async () =>
{
    const result = await addRefereeToSeason('almogtry1', 'league1','league1_2021');
    expect(result).toBe("Referee added to the season successfully");
});


///////////////////////////////////////////////////////////////////////////////////////////

// //FAR login
// test('Should be a clean login to system', async () =>
// {
//     await request.post('/login')
//         .send({
//             "userName": "almogtry5", 
//             "password": "m123456",
//         })
//     .expect(200)
// })


// var testSession = null;
 
// beforeEach(function () {
//   testSession = session(app);
// });

// it('should fail accessing a restricted page', function (done) {
//     testSession.get('/restricted')
//       .expect(401)
//       .end(done)
//   });



// test('Should add referee to season', async () =>
// {
//     await request.post('/addRefereeToSeason')
//         .send({
//             "refereeUserName": "almogtry1",
//             "league": "league1",
//             "season": "league1_2021"
//         })
//     .expect(201)
// })


// test('Should return an error', async () =>
// {
//     await request.post('/addRefereeToSeason')
//         .send({
//             "refereeUserName": "almogtry6",
//             "league": "league1",
//             "season": "league1_2021"
//         })
//     .expect(400)
// })


    