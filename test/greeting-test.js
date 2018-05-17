describe('The Greetings function' , function(){
    it('Should return the name entered by the user on the selected language' , function(){
      var Obj = {};
      var greetList = greeter(Obj);
      greetList.takeIn('Banele');
      greetList.greet('Banele', 'english')
      assert.equal(greetList.greet('Banele', 'english'), 'Good day Banele');
    });

    it('Should return the number of names entered by the user' , function(){
      var Obj = {};
      var greetList = greeter(Obj);
      greetList.takeIn('Banele');
      greetList.takeIn('Phindi');
      greetList.greet('Banele', 'english');
      greetList.greet('Phindi', 'english');
      assert.equal(greetList.greetCount(), 2);
    });

    it('Should should not greet numbers, i.e return a message if the input is not a string' , function(){
      var Obj = {};
      var greetList = greeter(Obj);
      greetList.takeIn(1000);
      assert.equal(greetList.greet(1000, 'english'), '1000 is not a string');
    });



});
