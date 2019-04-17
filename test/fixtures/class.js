const {BaseModel} = require('models/base');

class BaseClass extends BaseModel {
    /**
     * Base class
     */
    constructor() {
        super(...arguments);
    }
}

class TestClass extends BaseClass {
    /**
     * Test class implementation
     * @param {*} args
     */
    constructor(...args) {
        super(...args);

        this.config = {
            foo: 'foo',
            bar: 'bar',
            'foo-bar': [
                'foo',
                'bar'
            ]
        };
        this.testMethod(this.config);
    }

    /**
     * Test method
     * @param {Object} opts
     * @returns {*}
     */
    async testMethod(opts) {
        const {foo, bar} = this.opts || opts;

        return this.invokeMethod(foo, bar);
    }

    /**
     * Invoke method
     * @param {*} foo
     * @param {*} bar
     * @returns {{foo, bar, baz}}
     */
    async invokeMethod(foo, bar) {
        return {foo, bar, baz: this.config['foo-bar']};
    }
}

module.exports = TestClass;
