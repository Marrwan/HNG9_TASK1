var express = require('express');
var router = express.Router();

// - Create an **(GET)** api endoint that returns the following  json response:
    
//      { "**slackUsername**": String, "**backend**": Boolean, "**age**": Integer, "**bio**": String }
    
//     - SlackUsername should be a **string** datatype and your slack username
//     - Backend should be a **boolean** datatype
//     - Age should be an  **integer** datatype
//     - Bio(description about yourself) should be a **string** datatype

router.get('/', function(req, res) {
  res.json({
    slackUsername: 'Abuabdirrahman',
    backend: true,
    age: 22,
    bio: 'I am a software engineer with about 4 years of experience in web development as a full-stack developer and about a year of mobile development. My strongest skills are in Javascript, Nodejs, Laravel, MySQL, MongoDB, and React. I am good at connecting a feature with business value and the importance of user experience.'
  });
});


module.exports = router;
