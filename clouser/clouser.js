 function createClouser(){
    let count= 7;
    return function inner(){
        count++;
        console.log(count);
    }
}
const counter= createClouser();
counter();
counter();
counter();

//we use it like 
  function createClouser(start){
    return function(){
        return start++;
    }
  }
  const counters = createClouser(7);
  console.log(counters());
  console.log(counters());
  console.log(counters());
  // a clouser is a function that returns another function. in javascript it is called a clouser.
 // createClouser() defines a local variable count and returns inner() which is a clouser.
 // inner() accesses the local variable count and increments it.
 // when you call createClouser(),it returns inner(),which clouses count.
 //even after the createClouser() finishes running , the inner() function keeps access to the local variable count.
 // this is known as a clouser.