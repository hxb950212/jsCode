function bind(func,object) {
	return function () {
		return func.apply(object,arguments);
	};
}

function method(object,name) {
	return function () {
		object[name].apply(object,arguments);
	};
}
var x=[];
// var pushX=bind(x.push,x);
var pushX=method(x,"push");
pushX(1);
pushX(2);
console.log(x);