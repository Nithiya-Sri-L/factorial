var input1=document.createElement("INPUT");
	input1.setAttribute("type","text");
	input1.setAttribute("placeholder","Enter a number:");
	input1.setAttribute("id","nithi");
	input1.style.backgroundColor="aquamarinee";
	input1.style.height="50px";
	input1.style.width="200px";
	document.body.appendChild(input1);
	document.write('<br/>','<br/>.');
	
	document.body.style.backgroundColor="beige";
	document.body.style.textAlign="center";
	document.body.style.paddingTop="290px";


	
	button=document.createElement("button");
	button.setAttribute("onclick","fact()");
	button.innerText="run";
	button.style.backgroundColor="aqua";
	button.style.height="30px";
	button.style.width="70px";
   document.body.appendChild(button);
   

   function fact()
{
var value1=document.getElementById("nithi").value;
var temp=1
for(i=1;i<=value1;i++)
{
   temp=temp*i;
   

}
document.write(temp);
document.body.style.backgroundColor="cornsilk";
 document.body.style.textAlign="center";
 document.body.style.padding="250";
}
span=document.createElement("span");
document.body.appendChild("span");
x=document.createElement("button");
span.appendChild(x);
x.innerHTML="nithiya"