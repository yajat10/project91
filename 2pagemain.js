gotnumber1= localStorage.getItem("number_1");
gotnumber2= localStorage.getItem("number_2");
document.getElementById("n1n2").innerHTML=gotnumber1+"X"+gotnumber2
answer1=document.getElementById("number_1_input").value;
answer2=document.getElementById("number_2_input").value;
actual_answer=answer1*answer2
otheranswer=document.getElementById("answer").value;
