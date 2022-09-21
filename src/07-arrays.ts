(() => {
  let prices = [1, 2, 3, 4, 5, 66, 'hola', true];
  // prices.push('assas');
  // prices.push.push(true);

  prices.push('122');

  let products = ['hola', true];
 /*  products.push(12); */ // Error porque de manera explicita no toma number

  /* Cuando quiero cambiar los valores en runTime debo ejecutar de manera explicita*/

  const product2: (number | string | boolean | object)[] = ['hola', true];
  product2.push(12);
  product2.push({});

  let numbers = ['as']
  numbers.map(item => item == 'hola');
  /* numbers.map(item => item*2); */ // Error por el tipo de dato
})();
