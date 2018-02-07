/**
 * Base class which will hold common properties and methods for all models
 */
export default class BaseModel {
    constructor(data) {
        Object.assign(this, data);
    }
}
