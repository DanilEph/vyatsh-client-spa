import { makeAutoObservable } from "mobx";

export default class ProductStore {
    constructor() {
        this._categories = [
            {id: 1, name: 'Сладости'},
            {id: 2, name: 'Медовая продукция'},
            {id: 3, name: 'Травы и чай'}
        ];
        this._suppliers = [
            {id: 1, name: 'Vyatsh'},
            {id: 2, name: 'Яшкино'},
            {id: 3, name: 'Благояр'}
        ];
        this._products = [
            {id: 1, name: 'Мед', img: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/f62a7e21168195.562fc9ffed8bd.jpg'},
            {id: 2, name: 'Чай', img: 'https://cdn1.ozone.ru/multimedia/1032640367.jpg'},
            {id: 3, name: 'Грибы', img: 'https://main-cdn.goods.ru/big1/hlr-system/1689641/100023360772b0.jpg'},
            {id: 1, name: 'Мед', img: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/f62a7e21168195.562fc9ffed8bd.jpg'},
            {id: 2, name: 'Чай', img: 'https://cdn1.ozone.ru/multimedia/1032640367.jpg'},
            {id: 3, name: 'Грибы', img: 'https://main-cdn.goods.ru/big1/hlr-system/1689641/100023360772b0.jpg'},
            {id: 1, name: 'Мед', img: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/f62a7e21168195.562fc9ffed8bd.jpg'},
            {id: 2, name: 'Чай', img: 'https://cdn1.ozone.ru/multimedia/1032640367.jpg'},
            {id: 3, name: 'Грибы', img: 'https://main-cdn.goods.ru/big1/hlr-system/1689641/100023360772b0.jpg'},
            {id: 1, name: 'Мед', img: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/f62a7e21168195.562fc9ffed8bd.jpg'},
            {id: 2, name: 'Чай', img: 'https://cdn1.ozone.ru/multimedia/1032640367.jpg'},
            {id: 3, name: 'Грибы', img: 'https://main-cdn.goods.ru/big1/hlr-system/1689641/100023360772b0.jpg'},
        ];
        this._selectedCategory = {};
        this._selectedSupplier = {};
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
    setSelectedCategory(selectedCategory) {
        this._selectedCategory = selectedCategory;
    }
    setSelectedSupplier(selectedSupplier) {
        this._selectedSupplier = selectedSupplier;
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
    get selectedCategory() {
        return this._selectedCategory;
    }
    get selectedSupplier() {
        return this._selectedSupplier;
    }
}