import ProductInterface from "./product.interface";

export default class ProductB implements ProductInterface {
    _id: string;
    _name: string
    _price: number;

    constructor(id: string, name: string, price: number) {
        this._id = id;
        this._name = name; 
        this._price = price;
        this.validate();
    }

    changeName(name: string): void {
        this._name = name;
        this.validate();
    }

    changePrice(price: number): void {
        this._price = price;
        this.validate();
    }

    get id(): string {
        return this._id;
    }

    get name(): string {
        return this._name;
    }

    get price(): number {
        return this._price * 2;
    }

    validate(): boolean {
        if (this._id.length === 0) {
            throw new Error("Id is required");
        }
        if (this._name.length === 0) {
            throw new Error("Name is required");
        }
        if (this._price < 0) {
            throw new Error("Price must be greater than 0");
        }
        return true;
    }
}