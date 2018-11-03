// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================
var datersData = require('../data/datersData');

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
   // API GET Requests
   // Below code handles when users "visit" a page.
   // In each of the below cases when a user visits a link
   // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
   // ---------------------------------------------------------------------------

   app.get('/api/daters', function(req, res) {
      res.json(datersData);
   });

   app.get('/api/currentDate', function(req, res) {
      res.json(currentDaterData);
   });

   // API POST Requests
   // Below code handles when a user submits a form and thus submits data to the server.
   // In each of the below cases, when a user submits form data (a JSON object)
   // ...the JSON is pushed to the appropriate JavaScript array
   // (ex. User fills out a reservation request... this data is then sent to the server...
   // Then the server saves the data to the datersData array)
   // ---------------------------------------------------------------------------

   app.post('/api/daters', function(req, res) {
      // Note the code here. Our "server" will respond to requests and let users know if they have a match or not.
      // It will do this by sending out the value "true" have a table
      // req.body is available since we're using the body parsing middleware

      // if (daterData.length < 5) {
      var newFriend = req.body;


      // this will figure out our MATCH

      //gets last item in current dates array
      var a = newFriend.answers;

      //for each dater, get answers and compare with var

      for (var i = 0; i < datersData.length; i++) {
         var b = datersData[i].answers;


         var x = a.map(function(item, index) {
            // In this case item correspond to currentValue of array a,
            // using index to get value from array b
            return Math.abs(item - b[index]);
         });

         

         function sum(input) {

          if (toString.call(input) !== "[object Array]")
            return false;
    
          var total = 0;
          for (var i = 0; i < input.length; i++) {
            if (isNaN(input[i])) {
              continue;
            }
            total += Number(input[i]);
          }
          return total;
        }
         
         var matchy = sum(x);
         //put the sum from each check into a field on the matchquery object
         datersData[i].matchNumber = matchy;

         //  var min = arrayMin(datersData, 'matchNumber');
      }

      var min = datersData.reduce(function(prev, curr) {
        return prev.matchNumber < curr.matchNumber ? prev : curr;
     });

      console.log('match: ', min);
      datersData.push(newFriend);

      // end MATCH LOGIC

      res.json(min);
      // }
      //  else {
      // currentDaterData.push(req.body);
      // res.json(false);
      //  }
   });

   // ---------------------------------------------------------------------------
   // I added this below code so you could clear out the table while working with the functionality.
   // Don"t worry about it!

   app.post('/api/clear', function(req, res) {
      // Empty out the arrays of data
      datersData.length = [];
      currentDaterData.length = [];

      res.json({ ok: true });
   });
};
