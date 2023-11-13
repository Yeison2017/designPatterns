// component
class ProductComponent {
  constructor(name) {
    this.name = name;
  }

  getDetail() {
    return `${this.name}`;
  }
}

// decorator 1
class ProductDecorator {
  constructor(productComponent) {
    this.productComponent = productComponent;
  }

  getDetail() {
    return this.productComponent.getDetail();
  }
}

// decorator 2
class StoreProductDecorator extends ProductDecorator {
  constructor(productComponent, price) {
    super(productComponent);
    this.price = price;
  }

  getDetail() {
    return super.getDetail() + ` $${this.price}`;
  }
}

class CommercialInfoProductDecorator extends ProductDecorator {
  constructor(productComponent, tradenace, brand) {
    super(productComponent);

    this.tradenace = tradenace;
    this.brand = brand;
  }

  getDetail() {
    return `${this.tradenace} ${this.brand} ` + super.getDetail();
  }
}

// decoratio 3
class HTMLProductDecorator extends ProductDecorator {
  getDetail() {
    return `<h1>Información del producto</h1>
        <p>
            ${super.getDetail()}
        </p>
        `;
  }
}

// Ejecución
// component
const productComponent = new ProductComponent("Cerveza");
console.log(productComponent.getDetail());

// decorator 1 con component
const comercialInfProduct = new CommercialInfoProductDecorator(
  productComponent,
  "Lodon Porter",
  "Fuller's"
);
console.log(comercialInfProduct.getDetail());

// decorator 2 con component
const storeProduct = new StoreProductDecorator(productComponent, 10);
console.log(storeProduct.getDetail());

// decorator 2 con decorator 1
const product = new StoreProductDecorator(comercialInfProduct, 10);
console.log(product.getDetail());

// decorator 3 con decorator 2 con decorator 1
const htmlProductDecorator = new HTMLProductDecorator(product);
myDiv.innerHTML = htmlProductDecorator.getDetail();
