// //authentication to all incoming requests
// app.use(async function (req, res, next) {
//     if (req.session && req.session.userName) {
//       const userName = req.session.userName;
//       next();
//       // if (user) {
//       //   req.user = user;
//       //   next();
//       // }
//     } else {
//       res.sendStatus(401); //Unauthorized
//     }
//   });