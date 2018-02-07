import BaseModel from './base.model';

export default class UserModel extends BaseModel {
    username: string;
    password: string;

    constructor(data) {
        super(data);
    }
}
