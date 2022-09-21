(() => {
  /* Si solo se inicialiaza se debe declarar el typo of */
  let productInStock: number;
  /* Permite trabajar con decimales */
  let hex: number = 0x0f124;
  let binariy: number = 0b00110101;
  let octal: number = 0o0771234;

  let productPrice = 100;
  productPrice = 12;
  console.log('product Price', productPrice);

  let customerAge: number = 28;
  // customerAge = customerAge + '1' // 281
  customerAge = customerAge + 1;
  console.log('customerAge', customerAge);

  /* Cuando no se declara la variable */
 /*  console.log('Product in stock', productInStock);
  if(productInStock > 10){
    console.log('is greater')
  } */

  let discount = parseInt('aaa'); // Infiere el type number
  console.log('discount', discount); // NaN es type number

  discount < 200 ? console.log('apply') : console.log('not apply');

  const rta = 1 + '1'

})();
