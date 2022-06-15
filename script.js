
var div=document.createElement("div");
div.innerHTML=`<input type= "text" id="txt">
<button type ="button" onclick="foo()"> Search</button>
<div id="Active"></div>
<div id="Recovered"></div>
<div id="Deaths"></div>`;
div.style.textAlign="center";
document.body.append(div);

async function foo(){
 
    let res=document.getElementById("txt").value;
    let result= await fetch(`https://api.covid19api.com/country/${res}`)
    let res1= await result.json();
    console.log(res1);
    let activeCase,recoverCase,deathsCase;
   for(let i=0; i<res1.length; i++){
   activeCase=res1[i].Active;
   recoverCase=res1[i].Recovered;
   deathsCase=res1[i].Deaths;
  }
  console.log(activeCase);
  console.log(recoverCase);
  console.log(deathsCase);
    document.getElementById("Active").innerText=`Total active cases: ${activeCase}`;
    document.getElementById("Recovered").innerText=`Total Recovered cases: ${recoverCase}`;
    document.getElementById("Deaths").innerText=`Total Deaths cases: ${deathsCase}`;
}