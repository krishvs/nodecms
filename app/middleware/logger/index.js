function logger(request, response, next) {
  console.log('I am in the logger middleware here ');
  if (typeof(next) == 'function')
  	next();
}
module.exports.logger = logger;

function logger1(res) {
  console.log('I am in the logger middleware here * '+res.url);
}
module.exports.logger1 = logger1;
