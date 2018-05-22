var nameElement = document.querySelector('.theName');
var greetBtn = document.querySelector('.greetMeBtn');
var lang = document.querySelector(".language");
var count = document.querySelector(".numberOfGreetings")
var message = document.querySelector(".printHere");
var resetBtn = document.querySelector(".resetBtn");

var storedData = localStorage.getItem('namesGreeted') ? JSON.parse(localStorage.getItem('namesGreeted')) : {};

var greeter = Greeter(storedData);
count.innerHTML = greeter.greetCount();
function greetMe(){
  var userName = nameElement.value;
  var checkRadioButton = document.querySelector("input[name='language']:checked");
  if(checkRadioButton){
    var language = checkRadioButton.value;

    greeter.greet(userName, language);

    count.innerHTML = greeter.greetCount();
    message.innerHTML = greeter.greet(userName, language);
    document.getElementById('theName').value = '';
    localStorage.setItem('namesGreeted', JSON.stringify(greeter.returnMap()));
  }else{
    message.innerHTML = 'Select a Language';
  }
}
greetBtn.addEventListener('click', greetMe);

function resetMe(){
  count.innerHTML = 0;
  localStorage.clear();
  document.getElementById('theName').value = '';
}
resetBtn.addEventListener('click', resetMe);
