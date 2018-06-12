if (vidya===undefined) var vidya = require("./out/vidya");
const aver = vidya.Aver;
const sut  = vidya.Models;

describe("Models", function() {

  describe("#1()", function() {
    
    class Person extends sut.Model{
      constructor(){
        super(null, "Person");
        new sut.Field(this, "fname");
        new sut.Field(this, "lname");
        new sut.Field(this, "age");

        new sut.Field(this, "aage");
      }
    }


    it("1",   function() { 
      const m = new Person();
      console.log( m.data );
    });

  }); 

  
});