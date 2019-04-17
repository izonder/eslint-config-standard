const DEFAULT_VALUE = null,
    OPTION_ONE = 3,
    OPTION_TWO = 5;

module.exports = function(foo) {
    let result = null;

    switch (foo) {
        case OPTION_ONE:
            result = foo;
            break;

        case OPTION_TWO:
        default:
            result = DEFAULT_VALUE;
    }

    return result;
};
