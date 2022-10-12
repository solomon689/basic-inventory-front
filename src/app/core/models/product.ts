export class Product {
    public id!: string;
    public name!: string;
    public stock!: number;
    public price!: number;
    public description!: string;

    constructor(product: Product) {
        Object.assign(this, product);
    }

    get getId(): string {
        return this.id;
    }
}