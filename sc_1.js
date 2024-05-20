// FILTER menu1
var m1 = document.getElementById("menu1");
m1.style.display = "none";
			
function hide_m1(){
			if (m1.style.display == "none"){
				m1.style.display = "flex";}
			else{
				m1.style.display = "none";};				}
// FILTER menu2
var m2 = document.getElementById("menu2");
m2.style.display = "none";
			
function hide_m2(){
			if (m2.style.display == "none"){
				m2.style.display = "flex";}
			else{
				m2.style.display = "none";};				}
// Illustrations i1
	document.getElementById("b1").onclick = function hide_i2(){
document.getElementsByClassName('fish')[0].style.display = "block";
document.body.style.backgroundColor = "#FFC964";
document.getElementsByClassName('yell')[0].style.backgroundColor = "#FFC964";
document.getElementsByClassName('yell')[0].style.borderBottom = "100px solid #FFC964";
document.getElementsByClassName('fon')[0].style.backgroundColor = "#FFC964";
document.getElementById("b1").style.border = '3px solid white';
document.getElementById("b2").style.border = '1px solid white';

for (i=0;i<document.getElementsByClassName('img1').length;i++){
document.getElementsByClassName('img1')[i].style.display = "block";
document.getElementsByClassName('img2')[i].style.display = "none";
																}	}
// Illustrations i2															
	document.getElementById("b2").onclick = function hide_i1(){

document.getElementsByClassName('fish')[0].style.display = "none";
document.body.style.backgroundColor = "white";
document.getElementsByClassName('yell')[0].style.backgroundColor = "white";
document.getElementsByClassName('yell')[0].style.borderBottom = "100px solid white";
document.getElementsByClassName('fon')[0].style.backgroundColor = "white";
document.getElementById("b1").style.border = '1px solid white';
document.getElementById("b2").style.border = '3px solid white';

for (i=0;i<document.getElementsByClassName('img1').length;i++){
document.getElementsByClassName('img1')[i].style.display = "none";
document.getElementsByClassName('img2')[i].style.display = "block";
																}	}

// Font Size 
	function font_ch(bet,s){
var siz = String(s+"pt");
var siz2 = String(s+4+"pt");
document.getElementsByClassName('cen')[0].style.fontSize = siz;

document.getElementById("b3").style.border = '1px solid white';
document.getElementById("b4").style.border = '1px solid white';
document.getElementById("b5").style.border = '1px solid white';
document.getElementById("b6").style.border = '1px solid white';
document.getElementById("b7").style.border = '1px solid white';
document.getElementById("b8").style.border = '1px solid white';
document.getElementById("b9").style.border = '1px solid white';
document.getElementById("b10").style.border = '1px solid white';

var nam = String("b"+bet);
document.getElementById(nam).style.border = '3px solid white';

for (i=0;i<document.getElementsByClassName('he3').length;i++){
document.getElementsByClassName('he3')[i].style.fontSize = siz2;
																}	}

// Font Family
	function font_fam(f){
	var fam1 =String("H3_"+f);
	var fam2 =String("p_"+f);
	var n = String("b"+(10+f));
		for (i=0;i<document.getElementsByClassName('he3').length;i++){
		document.getElementsByClassName('he3')[i].style.fontFamily = fam1;	}
		document.getElementsByClassName('yell')[0].style.fontFamily = fam2;
	
	document.getElementById("b11").style.border = '1px solid white';
	document.getElementById("b12").style.border = '1px solid white';
	document.getElementById("b13").style.border = '1px solid white';
	document.getElementById("b14").style.border = '1px solid white';
	document.getElementById("b15").style.border = '1px solid white';
	
	document.getElementById(n).style.border = '3px solid white';
						}
// Hiders a at left and right
function hideTS () {
	var m1 = document.getElementById("menu1");
	m1.style.display = "none";
	var m2 = document.getElementById("menu2");
	m2.style.display = "none";
	}
// Funks for arrows
var kid=1;
function ChangeKid(n){
	kid=n;
	name1 = String("file:///E:/Vasya/Laby/Диплом/_SITE/index.html#C"+kid);
	window.location = name1;
	}

function IndeX(n){
	kid = kid+n;
	if (kid<1)	{	kid=1; }
	if (kid>37)	{	kid=37;	}
	//kid = window.location;
	name1 = String("file:///E:/Vasya/Laby/Диплом/_SITE/index.html#C"+kid);
	window.location = name1;

	}




/*

*/










