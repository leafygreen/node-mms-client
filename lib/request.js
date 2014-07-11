'use strict';

var http      = require('http');
var https     = require('https');
var concat    = require('concat-stream');
var lazy      = require('lazy.js');
var q         = require('q');
var digest    = require('./digest.js');

module.exports = Request;


/*
 * Create an object capable of making API
 * calls. Accepts custom request options and
 * a callback function.
 */
function Request(options, callback) {
  this.options  = options || {};
  this.username = options.username;
  this.apiKey   = options.apiKey;
  this.host     = options.host || 'mms.mongodb.com';
  this.basePath = '/api/public/v1.0';
  this.retries  = 0;
  this.callback = callback;
  this.deferred = q.defer();
}


/*
 * Instantiate a Request object and makes a
 * request, returning the request promise.
 */
Request.request = function request(options, callback) {
  var req = new Request(options, function (err, body) {
    if (callback) callback(err, body);
  });

  return req.request();
};


/*
 * Perform an API request. Return the
 * request object's promise.
 */
Request.prototype.request = function request() {
  this.performRequest();
  return this.deferred.promise;
};


/*
 * Perform the actual API request.
 */
Request.prototype.performRequest = function performRequest() {
  var defaultRequestOptions,
      headers,
      key,
      requestOptions,
      req;

  headers = {
    'Content-type': 'application/json'
  };

  this.options.headers = this.options.headers || {};

  for (key in this.options.headers) {
    headers[key] = this.options.headers[key];
  }

  defaultRequestOptions = {
    method: this.options.method || 'GET',
    headers: headers
  };

  requestOptions = this.getRequestOptions(defaultRequestOptions);

  req = https.request(requestOptions, this.handleResponse.bind(this));

  this.writeBody(req);
  this.setRequestTimeout(req);

  req.on('error', this.handleError.bind(this));

  req.end();
};

/*
 * Set return the correct request options
 */
Request.prototype.getRequestOptions = function getRequestOptions(defaultOptions) {
  var requestOptions = {
    agent: new https.Agent({ maxSockets: Number(5000) }),
    host : this.host,
    port : 443,
    path : this.basePath + this.options.path
  };

  return lazy(requestOptions).merge(defaultOptions).toObject();
};

/*
 * Handle an API response, returning the
 * new API response.
 */
Request.prototype.handleResponse = function handleResponse(res) {
  var self      = this;
  var resReader = concat(directResponse);

  res.pipe(resReader);

  function directResponse(data) {
    if (res.statusCode.toString().match(/^2\d{2}$/)) {
      self.handleSuccess(res, data);
    } else {
      self.handleFailure(res, data);
    }
  }
};


/*
 * If the request options include a body,
 * write the body to the request and set
 * an appropriate 'Content-length' header.
 */
Request.prototype.writeBody = function writeBody(req) {
  if (this.options.body) {
    var body = JSON.stringify(this.options.body);

    req.setHeader('Content-length', body.length);
    req.write(body);
  } else {
    req.setHeader('Content-length', 0);
  }
};


/*
 * If the request options include a timeout,
 * set the timeout and provide a callback
 * function in case the request exceeds the
 * timeout period.
 */
Request.prototype.setRequestTimeout = function setRequestTimeout(req) {
  if (!this.options.timeout) return;

  req.setTimeout(this.options.timeout, function () {
    var err = new Error('Request took longer than ' + this.options.timeout + 'ms to complete.');

    req.abort();

    this.deferred.reject(err);
    this.callback(err);
  }.bind(this));
};


/*
 * In the event of an error in performing
 * the API request, reject the deferred
 * object and return an error to the callback.
 */
Request.prototype.handleError = function handleError(err) {
  this.deferred.reject(err);
  this.callback(err);
};


/*
 * In the event of a non-successful API request,
 * fail with an appropriate error message and
 * status code.
 */
Request.prototype.handleFailure = function handleFailure(res, buffer) {
  var challenge = res.headers['www-authenticate'];
  if (res.statusCode === 401 && challenge && this.retries === 0) {
    this.retries++;
    this.options.headers['authorization'] =
      digest(challenge, res.req.method, res.req.path, this.username, this.apiKey);
    this.performRequest();
  } else {
    var message = 'Expected response to be successful, got ' + res.statusCode;
    var err = new Error(message);
    err.statusCode = res.statusCode;
    err.body = JSON.parse(buffer || "{}");

    this.deferred.reject(err);
    this.callback(err);
  }
};


/*
 * In the event of a successful API response,
 * resolve with the response body.
 */
Request.prototype.handleSuccess = function handleSuccess(res, buffer) {
  var body         = JSON.parse(buffer || '{}');
  this.deferred.resolve(body);
  this.callback(null, body);
};
