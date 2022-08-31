(()=>{
  /**
   *  Create our type
   */
  type UserID =  string | number | boolean;

  let userId: string | number | boolean;

  function greeting(parametro: UserID){
    return typeof parametro === 'string'
    ? console.log('myTextIs (+)>', parametro.toLocaleLowerCase()) : null;
  };

  // Literal types
  let shirtSize: 'S' | 'M' | 'L' | 'XL';
  shirtSize = 'S';
  shirtSize = 'M';
  // shirtSize = 's';

  //* lo mismo
  type TSizes =  'SM' | 'ME' | 'LA' | '2XL';
  let Sizes: TSizes;

  function greet(parametro1: UserID, parametro2: TSizes){
    return typeof parametro1 === 'string'
    ? console.log('Ropa: (+)>', `usuario: ${parametro1.toLocaleLowerCase()}`, `tamaño: ${parametro2}`)
    : null;
  };
  greet('Nicolas','2XL');
  greet('Molina','LA');
})();
