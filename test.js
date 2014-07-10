var MMS = require('./lib/mms.js');
var mms = new MMS({
    username: "dennis.kuczynski@10gen.com",
    apiKey: "<FILL ME IN>",
    host: "mms-qa.mongodb.com"
});

/*
// This one's a bit of a hack
console.log("Get Root Data");
mms.get('', function(err, resp) {
  if (err) {
    console.log(err);
  } else {
    console.log(resp);
  }
});

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

console.log("Attempting to list single group");
var groups = mms.groups("51b9361d5ae9048f0aab01f4").info(function(err, resp) {
  if (err) {
    console.log(err);
  } else {
    console.log(resp);
  }
});

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

console.log("Attempting to list users in group");
var users = mms.groups("51b9361d5ae9048f0aab01f4").users().list(function(err, resp) {
  if (err) {
    console.log(err);
  } else {
    console.log(resp);
  }
});

console.log("Attempt to list a user");
var user = mms.users("51b9361de4b0ac3683989daa").info(function(err, resp) {
    if (err) {
    console.log(err);
  } else {
    console.log(resp);
  }
});

console.log("Attempt to remove a user from a group");
var user = mms.groups("51b9361d5ae9048f0aab01f4").users("51b9c175e4b0e8bc46627878").delete(function(err, resp) {
    if (err) {
    console.log(err);
  } else {
    console.log(resp);
  }
});

console.log("Attempt to create a user");
var user = mms.users().create({
  "username": "dennis.kuczynski+api_ok@10gen.com",
  "emailAddress": "dennis.kuczynski+api_ok@10gen.com",
  "firstName": "Dennis",
  "lastName": "Kuczynski",
  "password": "testtest1!",
  "roles": [{
    "groupId": "51b9361d5ae9048f0aab01f4",
    "roleName": "GROUP_USER_ADMIN"
  }]
}, function(err, resp) {
    if (err) {
    console.log(err);
  } else {
    console.log(resp);
  }
});

console.log("Attempt to add a user to a group");
var user = mms.groups("51b9361d5ae9048f0aab01f4").users().add([
  {
    "id": "53bef657e4b0aa7ca3f669d0",
    "roles": [{
      "roleName": "GROUP_READ_ONLY"
    }]
  }
], function(err, resp) {
    if (err) {
    console.log(err);
  } else {
    console.log(resp);
  }
});


console.log("Attempting to list alerts in group");
var users = mms.groups("51b9361d5ae9048f0aab01f4").alerts().list(function(err, resp) {
  if (err) {
    console.log(err);
  } else {
    console.log(resp);
  }
});

console.log("Attempting to list OPEN alerts in group");
var users = mms.get("/groups/51b9361d5ae9048f0aab01f4/alerts?status=OPEN", function(err, resp) {
  if (err) {
    console.log(err);
  } else {
    console.log(resp);
  }
});

console.log("Attempting to list an alert in group");
var users = mms.groups("51b9361d5ae9048f0aab01f4").alerts("531116ece4b0b0ba5eb9fca3").info(function(err, resp) {
  if (err) {
    console.log(err);
  } else {
    console.log(resp);
  }
});

console.log("Attempting to list backup configs in group");
var users = mms.groups("51b9361d5ae9048f0aab01f4").backupconfigs().list(function(err, resp) {
  if (err) {
    console.log(err);
  } else {
    console.log(resp);
  }
});

console.log("Attempting to list a backup config in group");
var users = mms.groups("51b9361d5ae9048f0aab01f4").backupconfigs("51b9455ce4b0747b16f1b24d").info(function(err, resp) {
  if (err) {
    console.log(err);
  } else {
    console.log(resp);
  }
});

console.log("Attempting to list hosts in group");
var users = mms.groups("51b9361d5ae9048f0aab01f4").hosts().list(function(err, resp) {
  if (err) {
    console.log(err);
  } else {
    console.log(resp);
  }
});

console.log("Attempting to list host in group");
var users = mms.groups("51b9361d5ae9048f0aab01f4").hosts("b511939ab50eab73579ee2c52e10de52").info(function(err, resp) {
  if (err) {
    console.log(err);
  } else {
    console.log(resp);
  }
});

*/

console.log("Attempting to list clusters in group");
var users = mms.groups("51b9361d5ae9048f0aab01f4").clusters().list(function(err, resp) {
  if (err) {
    console.log(err);
  } else {
    console.log(resp);
  }
});

/*

console.log("Attempting to list cluster in group");
var users = mms.groups("51b9361d5ae9048f0aab01f4").clusters("51b9455ce4b0747b16f1b24d").info(function(err, resp) {
  if (err) {
    console.log(err);
  } else {
    console.log(resp);
  }
});

*/
