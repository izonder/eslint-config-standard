const assert = require('assert'),
    config = require('../index');

assert.ok(config && typeof config === 'object', 'JSON not-null object is expected');
