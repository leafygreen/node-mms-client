var crypto    = require('crypto');
var uuid      = require('node-uuid');

module.exports = function(challenge, method, path, username, password) {
  var attrs = extractChallengeAttrs(challenge);
  return generate(attrs, method, path, username, password);
};

function extractChallengeAttrs(challenge) {
  var tokens = challenge.substring(7).split(',');
  var attrs = {};
  tokens.forEach(function(token) {
    var pairs = token.trim().split('=');
    attrs[pairs[0]] = extractQuotes(pairs[1]);
  });
  return attrs;
}

function generate(attrs, action, uri, username, password) {
  var ha1 = md5(username + ':' + attrs.realm + ':' + password);
  var ha2 = md5(action + ':' + uri);
  var qop = 'auth';
  var nc = qop && '00000001';
  var cnonce = qop && uuid().replace(/-/g, '');
  var digestResponse = md5(ha1 + ':' + attrs.nonce + ':' + nc + ':' + cnonce + ':' + qop + ':' + ha2);
  
  var authValues = {
    username: username,
    realm: attrs.realm,
    nonce: attrs.nonce,
    uri: uri,
    qop: qop,
    response: digestResponse,
    nc: nc,
    cnonce: cnonce,
    algorithm: attrs.algorithm,
    opaque: attrs.opaque
  };

  var authHeader = [];
  for (var k in authValues) {
    if (!authValues[k]) {
      //ignore
    } else if (k === 'qop' || k === 'nc' || k === 'algorithm') {
      authHeader.push(k + '=' + authValues[k]);
    } else {
      authHeader.push(k + '="' + authValues[k] + '"');
    }
  }
  authHeader = 'Digest ' + authHeader.join(', ');
  return authHeader;
}

function extractQuotes(str) {
    if (str.charAt(0) === '"') {
        return str.substring(1, str.length-1);

    } else {
        return str;
    }
}

function md5 (str) {
  return crypto.createHash('md5').update(str).digest('hex');
}

