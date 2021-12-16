function sayHi(){
	alert('Hello');
}
setTimeout(sayHi, 1000);
// Hello

function sayHi2(phrase, who){
	alert(phrase+', '+who);
}

setTimeout(sayHi2, 1000, "Hello", "John");
// Hello, John