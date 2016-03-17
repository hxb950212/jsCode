function forEach(array,action) {
	for(var i=0;i<array.length;++i){
		action(array[i]);
	}
}

// forEach(["Wampeter","Foma","Granfallon"],print);

function sum(numbers) {
	var total=0;
	forEach(numbers,function (number) {
		total+=numbers;
	});
	return total;
}
sum(hehe);