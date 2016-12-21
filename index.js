const fs = require('fs'),
    yaml = require('js-yaml');

module.exports = yaml.safeLoad(fs.readFileSync(`${__dirname}/standard.yml`, 'utf8'));
