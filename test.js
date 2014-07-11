var MMS = require('./lib/mms.js');
var mms = new MMS({
    username: "dennis.kuczynski@10gen.com",
    apiKey: "<FILL ME IN>",
    host: "mms-qa.mongodb.com"
});

function printResponseCallback(name) {
  return function(err, resp) {
    if (err) {
      console.log(name + ": Error");
      console.log(err);
    } else {
      //console.log(name + ": Response");
      //console.log(resp);
    }
  };
}

mms.root().info(printResponseCallback("Root Info"));

mms.groups().list(printResponseCallback("Groups List"));

mms.groups("51b9361d5ae9048f0aab01f4").info(printResponseCallback("Group Info"));

/*
mms.groups().create({
  name: 'Dennis API Test'
}, printResponseCallback("Group Create"));
*/

mms.groups("51b9361d5ae9048f0aab01f4").users().list(printResponseCallback("Group/Users List"));

mms.users("51b9361de4b0ac3683989daa").info(printResponseCallback("User Info"));

/*
mms.groups("51b9361d5ae9048f0aab01f4").users("51b9c175e4b0e8bc46627878").delete(printResponseCallback("User Delete"));

mms.users().create({
  "username": "dennis.kuczynski+api_ok@10gen.com",
  "emailAddress": "dennis.kuczynski+api_ok@10gen.com",
  "firstName": "Dennis",
  "lastName": "Kuczynski",
  "password": "testtest1!",
  "roles": [{
    "groupId": "51b9361d5ae9048f0aab01f4",
    "roleName": "GROUP_USER_ADMIN"
  }]
}, printResponseCallback("User Create"));

mms.groups("51b9361d5ae9048f0aab01f4").users().add([
  {
    "id": "53bef657e4b0aa7ca3f669d0",
    "roles": [{
      "roleName": "GROUP_READ_ONLY"
    }]
  }
], printResponseCallback("Group User Add"));

mms.users("51b9361de4b0ac3683989daa").whitelist().list(printResponseCallback("Group WhiteLists List"));

*/

mms.groups("51b9361d5ae9048f0aab01f4").alerts().list(printResponseCallback("Group Alerts List"));

mms.get("/groups/51b9361d5ae9048f0aab01f4/alerts?status=OPEN", printResponseCallback("Group Alerts List (Open)"));

mms.groups("51b9361d5ae9048f0aab01f4").alerts("531116ece4b0b0ba5eb9fca3").info(printResponseCallback("Group Alert Info"));

mms.groups("51b9361d5ae9048f0aab01f4").alertconfigs().list(printResponseCallback("Group AlertConfigs List"));

mms.groups("51b9361d5ae9048f0aab01f4").backupconfigs().list(printResponseCallback("Group BackupConfigs List"));

mms.groups("51b9361d5ae9048f0aab01f4").backupconfigs("51b9455ce4b0747b16f1b24d").info(printResponseCallback("Group BackupConfig Info"));

mms.groups("51b9361d5ae9048f0aab01f4").hosts().list(printResponseCallback("Group Hosts List"));

mms.groups("51b9361d5ae9048f0aab01f4").hosts("b511939ab50eab73579ee2c52e10de52").info(printResponseCallback("Group Host Info"));

mms.groups("51b9361d5ae9048f0aab01f4").clusters().list(printResponseCallback("Group Clusters List"));

mms.groups("51b9361d5ae9048f0aab01f4").clusters("51b9455ce4b0747b16f1b24d").info(printResponseCallback("Group Cluster Info"));
