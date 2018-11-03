// ===============================================================================
// DATA
// Below data will hold all of the daters.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var daterArray = [
    
  {
    customerName: "Chowder",
    imageurl: "images/chowder.png",
    matchNumber: 0,
    answers:[1,2,3,2,2,3,1,3,2,3],
   
  },
  {
    customerName: "Panini",
    imageurl: "images/panini.jpg",
    matchNumber: 0,
    answers:[1,2,3,2,2,3,1,3,2,3],
   
  },
  {
    customerName: "Mung Daal",
    imageurl: "images/mung.mng",
    matchNumber: 0,
    answers:[1,2,3,2,2,3,1,3,2,3],
   
  },
  {
    customerName: "Schnitzel",
    imageurl: "images/schnitzel.mng",
    matchNumber: 0,
    answers:[1,2,3,2,2,3,1,3,2,3],
   
  }


  ];
  
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = daterArray;
  

