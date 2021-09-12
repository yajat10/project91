totalplayer1=localStorage.getItem("player_1")
totalplayer2=localStorage.getItem("player_2")
document.getElementById("get_name1").innerHTML="Name1: "+totalplayer1;
document.getElementById("get_name2").innerHTML="Name2: "+totalplayer2;
firstscore1=localStorage.getItem("score1");
firstscore2=localStorage.getItem("score2");
document.getElementById("get_score1").innerHTML="Score of "+totalplayer1+": "+firstscore1;
document.getElementById("get_score2").innerHTML="Score of "+totalplayer2+": "+firstscore2;
document.getElementById("question").innerHTML="Question turn-"+totalplayer1;
document.getElementById("answer").innerHTML="Answer turn-"+totalplayer2
function secondone() {
    window.location="2pageindex.html";
    number_1=document.getElementById("number_1_input").value;
    number_2=document.getElementById("number_2_input").value;

    localStorage.setItem("number_1",number_1);
    localStorage.setItem("number_2",number_2);
}