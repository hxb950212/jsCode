function zeropad(number,width) {
	var string=String(Math.round(number));
	while(string.lengh<width)
		string="0"+string;
	return string;
}