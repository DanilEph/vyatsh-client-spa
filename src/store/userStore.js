import { makeAutoObservable } from 'mobx';

export default class UserStore {
    constructor() {
        this._isEmployee = false;
        this._isCustomer = false;
        this._user = {};
        makeAutoObservable(this);
    }

    setIsEmployee(isEmpoyee) {
        this._isEmployee = isEmpoyee;
    }

    setIsCustomer(isCustomer) {
        this._isCustomer = isCustomer;
    }

    setUser(user) {
        this._user = user;
    }

    get isCustomer() {
        return this._isCustomer;
    }

    get isEmployee() {
        return this._isEmployee;
    }

    get user() {
        return this._user;
    }
}