(() => {
  let myNull: null = null;
  let myUndefined: undefined = undefined;

  let myNullInferido: null = null; //Infiere any
  let myUndefinedInferido: undefined = undefined; //Infiere any

  /* We validate if is string or null */
  let myName: string | null;

  function hi(name: string | null) {
    let hello: string = 'Hello ';
    let hola: string = 'Hola';
    /* Optional chaining  */
    hola += name?.toLocaleLowerCase() || 'nobody'
    // Nullish coalescing
    hello += name ?? "nadie"
    console.log(hello);
  }

  myName = null;
  hi(myName); // "Hello nobody"
  myName = 'Franco';
  hi(myName); // "Hello Franco"

  const person  = {
    userName: undefined,
    lastname: 'hola'
  }
  let result = person?.userName;
  console.log(result)
})()
