function Greeter(storage){
  var empty = '';
  var tempObj = storage || {};

  function greet(name, taal){

      if (!taal){
          return 'Select a language'
      }

      if (name !== "" && !isNaN(name)){
          return "Name can't be a number";
      }

      if (!name){
        if(taal === 'English'){
          return 'Please enter your name';
        } else if (taal === 'IsiXhosa'){
          return 'Nceda ufake igama lakho';
        } else if (taal === 'Afrikaans'){
          return "Voer asseblief jou naam in";
        }
      }

      //if(Number.isNaN(Number(name))){
        var taken = name.toLowerCase();
        if(tempObj[taken] === undefined){
          tempObj[taken] = 0;
        }
        if(tempObj[taken] === 1){}
        else{
          tempObj[taken] += 1;
        }
        if(taal === 'English'){
          return 'Good day ' + name ;
        }else if (taal === 'Afrikaans') {
          return 'Goeie daag ' + name;
        } else if (taal === 'IsiXhosa') {
          return 'Molo ' + name;
        }
      //}
  }

  function greetCount(){
    var sum = 0;
    for(var key in tempObj){
      if(tempObj.hasOwnProperty(key)){
        sum ++;
      }
    }
    return sum;
    //return tempObj.keys.length;
  }
  function returnMap(){
    return tempObj;
  }

  function clear(){
    return empty;
  }
  return{
    greet,
    greetCount,
    returnMap,
    clear
  };
}
