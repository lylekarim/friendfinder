###Friend Finder
Time to address that friend-less feeling. Take a quick survey and let the Friend Finder match you with a friend based on your compatibility score. 

## Live Link
 - https://shielded-plains-71786.herokuapp.com/

## Usage


To use our web service, go to the homepage above and click on 'take the survey'. Immediately after submitting the survey, your new best friend will pop up. Click on the API link along the bottom and  you can access the whole friend database. 

## Requirements
- Modularity in the form of separate files for server logic, storing of friends, views, and routing
- 10-question survey to assess uniqueness of users
- Use `express` and `path` npm packages in the `server.js` file
- Separate JavaScript files for routing (`htmlRoutes.js` and `apiRoutes.js`)
- Appropriate GET and POST routes for serving HTML pages and API calls https://shielded-plains-71786.herokuapp.com/
- Separate file for storing friends (`datersdata.js`)
- Calculate best match for user once survey is completed and return that match to the user

## Technologies Used

- JavaScript
- jQuery
- node.js
- Express.js
- HTML
- Bootstrap

## Code Explanation
- Our `server.js` file sets up the Express server, specifying our port number, the npm packages that need to be loaded, and also the routes, which we have externalized
- There are 2 separate HTML files (`home.html` and `survey.html`) that serve as the front-end portion of our code; they determine what the user sees (the homepage and the survey, which will also show the resulting best match)
- 2 routing files (`htmlRoutes.js` and `apiRoutes.js`) determine the back-end logic (based on the request being made, the response that gets sent to the browser); the HTML routes display the survey and the homepage based on the URL that is accessed, and the API routes send back existing content in our server-side data or add new friends
- Best match is calculated by finding the friend with the least difference in scores and then sending that friend to the browser as a JSON object
- A modal is launched on survey submit, which displays the the best match to the person who just took the survey
- Friends are stored as such:

```js
    
  {
    customerName: "Chowder",
    imageurl: "../images/chowder.png",
    matchNumber: 0,
    answers:[1,2,3,2,2,3,1,3,2,3],
   
  }
```