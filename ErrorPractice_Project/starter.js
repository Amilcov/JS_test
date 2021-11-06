// 1.
function sum(array) {
  let sum = 0;

  try {
      for (let i = 0; i < array.length; i++) {
        sum += array[i];
      }
      return sum;
  } catch (err) {
     let errorNullArg = new TypeError('Function sum can not have null argument');  
     handleError(errorNullArg);
    
  }   

}

function handleError(error) {
 console.error(error.name + ' ' + error.message);
}
 

let res = sum(null);
console.log(res);

// 2.
function sayName(name) {

  if (typeof name!= String) {
    throw new TypeError('Function sayName must have argument a string');
  }
  console.log(name);
}

try {
  sayName();
} catch (error) {
  console.error(error.name + ' ' + error.message);
}

// 3.
class ValidationError extends Error {
  constructor(msgError = 'message default',...params) {
    super(...params);


  if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ValidationError);
  }
  
  this.name = 'ValidationError';
  this.msgError = msgError;
  this.date = new Date();
 }
}

try{
  throw new ValidationError('Function sum2 can not have null argument');
} catch (e) {
  console.log(e.name);
  console.log(e.msgError);
  console.log(e.date);
  console.log(e.stack);
}
