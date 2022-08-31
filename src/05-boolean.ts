(() => {
  let isEnable = true;
  isEnable = false;
  let isNew: boolean = false;
  console.log('is New = ', isNew);
  isNew = true;
  console.log('is New = ', isNew);

  const random = Math.random();
  console.log('Random number', random);
  isNew = random >= 0.5 ? true : false;

  console.log('is New', isNew);

  /* Mala practica */
  const myBoolean: Boolean = true;
  /* En typeScript no se puede usar undefined ni null */
})();
