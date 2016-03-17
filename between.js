/*function between(string,start,end) {
	var startAt=string.indexOf(start)+start.length;
	var endAt=string.indexOf(end,startAt);
	return string.slice(startAt,endAt);
}

print(between("louis'pop'armong","'","'" ));

function between2(string,start,end) {
	var startAt=string.indexOf(start);
	if(startAt===-1){
		return undefined;
	}
	startAt+=start.length;
	var endAt=string.indexOf(end,startAt);
	if(endAt===-1){
		return undefined;
	}

	return string.slice(startAt,endAt);
}

var input=prompt("Tell me something:","");
var parentSized=between2(input,"(",")");
if(parentSized!=undefined){
	console.log("your parentSized "+parentSized+".");
}*/

/*function lastElement(arr) {
	if(arr.length>0){
		return arr[arr.length-1];
	}
	else{
		return undefined;
	}
}

function lastElement(arr) {
	if(arr.length>0){
		return arr[arr.length-1];
	}
	else{
		throw "Cannot take the last element of an empty array";
	}
}

function lastElementPlusTen(arr) {
	return lastElement[arr]+10;
}

try{
	console.log(lastElementPlusTen([]));
}
catch(error){
	console.log("something is going wrong:",error);
}*/

// var currentThing=null;
// function processThing(thing) {
// 	var prevThing=currentThing;
// 	currentTing=thing;
// 	/*做复杂的处理*/
// 	currentThing=prevThing;
// }

// function processThing(thing) {
// 	var prevThing=currentThing;
// 	currentThing=thing;
// 	try{
// 		/*做复杂的处理*/
// 	}
// 	finally{
// 		currentThing=prevThing;
// 	}
// }

try{
	print(Sasqualch);
}
catch(error){
	print("caught: "+error.message);
}

for(;;){
	try{
		alert(inpputNumber()+5);
		break;
	}
	catch(e){
		alert("You did not input a number.Try again!");
	}
}

var InvalidInputError=new Error("Invalid numberic input");

function inputNumber() {
	var input=Number(prompt("Give me a number",""));
	if(isNaN(input)){
		throw InvalidInputError;
	}
	return input;
}

try{
	alert(inputNUmber()+5);
	break;
}
catch(e){
	if(e!==InvalidInputError){
		throw e;
	}
	alert("You did not input a number.Try again.");
}