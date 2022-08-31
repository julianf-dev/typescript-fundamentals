(() => {
  // Retornando un string
  function joinName(fName: string, lName: string): string {
    return `${fName} ${lName}`;
  }

  // Funtion with not return
  function printName(name: string): void {
    console.log(name);
  }

  printName('hola');
})
