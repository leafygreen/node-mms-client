Chai = require('chai');
tv4 = require('tv4');

MMS = require('../lib/mms.js');
MMS_API_SCHEMA = require('../lib/schema.js');
MMS_USERNAME = 'dennis.kuczynski@10gen.com';
MMS_API_KEY = "<FILL ME IN>";
MMS_HOST = 'mms-qa.mongodb.com';

assert = Chai.assert;
tv4.addSchema(MMS_API_SCHEMA);
