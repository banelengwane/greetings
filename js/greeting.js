function greeter(storage){
  var empty = '';
  var tempObj = storage || {};
  var takeIn = function(name){
    if(Number.isNaN(Number(name))){
      if(tempObj[name] === undefined){
        tempObj[name] = 0;
      }
      if(tempObj[name] === 1){}
      else{
        tempObj[name] += 1;
      }
    }
  }
  function greet(name, taal){
    if(Number.isNaN(Number(taal))){
      if(Number.isNaN(Number(name))){
        if(taal === 'english'){
          return 'Good day ' + name ;
        }else if (taal === 'afrikaans') {
          return 'Goeie daag ' + name;
        } else if (taal === 'xhosa') {
          return 'Molo ' + name;
        }else{
          return 'Select a language' ;
        }
      }else{
        if(taal === 'english'){
          return name +' is not a string';
        } else if (taal === 'xhosa'){
          return 'U- ' + name + ' uxolo faka i-STRING esisiso';
        }else if (taal === 'afrikaans'){
          return name + "  is nie n woord nie";
        }
      }
    }else{
      if(taal === 'english'){
        return 'Please select a language';
      } else if (taal === 'xhosa'){
        return 'Nceda ukhethe ulwimi lwakho';
      }else if (taal === 'afrikaans'){
        return "Kies asseblief 'n taal";
      }
    }

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
    takeIn,
    returnMap,
    clear
  };
}
