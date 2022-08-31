/* Motor de inferencia */
/* Scope de funcion anonima autoejecutada*/
(() => {
  let myProductName = 'product';
  let myProductPrice = 123;

  myProductName = 'change';
  /*  Typescript trae los metodos asociados al tipo */
  myProductName.toLowerCase();

  myProductPrice.toFixed();

  const myProductStock = 100;

  /* Motor explicito */
  let productName:string = 'hola'
  let productNumber:number = 223
})();
