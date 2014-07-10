var MMS = require('./lib/mms.js');
var mms = new MMS({
    username: "dennis.kuczynski@10gen.com",
    apiKey: "<FILL ME IN>",
    host: "mms-qa.mongodb.com"
});

/*
console.log("Attempting to list groups");
var groups = mms.groups().list(function(err, resp) {
  if (err) {
    console.log(err);
  } else {
    console.log('Group Count: '+resp.results.length);
  }
});

console.log('try get form');
groups = mms.get('/groups', function(err, resp) {
  if (err) {
    console.log("ERROR");
    console.log(err);
  } else {
    console.log('Group Count: '+resp.results.length);
  }
});
*/

console.log("Attempting to list single group");
var groups = mms.groups("51b9361d5ae9048f0aab01f4").info(function(err, resp) {
  if (err) {
    console.log(err);
  } else {
    console.log(resp);
  }
});

/*
console.log("Attempting to create a group");
var groups = mms.groups().create({
    name: 'Dennis API Test 2'
}, function(err, resp) {
  if (err) {
    console.log(err);
  } else {
    console.log(resp);
  }
});
*/
