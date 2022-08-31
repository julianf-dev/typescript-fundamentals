(() => {
  const login = (data: { email: string, password: number }) => {
    console.log(data.email, data.password)
  }

  const userData = {
    email: 'julian@julian.co',
    password: 123432
  }

  login(userData);

  type Sizes = 'S' | 'M' | 'L' | 'XL';

  const products: any[] = [];

  const addProduct = (data: {
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  }) => {
    products.push(data)
  }

  addProduct({
    title: 'Producut',
    createdAt: new Date(1993,1,1),
    stock: 12
  });

  console.log(products)
})()
