(() => {

  type Sizes = 'S' | 'M' | 'L' | 'XL';
  type Product = {
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  }

  const products: Product[] = [];

  const addProduct = (data: Product) => {
    products.push(data)
  }

  addProduct({
    title: 'Producut',
    createdAt: new Date(1993,1,1),
    stock: 12
  });

  console.log(products)

  /** Destructuring */
  const printProduct = ({ title, createdAt, stock, size }: Product) => {
    console.log(title);
    console.log(createdAt);
    console.log(stock);
    console.log(size);
  };

})()
