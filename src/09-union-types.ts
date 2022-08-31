(() => {
  /* here I can no longer use the inference */
  let userId: string | number;
  userId = 2323;
  userId = "asass";

  const greeting = (myText: string |  number) => {
      if(typeof myText === 'string'){
        console.log(`string ${myText.toLowerCase()}`)
      }
      else{
        console.log(`number ${myText.toFixed(1)}`)
      }
  }

  greeting('asas');
  greeting(123)

})();
