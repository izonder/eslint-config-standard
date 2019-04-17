const log = require('logger');

module.exports = function() {
    const json = '{}';
    let result = null;

    try {
        result = JSON.parse(json);
    }
    catch (e) {
        log.warn(e);
    }

    return result;
};
