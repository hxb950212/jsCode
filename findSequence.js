function findSequence(number) {
	function find(start,history) {
		if(start>number){
			return null;
		}
		else if(start===number){
			return history;
		}
		else{
			return find(start+7,"("+history+"+7)")||find(start*6,"("+history+"*6)");
		}
	}
	return find(1,"1");
}