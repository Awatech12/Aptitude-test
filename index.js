
function submit(){
				var name=document.getElementById("name").value;
		var 		group=document.getElementById("group").value
	
	var awatech=document.getElementById("awatech");
	var ayinde=document.getElementById("ayinde");
	
	awatech.innerText=("Name: "+name);	
		ayinde.innerText=("Group: "+group)	;
}
									


// function for Submit Answer 
function check(){
				var c =0;
	var saheed=document.getElementById("saheed");
	var q1=document.quiz.option1.value;
	var q2=document.quiz.option2.value;
	var q3=document.quiz.option3.value;
	var q4=document.quiz.option4.value;
	var q5=document.quiz.option5.value;
	var q6=document.quiz.option6.value;
	var q7=document.quiz.option7.value;
		var q8=document.quiz.option8.value;
		var q9=document.quiz.option9.value;
	var q10=document.quiz.option10.value;
	if(q1=="HTML") {c++;}
	else{
					saheed.innerHTML=("Correct answer is (A) Hypertext Markup Language");
	}
	
	if(q2==".html") {c++};
	if(q3=="None of these") {c++};
	if(q4=="None of these") {c++};
	if(q5=="False") {c++};
	if(q6=="No") {c++};
	if(q7=="No") {c++};
	if(q8=="No") {c++};
	if(q9=="None of these") {c++};
	if(q10=="A") {c++};
	if (c>=2)
	{
					alert("You really tried you score " +(2*c)+ " out of 20");
					saheed.innerHTML=("You really tried you score " +(2*c)+ " out of 20");
	}
	else
	{alert("You didn't try enough, you score "+(2*c)+ " out of 20");
	saheed.innerHTML=("You didn't tried enough as you score " +(2*c)+ " out of 20");
	}
}
