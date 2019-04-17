const {CLIEngine} = require('eslint'),
    fs = require('fs'),
    path = require('path');

describe('lint examples', () => {
    const fixturesPath = path.resolve(__dirname, 'fixtures'),
        fixtures = fs.readdirSync(fixturesPath),
        eslint = new CLIEngine();

    for (const file of fixtures) {
        it(file, () => {
            const sourceCode = fs.readFileSync(path.resolve(fixturesPath, file), {encoding: 'utf-8'}),
                {errorCount} = eslint.executeOnText(sourceCode);

            expect(errorCount).to.be.equal(0);
        });
    }
});
