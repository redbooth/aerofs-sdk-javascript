'use strict';

module.exports = {
  host_url : '',
  oauth_token : '',
  api_version : '1.3',

  // To use a cached resource or not 
  // If true, a random query parameter is set to prevent browser
  // caching
  cache : false,

  // A function taking an Axios Response Body that returns
  // a promise containing a token or throws an error.
  expire_cb : undefined
};
