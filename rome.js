function addnewwefield() { 

    let newnode = document.createElement("textarea");

    newnode.classList.add("form-control");
    newnode.classList.add("wefield");
    newnode.classList.add("mt-2");

    let weob = document.getElementById("we");

    let weaddbuttonob = document.getElementById("weaddbutton");


    weob.insertBefore(newnode, weaddbuttonob);

    } 
function addnewaqfield() { 

    let realnode = document.createElement("textarea");

    realnode.classList.add("form-control");
    realnode.classList.add("eqfield");
    realnode.classList.add("mt-2");

    let aqob = document.getElementById("aq");

    let aqaddbuttonob = document.getElementById("aqaddbutton");


    aqob.insertBefore(realnode, aqaddbuttonob);

    } 

    //GenerateCV function

    function GenerateCV() {

        let Namefield = document.getElementById('namefield').value;

        let nameT1 = document.getElementById('nameT1');

    nameT1.innerHTML=Namefield;

    //Direct

document.getElementById('nameT2').innerHTML = Namefield;


document.getElementById('ContactT').innerHTML = document.getElementById('phonenum').value;


document.getElementById('AddT').innerHTML = document.getElementById('addfield').value;
document.getElementById('FbT').innerHTML = document.getElementById('facebookfield').value;
document.getElementById('InstaT').innerHTML = document.getElementById('Instagramfield').value;
document.getElementById('LinkedT').innerHTML = document.getElementById('linkedinfield').value;
document.getElementById('objectT').innerHTML = document.getElementById('objective').value;

//Work experience iteration


let wes = document.getElementsByClassName('wefield');

let str = '';

for(let element of wes){

    str=str + `<li> ${element.value}</li>`;
}

document.getElementById('weT').innerHTML = str;

//Acedemic Qualifications

let aqs = document.getElementsByClassName('eqfield');

let num = '';

for(let e of aqs){

    num = num + `<li> ${e.value}</li>`;
}

document.getElementById('aqT').innerHTML = num;


document.getElementById('cv-form').style.display = "none";
document.getElementById('cv-template').style.display = "block";

    }


function PrintCV(){

    window.print();
}