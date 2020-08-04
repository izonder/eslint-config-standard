// anonymous arrow and async arrow functions
const foo = () => {
        return 'foo';
    },
    bar = async () => {
        return 'bar';
    },
    baz = function(...args) {
        return [...args];
    };

// named function and anonymous closure
/**
 * Logger factory
 * @param {*} logger
 * @returns {Function}
 */
function log(logger = console) { //eslint-disable-line func-style
    return (...args) => {
        logger.log(...args);
    };
}

// constructor and methods
class Test {
    /**
     * Constructor description
     */
    constructor() {
        this.foo = foo();
        this.baz = baz(...arguments);
        this.bar = new Map();
        this.logger = log();

        this.foo?.();
        this.bar.get('something')?.check();
        this.bar.get('something')?.test?.();
    }

    /**
     * Method description
     * @returns {Promise<boolean>}
     *
     * @swagger
     */
    async method() {
        this.bar = await bar();
        this.logger.log(this.bar);
    }
}

// anonymous function and self-running function
(function() {
    return new Test();
})();
