(() => {
  let myDynamicVar: any;
  myDynamicVar = 100;
  myDynamicVar = "Hola";
  myDynamicVar = null;
  myDynamicVar = {};

  // We can change the type with de word "as"
  myDynamicVar = 'Hola';
  const rta = (myDynamicVar as string);
  console.log(rta);

  let myDynamicVar2 = 1212;
  // Cast:
  const rta2 = (<number>myDynamicVar2);
  console.log(rta2);
})();
