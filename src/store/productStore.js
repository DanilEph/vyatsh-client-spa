import { makeAutoObservable } from "mobx";

export default class ProductStore {
    constructor() {
        this._categories = [];
        this._suppliers = [];
        this._products = [];
        makeAutoObservable(this);
    }

    setCategories(categories) {
        this._categories = categories;
    }
    setSuppliers(suppliers) {
        this._suppliers = suppliers;
    }
    setProducts(products) {
        this._products = products;
    }

    get categories() {
        return this._categories;
    }
    get suppliers() {
        return this._suppliers;
    }
    get products() {
        return this._products;
    }
}