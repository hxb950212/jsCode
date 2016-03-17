function map(func,array) {
	var result=[];
	foreach(array,function(element){
         result.push(func(element));
	});
    return result;
}

function foreach(array,action) {
	for(var i=0;i<array.length;++i){
		action(array[i]);
	}
}

map(Math.round,[0.01,2,9.89,Math.PI]);