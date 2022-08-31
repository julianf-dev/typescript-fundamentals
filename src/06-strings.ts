(() => {
  let productTitle = 'My amazing product';
  productTitle = 'My amazing product change';
  let productName: string = 'Name of product';

  /* Uso de comilla simple en ingles con comilla doble*/
  const productDescription = " i'm bla bla bla bla bla bla";
  let myName = 'Hi, I\'m Cesar'
  console.log(myName) // Hi, I'm Cesar

  let productPrice = 200
  /* Template literals */
  const summary = `
    title: ${productTitle}
    description: ${productName}
    price: ${productPrice}
  ` // Infiere todo a string

  console.log('Summary', summary)

})();
