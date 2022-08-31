(() => {
  type Sizez = 'S' | 'M' | 'L' | 'XL';

  const createProductToJSONArrow = (
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizez
  ) => {
    return {
      title,
      createdAt,
      stock,
      size,
    };
  };

  function createProductToJSON(
    title: string,
    createdAt: Date,
    stock: number,
    size: Sizez) {

    const product =  {
      title,
      createdAt,
      stock,
      size
    }

    return product
  }

  const product1 = createProductToJSON('Prod 1', new Date(), 12, 'XL')
  console.log(product1)
  console.log(product1.stock)
})();
