const { login } = require('../../domain-usecases/Login');

// const errors = {
//     missing: "Missing fields, make sure you entered the following: userName, password."
//   };
  
//   describe('test units login', () => {
//     test('missing field', async () => {
//         const result = await login('a', '');
//       expect(result).toBe(errors.missing);
//     });
//   });
    




test('should output text', async () =>
{
    const result = await login('a', '');
    expect(result).toBe("Missing fields, make sure you entered the following: userName, password.");
});
    
