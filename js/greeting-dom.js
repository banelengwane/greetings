var nameElement = document.querySelector('.theName');
var greetBtn = document.querySelector('.greetMeBtn');
var lang = document.querySelector(".language");
var count = document.querySelector(".numberOfGreetings")
var message = document.querySelector(".printHere");
var resetBtn = document.querySelector(".resetBtn");

var set = greeter();
function greetMe(){
  var userName = nameElement.value;
  var checkRadioButton = document.querySelector("input[name='language']:checked");
  if(checkRadioButton){
    var language = checkRadioButton.value;
    set.takeIn(userName.toLowerCase());
    set.greet(userName.toLowerCase(), language);

    count.innerHTML = set.greetCount();
    message.innerHTML = set.greet(userName, language);
    document.getElementById('theName').value = '';
  }
}
greetBtn.addEventListener('click', greetMe);

function resetMe(){
  count.innerHTML = 0;
  document.getElementById('theName').value = '';
}
resetBtn.addEventListener('click', resetMe);
