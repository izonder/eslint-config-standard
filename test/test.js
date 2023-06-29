const {ESLint} = require('eslint'),
    fs = require('fs'),
    path = require('path'),
    expect = require('chai').expect;

describe('lint examples', () => {
    const fixturesPath = path.resolve(__dirname, 'fixtures'),
        fixtures = fs.readdirSync(fixturesPath),
        eslint = new ESLint();

    for (const file of fixtures) {
        it(file, async () => {
            const sourceCode = fs.readFileSync(path.resolve(fixturesPath, file), {encoding: 'utf-8'}),
                [result] = await eslint.lintText(sourceCode);

            expect(result.errorCount).to.be.equal(0);
        });
    }
});
