/*var thing={};
thing.notReally=1000;
*/

/*var set={"spot":true};
set["White Fang"]=true;
delete set["spot"];
"Asoka" in set;*/

/*var paragraph="born 15-11-2003";
paragraph.charAt(0)=="b"&&paragraph.charAt(1)=="o"&&paragraph.charAt(2)=="r"&&
paragraph.charAt(3)=="n";
*/


/*var hehe="born 20/09/2014 (mother Yellow Bess): Doctor Hablble the 2nd ,Noog";
print(catNames(hehe));*/

function findLinvingCats() {
	var livingCats={"spot":true};

	function handleParagraph(paragraph) {
		if(startWith(paragraph,"born")){
			addToSet(livingCats,catNames(paragraph));
		}
		else if(startWith(paragraph,"died")){
			removeFromSet(livingCats,catNames(paragraph));
		}
    }

		for(var mail=0;mail<ARCHIVE.length;mail++){
			var paragarphs=ARCHIVE[mail].split("\n");
			for(var i=0;i<paragraph.length;i++){
				handleParagraph(paragraph[i]);
			}
		}
	
	return livingCats;
}

function startwith(string,pattern) {
	return string.slice(0,pattern.length)==pattern;
}


function catNames(paragaph) {
	var colon=paragaph.indexOf(":");
	return paragaph.slice(colon+2).split(",");
}

function addToSet(set,values) {
	for(var i=0;i<values.length;i++){
		set[values[i]]=true;
	}
}

function removeFromSet(set,values) {
	for(var i=0;i<values.length;i++){
		delete set[value[i]];
	}
}

/*var today=new Date();
today.getTime();*/

/*var today=new Date();
console.log("Year: ",today.getFullYear(),",month: ",today.getMonth(),",day: ",today.getDate());
console.log("Hour: ",today.getHours(),",minutes: ",today.getMinutes(),"second: ",today.getSeconds());
new Date().getTimezoneOffset();*/

function extractDate(paragraph) {
	function numberAt(start,length) {
		return Number(paragraph.slice(start,start+length));
	}
	return new Date(numberAt(10,4),numberAt(8,2)-1,numberAt(5,2));
}

function varRecord(name,birthdate,mother) {
	return {name:name,birth:birthdate,mother:mother};
}

function addCats(set,names,birthdata,mother) {
	for(var i=0;i<names.lenght;i++){
		set[names[i]]=catRecord(names[i],birthdate,mother);
	}
}

function deadCats(set,names,deathdate) {
	for(var i=0;i<names.length;i++){
		set[name[i]].death=deathdate;
	}
}

function extractMother(paragraph) {
	var start=paragraph.indexOf("(mother")+"(mother".length;
	var end=paragraph.indexOf(")");
	return paragraph.slice(start,end);
}

function findCats() {
	var cats={"spot": catrecord("spot",new Date(1997,2,5),"unknown")};
	function handleParagraph(paragraph) {
		if(startWith(paragraph,"born"))
			addCats(cats,catNames(paragraph),extractDate(paragraph),
				extractMother(paragraph));
		else if(startWith(paragraph,"dead")){
			deadCats(cats,catNames(paragraph),extractDate(paragraph));
		}
	}
	for(var mail=0;mail<ARCHIVE.length;mail++){
		var paragraph=ARCHIVE[mail].split("\n");
		for(var i=0;i<paragraph.length;i++){
			handleParagraph(paragraph[i]);
		}
	}
	return cats;
}

function formatDate(date) {
	return date.getDate()+"/"+(date.getMoth()+1)+"/"+date.getFullYear();
}

function catInfo(data,name) {
	var cat=data[name];
	if(cat===undefined){
		return "No cat by name of "+name+"is konwn";
	}
	var message=name+",born"+formatDate(cat.birth)+"form mother "+cat.mother;
	if("death" in cat){
		message+=",died"+formatDate(cat.death);
		return message+".";
	}
}

function oldestCat(data) {
	var oldest=null;
    
    for(var name in data){
    	var cat=data[name];
    	if(!("death in cat")&&(oldest=null||oldest.birth>cat.birth)){
    		oldest=cat;
    	}
    }
    if(oldest===null){
    	return null;
    }
    else {
    	return oldest.name;
    }
}