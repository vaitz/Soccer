const { register } = require('../../domain-usecases/RefereeRegister');

// const errors = {
//     missing: "Missing fields, make sure you entered the following: userName, password, firstName, lastName, refType.",
//     pass: "The password entered is not according to the rules: more then 6 characters or equal, contains at least one letter and one digit."
//   };
  
//   describe('test units referee register', () => {
//     test('missing field', async () => {
//         const result = await register('a', 'a', 'a', 'a', '');
//       expect(result).toBe(errors.missing);
//     });
  
//       test('incorrect password', async () => {
//          const result = await register('a', 'a', 'a', 'a', 'a');
//       expect(result).toBe(errors.pass);
//     });
//   });
    



test('should output text', async () =>
{
    const result = await register('a', 'a', 'a', 'a', '');
    expect(result).toBe("Missing fields, make sure you entered the following: userName, password, firstName, lastName, refType.");
});
    
test('should output text', async () =>
{
    const result = await register('a', 'a', 'a', 'a', 'a');
    expect(result).toBe("The password entered is not according to the rules: more then 6 characters or equal, contains at least one letter and one digit.");
});
