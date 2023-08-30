
module.exports = app => {
   
   app.use('/api', require('./api'));

   app.use((req, res) => {
      return res.send('Wrong route!');
   })
}