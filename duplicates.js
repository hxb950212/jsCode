function duplicates(arr) {
	var a=[];
	arr.forEach(function(item){
		if(arr.indexOf(item)!==arr.lastIndexOf(item)&&a.indexOf(item)===-1){
			a.push(item);
		}
	});
	return a;
}

console.log(duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3,6,6,6]).sort());