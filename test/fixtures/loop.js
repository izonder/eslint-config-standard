export default class Loop {
    /**
     * Loop args
     * @param {Array.<{id}>} data
     */
    constructor(data = []) {
        this.items = new Map();
        for (const item of data) {
            this.items.set(item.id, item);
        }
    }

    /**
     * Loop for-in
     * @param {*} drivers
     * @returns {Array.<*>}
     */
    init(drivers = {}) {
        const initializer = [];

        for (const name in drivers || {}) {
            if (drivers.hasOwnProperty(name) && drivers[name] && drivers[name].enabled) {
                initializer.push(drivers[name]);
            }
        }

        return initializer;
    }
}
