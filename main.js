//Create div HTML element
// let div1 = document.createElement('div');
// div1.id = "div1";
// div1.className = "div1Class";
// div1.style = "background-color: red;";
// div1.style.width ="250px";
// div1.style.height ="250px";

// get the div that will contain the full etch a sketch
// let griddy = document.getElementById("griddy");
// griddy.setAttribute("class",griddy)
// div1.textContent = "#1";
// griddy.appendChild(div1);

// console.log(griddy.innerHTML);

function divCreater(){
//Create an Array that stores all the Divs
    let divvy = [];
    for(i=0; i< 257; i++ ){
       divvy.push(i); 
    }
//Create a Parent Div to hold all of the "pixels"
   let parentDiv = document.getElementById('parentDiv');
//    let parentDivClass = "parentDiv";
//    document.body.appendChild(parentDiv);
//    parentDiv.setAttribute('class',parentDivClass);
//    parentDiv.setAttribute('id',parentDivClass);

//Connect the grid divs to the gridSection Class
   let gridSection = "gridSection";
     for (i=0; i < divvy.length; i++ ){
        let div = document.createElement('div');
        div.setAttribute('id', divvy[i]);
        div.setAttribute('class', gridSection)
        div.addEventListener('mouseenter', event =>{
            div.style.backgroundColor = '#302b31';
            div.style.color ='#302b31';
        });
        div.textContent = "DIV";
        div.style.color = "white";
        document.body.appendChild(div);
//attach the grid divs to the Parent Div
        parentDiv.appendChild(div);
    }
}

divCreater();

//OLD CODE Delete Soon! Select all child divs with the class gridSection

// let div = document.querySelectorAll(".gridSection");

// for (let i= 0; i <div.length; i++){
// div[i].addEventListener("mouseover", mouseHover);
    // console.log("Mouse Over!!");

// }

//Find a way to target each id of the Divs, Maybe an if Statement.
function newSketchPad (){
    let gridSizeChoice = prompt("Choose Grid Size");
    if (gridSizeChoice <= 100){
    function newDivCreator(){
        let newParentDiv = document.getElementById("parentDiv");
        newParentDiv.innerHTML ='';
        let newDivvy = [];
        for (i = 0; i<= gridSizeChoice; i++){
            newDivvy.push(i);
        }
        
        for (i=0; i < newDivvy.length; i++ ){
        let newDiv = document.createElement('div');
        let gridSection = "gridSection";
        newDiv.setAttribute('id', newDivvy[i]);
        newDiv.setAttribute('class', gridSection)
        newDiv.addEventListener('mouseenter', event =>{
            newDiv.style.backgroundColor = '#302b31';
            newDiv.style.color ='#302b31';
        });
        newDiv.textContent = "DIV";
        newDiv.style.color = "white";
        document.body.appendChild(newDiv);
//attach the grid divs to the Parent Div
        newParentDiv.appendChild(newDiv);
    }
    let x = document.querySelectorAll(".gridSection");
    x.forEach(gridSection => {
        gridSection.style.backgroundColor ="white";
        gridSection.style.color ="white";
            });
        };
        newDivCreator(gridSizeChoice);
    } else {
        alert("Can't be more than 100");
    }
}


// divCreater.textContent = "I did it!";
// griddy.appendChild(divCreater);
