const path = require('path'),
    fs = require('fs'),
    yaml = require('js-yaml');

module.exports = yaml.safeLoad(fs.readFileSync(path.join(__dirname, 'standard.yml'), 'utf8'));
