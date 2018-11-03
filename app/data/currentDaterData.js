


  //current dater js

  // ===============================================================================
// DATA
// Below data will hold the current dater data.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var currentDaterArray = [
  {
    customerName: "Said Current Date",
    imageurl: "000-000-0000",
    matchNumber: 0,
    answers:[3,2,1,2,1,1,2,3,1,2],
  }
  ];
  
  
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = currentDaterArray;
  